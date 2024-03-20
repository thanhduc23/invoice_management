"use server";

export const getCustomer = async (customerId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/customers/${customerId}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching customer: `);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`There was a problem fetching customer data: ${error}`);
    return {};
  }
};
