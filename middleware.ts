import { NextRequest, NextResponse } from 'next/server';

import { Env } from '@/lib/env';

export const config = {
  matcher: ['/api/:path*'],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    const authorized = user === Env.username && pwd === Env.password;

    if (authorized) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': "Basic realm='private_pages'",
    },
  });
}