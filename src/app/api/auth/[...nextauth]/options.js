/** @format */

import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "test@email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        return null;
      },
    }),
  ],
};
