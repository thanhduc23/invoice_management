// getInvoices.action.ts

import { getCustomer } from "./getCustomer.action";
import { getProducts, getTotalPrice } from "./getProducts.action";

export const getInvoices = async () => {
  try {
    const invoiceResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/invoices/`
    );
    const invoiceData = await invoiceResponse.json();

    if (!invoiceResponse.ok) {
      throw new Error(
        `Error fetching invoices: ${
          invoiceData.message || invoiceResponse.status
        }`
      );
    }

    const invoices = invoiceData.results;

    for (const invoice of invoices) {
      let customer = await getCustomer(invoice.customer);
      invoice.clientName = `${customer.first_name} ${customer.last_name}`;
      invoice.total = await getTotalPrice(invoice.products);
    }

    console.log(invoices);
    return invoices;
  } catch (error) {
    console.error(`There was a problem fetching invoices: ${error}`);
    return [];
  }
};
