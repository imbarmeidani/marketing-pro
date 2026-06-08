import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Next.js 16: the "middleware" file convention was renamed to "proxy".
// Same behaviour, runs on the Node.js runtime.
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Run on all request paths EXCEPT:
     * - _next/static (build assets)
     * - _next/image (image optimizer)
     * - favicon.ico
     * - common image files
     * Add any other public paths you want to skip.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
