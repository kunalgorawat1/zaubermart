"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    console.log("prevState", prevState);
    const formData1 = new FormData();
    formData1.append("email", "kunalgorawat@gmail.com");
    formData1.append("password", "zaubermart");
    await signIn("credentials", formData1);
  } catch (error) {
    throw new Error(error);
  }
}
