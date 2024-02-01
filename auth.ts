import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { LoginSchema } from './schemas';
import { getUserByEmail } from './data/user';

import authConfig from './auth.config';
import { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  events: {
    async signIn({ user }) {
      console.log('signIn', user.email);
    }
  },
  ...authConfig
});

/**
 * This function checks if the user credentials are valid and access token is valid
 * - req is the cookies for next/server
 * @param req
 * @type {string | null}
 * @returns
 */

export function getCredentials(req: NextRequest) {
  // getting the token from the cookie
  let tokens = req.cookies.get('access_token')?.value;
  if (!tokens) return null;
  const decodedToken = jwtDecode(tokens);
  const credentials = { token: JSON.parse(tokens), expires: decodedToken.exp };
  return credentials;
}
