"use client";

import { ArrowLeft } from "@/assets/icons";
import InvoiceHead from "@/components/shared/InvoiceHead";
import InvoiceInfo from "@/components/shared/invoiceInfo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InvoiceClient: React.FC<any> = ({ invoice }) => {
  const status =
    invoice.status === "Pending"
      ? "Pending"
      : invoice.status === "draft"
      ? "Draft"
      : "paid";

  const handleDelete = async (id: number) => {};
  const handleEdit = async (id: number) => {};

  return (
    <div className="w-[980px] flex flex-col h-full gap-6 text-sm font-bold text-primary">
      <Link
        href="/"
        className="flex items-center self-start gap-5 p-2 text-2xl"
      >
        <ArrowLeft />
        <span>Go back</span>
      </Link>
      <InvoiceHead status={status}>
        <Button variant={"destructive"}>Delete</Button>
        <Button>Mark as Paid</Button>
      </InvoiceHead>
      <InvoiceInfo invoice={invoice} />

      <div className="flex justify-between flex-1 sm:hidden px-6 py-4 bg-[#FFFFFF] dark:bg-[#1E2139] items-center rounded-t-md"></div>
    </div>
  );
};

export default InvoiceClient;
