import InvoiceInfoItemList from "./InvoiceInfoItemList";

const InvoiceInfo: React.FC<any> = ({ invoice }) => {
  //   const invoiceDate = new Date(invoice.invoiceDate);

  //   const dueDate = add(invoiceDate, {
  //     days: TERMS[invoice.paymentTerm],
  //   });

  return (
    <div className="overflow-y-auto rounded-md ">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-2 px-8 py-5 bg-[#FFFFFF] dark:bg-[#1E2139] rounded-md text-[#7E88C3] dark:text-[#DFE3FA] font-medium  border-solid border-2 dark:border-none">
        {/* Id + description */}
        <div className="flex flex-col gap-2">
          <div className="text-base font-bold uppercase text-primary">
            <span className="text-[#7E88C3]">#</span>
            {invoice.id}
          </div>
        </div>
        {/* Bill From */}
        <div className="flex flex-col col-start-1 gap-1 sm:text-right sm:col-start-3">
          <span>{invoice.customer.address}</span>
          <span>{invoice.customer.city}</span>
          <span className="uppercase">{invoice.customer.postal_code}</span>
          <span>{invoice.customer.country}</span>
        </div>
        {/* Invoice Date + Payment Date */}
        <div className="flex flex-col col-start-1 gap-8 sm:col-start-auto">
          <div className="flex flex-col gap-3">
            <span>Invoice Date</span>
            <span className="text-base font-bold text-primary">
              {/* {format(invoiceDate, "dd MMM yyyy")} */}
              20/03/2024
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span>Payment Due</span>
            <span className="text-base font-bold text-primary">
              {/* {format(dueDate, "dd MMM yyyy")} */}
              20/03/2024
            </span>
          </div>
        </div>
        {/* Bill To */}
        <div className="flex flex-col gap-2 justify-self-end sm:justify-self-start">
          <div className="flex flex-col gap-3">
            <span>Bill To</span>
            <span className=" font-bold text-primary text-2xl">
              {`${invoice.customer.first_name} ${invoice.customer.last_name}`}
            </span>
          </div>
          <div className="flex flex-col col-start-3 gap-1">
            <span>{invoice.customer.province}</span>
            <span>{invoice.customer.city}</span>
            <span className="uppercase">{invoice.customer.postal_code}</span>
            <span>{invoice.customer.country}</span>
          </div>
        </div>
        {/* Client's email */}
        <div className="flex flex-col col-start-1 gap-2 sm:col-start-auto">
          <div className="flex flex-col gap-3">
            <span>Sent To</span>
            <span className="text-2xl font-bold text-primary">
              {invoice.customer.email}
            </span>
          </div>
        </div>
        {/* Items Container */}
        <div className="w-full col-span-3 mt-8 overflow-hidden rounded-md">
          {/* Item List */}
          <InvoiceInfoItemList items={invoice.productList} />
          {/* Total */}
          <div className="p-8 bg-[#373B53] dark:bg-[#0C0E16] flex justify-between items-center">
            <span>Amount Due</span>
            <span className="text-2xl font-bold">$ {invoice.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
