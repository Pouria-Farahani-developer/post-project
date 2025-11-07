import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const lowerPath = pathname.toLowerCase();

  if (pathname === lowerPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = lowerPath;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: '/:path*',
};
