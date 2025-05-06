import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";

  if (hostname.startsWith("thecurve.")) {
    // Rewrite requests to /thecurve folder
    const url = req.nextUrl.clone();
    url.pathname = `/thecurve${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Default behavior
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
