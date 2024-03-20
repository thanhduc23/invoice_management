"use client";
import { FaPlus } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import InvoiceForm from "@/components/shared/InvoiceForm";

const createNewInvoice = () => {};
const InvoicesHeader = () => {
  const numOfInvoices = 10;
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col gap-1 sm:gap-2">
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary">
          Invoices
        </h1>
        <p className="text-xs font-medium text-secondary">
          {/* {numOfInvoices === 0
            ? "No invoices"
            : `There are ${numOfInvoices} total invoices`} */}
          `There are ${numOfInvoices} total invoices`
        </p>
      </div>
      <div className="flex items-center gap-6 sm:gap-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              onClick={createNewInvoice}
              className="flex gap-2 sm:gap-4 items-center p-1.5 pr-3 sm:p-2 sm:pr-4 text-xs font-bold capitalize rounded-full transition"
            >
              <span className="p-2.5 rounded-full">
                <FaPlus />
              </span>
              <div>
                New <span className="hidden sm:inline">Invoice</span>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-[800px] sm:max-w-none overflow-scroll  "
          >
            <SheetHeader>
              <SheetTitle className="text-4xl text-center mb-5 ">
                Create Invoice
              </SheetTitle>
            </SheetHeader>
            <InvoiceForm />
            <SheetFooter className="mt-10">
              <SheetClose asChild>
                <Button type="submit" variant={"destructive"}>
                  Hủy
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default InvoicesHeader;
