"use server ";

import { signUpFormBodyType } from "@/SchemaValidations/auth.schema";
import { redirect } from "next/navigation";

export const signUp = async (data: signUpFormBodyType) => {
  try {
    console.log(JSON.stringify(data));
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sign-up/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      throw new Error("Sign up failed");
    }

    const responseData = await result.json();
    console.log(responseData);
  } catch (error) {
    console.error("Sign up failed:", error);
  }
};
