import { auth } from './auth';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from './routes';
import { NextResponse } from 'next/server';

export default auth(req => {
  const access_token = cookies().get('access_token');
  const decodedToken = access_token && jwtDecode(access_token.value);
  console.log(decodedToken);

  const { nextUrl } = req;
  const hasCookie = cookies().has('access_token');
  const isLoggedIn = !!req.auth || hasCookie;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    return null;
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/sign-in', nextUrl));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
