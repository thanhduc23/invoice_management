"use server";
import { getCustomer } from "./getCustomer.action";
import { getProducts, getTotalPrice } from "./getProducts.action";

export const getInvoiceDetails = async (invoiceId: number) => {
  try {
    const invoiceResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/invoices/${invoiceId}`
    );
    const invoice = await invoiceResponse.json();

    if (!invoiceResponse.ok) {
      throw new Error(
        `Error fetching getInvoice Details: ${
          invoice.message || invoiceResponse.status
        }`
      );
    }

    invoice.customer = await getCustomer(invoice.customer);
    invoice.productList = await getProducts(invoice.products);
    invoice.total = await getTotalPrice(invoice.products);

    return invoice;
  } catch (error) {
    console.error(`There was a problem fetching invoices: ${error}`);
    return {};
  }
};
