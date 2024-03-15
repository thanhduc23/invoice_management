"use server";
import { signUpFormSchemaType } from "@/types";
import { revalidatePath } from "next/cache";
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
      alert("Signup failed");
      redirect("/sign-up");
    }

    const result = await response.json();
    console.log("Signup successful", result);
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    console.error("Signup error:", error);
  }
};
