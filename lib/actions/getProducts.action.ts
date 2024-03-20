"use server";
const fetchProduct = async (productId: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error fetching product: ${data.message || response.status}`
    );
  }

  return data;
};

// Function to return the total price of all products
export const getTotalPrice = async (productIds: number[]) => {
  let total = 0;
  for (const productId of productIds) {
    try {
      const product = await fetchProduct(productId);
      total += parseFloat(product.price);
    } catch (error) {
      console.error(`There was a problem fetching product data: ${error}`);
    }
  }
  return total.toFixed(2);
};

// Function to return details of all products
export const getProducts = async (productIds: number[]) => {
  const products = [];
  for (const productId of productIds) {
    try {
      const product = await fetchProduct(productId);
      products.push(product);
    } catch (error) {
      console.error(`There was a problem fetching product data: ${error}`);
    }
  }
  return products;
};
