import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { signinUser } from "./data/user";
import Google from "next-auth/providers/google";
import { login } from "./actions/login";

export default {
  secret: "i AM A SECretive secret",
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        //@ts-ignore
        const parsedValues = JSON.parse(credentials.loginva);
        const validatedFields = LoginSchema.safeParse(parsedValues);
        console.log(parsedValues);

        if (!validatedFields.success) {
          return null;
        }
        const { email, password } = validatedFields.data;

        const user = await signinUser({ email, password });
        if (!user) return null;

        return user.res;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      return { ...token, ...user, ...account, ...profile };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      console.log(session);
      return session;
    },
  },
} satisfies NextAuthConfig;
