import InvoicesHeader from "@/components/shared/HeaderControl";
import InvoiceCard from "@/components/shared/InvoiceCard";
import {
  getInvoices,
  getNumOfInvoices,
} from "@/lib/actions/getInvoices.action";
import React from "react";

const InvoicesPage = async () => {
  const invoices = await getInvoices();
  const getNumOfInvoice = await getNumOfInvoices();
  return (
    <div className=" w-screen flex flex-col justify-center items-center mt-10">
      <div className="w-[980px] flex flex-col gap-y-10  ">
        <InvoicesHeader numOfInvoices={getNumOfInvoice} />
        <div className="flex flex-col gap-3 overflow-y-auto">
          {invoices.map((invoice: any) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;
