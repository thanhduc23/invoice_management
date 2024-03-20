import { getInvoiceDetails } from "@/lib/actions/getInvoiceDetails.action";
import InvoiceClient from "./InvoiceDetails";

type params = {
  invoiceId: number;
};
const InvoicePage = async ({ params }: { params: params }) => {
  console.log(params);
  const invoice = await getInvoiceDetails(params.invoiceId);
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <InvoiceClient invoice={invoice} />
    </div>
  );
};

export default InvoicePage;
