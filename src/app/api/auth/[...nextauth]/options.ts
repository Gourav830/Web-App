import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import axios from "axios";
import Credentials from "next-auth/providers/credentials";
import { LOGIN_URL } from "@/lib/apiEndPoints";

export type CustomSession = {
  user?: CustomUser;
  expires: ISODateString;
};

export type CustomUser = {
  id?: string | number | null; 
  username?: string | null;
  email?: string | null;
  phoneNumber?: number | null;
  token?: string | null;
};

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: CustomUser}) {
      if (user) {
        token.user = {
          id: String(user.id),        
          username: user.username,
          email: user.email,
          phoneNumber: (user as CustomUser).phoneNumber,
        };
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: JWT;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Sign in with Username",
      type: "credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: { 
          label: "Password", 
          type: "password",
          placeholder: "Enter your password"
        },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(LOGIN_URL, {
            username: credentials?.username,
            password: credentials?.password,
          });
          
          const user = data?.data;

          if (user) {
            return {
              id: String(user.id), 
              username: user.username,
              email: user.email,
              phoneNumber: user.phoneNumber,
              token: user.token, 
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      },
    }),

  ],
  jwt: {
    maxAge: 30 * 24 * 60 * 60, 
  },
};
