import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Refreshes the user's auth session on every request and writes any rotated
 * tokens back to the response cookies. This MUST run in middleware — without
 * it, Server Components can read stale/expired sessions and users get randomly
 * logged out.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          // Mirror cookies onto the request so the rest of this pass sees them...
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          // ...then rebuild the response and write the cookies onto it.
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
          // 0.10.3: anti-caching headers (Cache-Control: no-store, etc.) so a
          // CDN never caches one user's Set-Cookie and serves it to another.
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value),
          );
        },
      },
    },
  );

  // IMPORTANT: do not run code between createServerClient and getUser().
  // getUser() validates the token with the Auth server and triggers refresh.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ─── ROUTE PROTECTION (denylist: everything protected by default) ────
  const redirect = handleUnauthenticated(request, user);
  if (redirect) {
    // Copy the refreshed session cookies onto the redirect so they aren't lost.
    supabaseResponse.cookies.getAll().forEach(({ name, value }) =>
      redirect.cookies.set(name, value),
    );
    return redirect;
  }
  // ────────────────────────────────────────────────────────────────────

  // IMPORTANT: return supabaseResponse as-is (or copy its cookies onto any new
  // redirect response), otherwise the refreshed session cookies are lost.
  return supabaseResponse;
}

/**
 * Decides whether an unauthenticated request should be redirected (e.g. to a
 * login page) or allowed through.
 *
 * @param request the incoming request (use request.nextUrl.pathname to branch)
 * @param user    the authenticated user, or null if not logged in
 * @returns a NextResponse redirect to block the request, or null to allow it
 */
function handleUnauthenticated(
  request: NextRequest,
  user: unknown,
): NextResponse | null {
  // Denylist policy: every route requires auth EXCEPT these public prefixes.
  const publicPrefixes = ["/", "/login", "/signup", "/auth"];
  const path = request.nextUrl.pathname;

  const isPublic = publicPrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );

  if (!isPublic && !user) {
    const loginUrl = new URL("/login", request.url);
    // Remember where the user wanted to go, to send them back after login.
    loginUrl.searchParams.set("redirectTo", path);
    return NextResponse.redirect(loginUrl);
  }

  return null;
}
