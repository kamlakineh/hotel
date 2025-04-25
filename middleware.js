import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/auth/login")) {
    return NextResponse.next();
  }
  if (pathname.startsWith("/admin")) {
    const isAuthenticated = request.cookies.get(
      "next-auth.session-token"
    )?.value;
    return NextResponse.next();
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*"],
};
