"use server ";

import { signUpFormBodyType } from "@/SchemaValidations/auth.schema";

export const signUp = async (data: signUpFormBodyType) => {
  try {
    const result = await fetch(
      `https://scrum-team-be.vercel.app/api-view/sign-up/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!result.ok) {
      throw new Error("Sign up failed");
    }

    const responseData = await result.json();
    console.log(responseData);
  } catch (error) {
    console.error("Sign up failed:", error);
  }
};
