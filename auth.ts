import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { LoginSchema } from './schemas';
import { getUserByEmail } from './data/user';

import authConfig from './auth.config';

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
