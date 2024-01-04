import NextAuth from "next-auth";
import { authConfig } from "./app/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { fetchUsers } from "./app/lib/data";

async function getUser(email) {
  try {
    const users = await fetchUsers();
    console.log(users);
    return users;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        console.log("AUTH.JS", parsedCredentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          console.log("gotUSER", user);
          if (!user) return null;
          console.log("AUTH.JS", password);
          console.log("AUTH.JS", user[0].password);
          const passwordMatch = password == user[0].password;
          console.log("AUTH.JS passwordMatch: ", passwordMatch);
          if (passwordMatch) return user[0];
        }

        console.log("Invalid user");
        return null;
      },
    }),
  ],
});
