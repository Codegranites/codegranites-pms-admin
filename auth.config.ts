import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from './schemas';
import { getUserByEmail, signinUser } from './data/user';

export default {
  providers: [
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
  ]
} satisfies NextAuthConfig;
