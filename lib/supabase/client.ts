import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-side Supabase client.
 *
 * Uses the PUBLISHABLE key (sb_publishable_...) which is safe to expose to the
 * browser. In a browser runtime @supabase/ssr automatically reads/writes the
 * auth cookies via document.cookie, so no `cookies` config is needed here.
 *
 * Create a fresh client per use (it's cheap and a singleton under the hood).
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
