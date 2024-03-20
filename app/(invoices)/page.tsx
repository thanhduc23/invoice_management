import InvoicesHeader from "@/components/shared/HeaderControl";
import InvoiceCard from "@/components/shared/InvoiceCard";
import { getInvoices } from "@/lib/actions/getInvoices.action";
import React from "react";

const InvoicesPage = async () => {
  const invoices = await getInvoices();
  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 overflow-y-auto">
        <InvoicesHeader />
        {invoices.map((invoice: any) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoicesPage;
