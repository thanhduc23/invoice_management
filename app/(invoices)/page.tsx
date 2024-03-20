import InvoicesHeader from "@/components/shared/HeaderControl";
import InvoiceCard from "@/components/shared/InvoiceCard";
import React from "react";

const InvoicesPage = () => {
  const invoices = [
    { id: "1", clientName: "Thanh duc", total: 560 },
    { id: "2", clientName: "Thanh duc", total: 560 },
    { id: "3", clientName: "Thanh duc", total: 560 },
    { id: "4", clientName: "Thanh duc", total: 560 },
    { id: "5", clientName: "Thanh duc", total: 560 },
    { id: "6", clientName: "Thanh duc", total: 560 },
  ];
  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3 overflow-y-auto">
        <InvoicesHeader />
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoicesPage;
