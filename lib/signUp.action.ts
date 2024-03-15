"use server";
import { signUpFormSchemaType } from "@/types";

export const signUp = async (data: signUpFormSchemaType) => {
  try {
    const response = await fetch(
      "https://scrum-team-be.vercel.app/api-view/sign-up/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const result = await response.json();

    console.log("Signup successful", result);
  } catch (error) {
    console.error("Signup error:", error);
  }
};
