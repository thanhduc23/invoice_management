"use server";
import { invoiceFormSchemaType } from "@/SchemaValidations/formInput.Schema";

export const makeInvoice = async (data: invoiceFormSchemaType) => {
  console.log(JSON.stringify(data));
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api-view/invoice/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Create failed");
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error during create:", error);
    throw error;
  }
};
