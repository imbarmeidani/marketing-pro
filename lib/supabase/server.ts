import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Server-side Supabase client bound to the current request's cookies.
 *
 * Uses the PUBLISHABLE key — the user's session lives in the cookies, so this
 * client acts AS the logged-in user and RLS policies are enforced. This is the
 * client you want in Server Components, Route Handlers and Server Actions.
 *
 * Must be awaited because `cookies()` from next/headers is async.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a Server Component, which cannot set cookies.
            // Safe to ignore — the middleware refreshes the session instead.
          }
        },
      },
    },
  );
}

/**
 * Privileged server-side client using the SECRET key.
 *
 * ⚠️ This BYPASSES Row Level Security entirely. Never expose it to the browser
 * and never use it to act on behalf of a user. Reserve it for trusted
 * server-only work: webhooks, cron jobs, admin tasks. No cookies, no session.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
