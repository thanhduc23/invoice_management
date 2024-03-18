import { signInFormBodyTypeType } from "@/SchemaValidations/auth.schema";

export const login = async (data: signInFormBodyTypeType) => {
  try {
    const response = await fetch(
      `https://scrum-team-be.vercel.app/api/token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const tokens = await response.json();
    console.log(tokens);
    return tokens;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
