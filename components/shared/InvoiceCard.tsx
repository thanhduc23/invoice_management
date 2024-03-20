import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { ArrowRight } from "@/assets/icons";

const InvoiceCard = ({ invoice }: { invoice: any }) => {
  return (
    <Link
      href={`/${invoice.id}`}
      className="w-full bg-white dark:bg-[#1E2139] grid-cols-2 sm:grid-cols-[50px_110px_repeat(3,1fr)_20px] grid md:grid-cols-[80px_120px_repeat(3,1fr)_20px] items-center py-6 sm:py-4 px-6 md:px-8 rounded-md font-medium text-sm text-primary gap-1 sm:gap-4"
    >
      <div className="mb-6 font-bold uppercase sm:mb-0">
        <span className="text-[#7E88C3]">#</span>
        {invoice.id}
      </div>
      <span className="text-[#7E88C3] dark:text-[#DFE3FA]">Due 3 Days</span>
      <span className="mb-6 sm:mb-0 col-start-2 row-start-1 justify-self-end sm:justify-self-start sm:col-auto sm:row-auto text-[#858BB2] dark:text-[#FFFFFF]">
        {invoice.clientName}
      </span>
      <span className="col-start-1 row-start-3 text-base font-bold sm:col-auto sm:row-auto md:pr-5 sm:justify-self-end">
        $ {invoice.total}
      </span>
      <StatusBadge status={"Pending"} />
      <span className="justify-center hidden sm:flex">
        <ArrowRight />
      </span>
    </Link>
  );
};

export default InvoiceCard;
