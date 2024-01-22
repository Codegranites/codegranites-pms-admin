import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from './schemas';
import { getUserByEmail, signinUser } from './data/user';
import Google from 'next-auth/providers/google';
import { login } from './actions/login';

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await signinUser({ email, password });
          if (!user) return null;

          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.accessToken = user;
      }
      return token;
    }
  }
} satisfies NextAuthConfig;
