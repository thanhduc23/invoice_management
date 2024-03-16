"use server ";
import { signUpFormSchemaType } from "@/types";
import { redirect } from "next/navigation";

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
      redirect("/sign-up");
    }

    const result = await response.json();
    // redirect("/");
    console.log("Signup successful", result);
  } catch (error) {
    console.error("Signup error:", error);
  }
};
