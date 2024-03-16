"use server ";
import { signUpFormSchemaType } from "@/types";
import { Console } from "console";
import { env } from "process";
// import { redirect } from "next/navigation";

export const signUp = async (data: signUpFormSchemaType) => {
  console.log(JSON.stringify(data));
  const result = await fetch(
    `https://scrum-team-be.vercel.app/api-view/sign-up/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((res) => res.json());

  console.log(result);
};
