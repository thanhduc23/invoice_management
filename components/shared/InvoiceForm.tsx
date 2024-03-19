"use client";
import { FaPlus, FaTrash } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import {
  invoiceFormSchema,
  invoiceFormSchemaType,
} from "@/SchemaValidations/formInput.Schema";
import { makeInvoice } from "@/lib/actions/makeInvoice.action";
import { formatPrice } from "@/utils/format";

const InvoiceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<invoiceFormSchemaType>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      customer: {
        first_name: "",
        last_name: "",
        email: "",
        company: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
      },
      products: [
        {
          name: "",
          quantity: 0,
          price: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "products",
  });
  const onSubmit = async (data: invoiceFormSchemaType) => {
    try {
      setIsSubmitting(true);
      await makeInvoice(data);
      toast({
        title: "Create successfully",
        description: "Chúc mừng bạn đã tạo Invoice thành công.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Create Failed",
        description: "Tạo không thành công.",
      });
    } finally {
      setIsSubmitting(false);
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full flex-col flex gap-y-5 p-10  border-double border-sky-800 rounded-lg border-2   ">
          <h2 className="text-2xl font-bold">Customer Information</h2>
          <div className="flex gap-x-5">
            <FormField
              control={form.control}
              name="customer.first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customer.last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customer.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="customer.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer.company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customer.address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-x-5">
            <FormField
              control={form.control}
              name="customer.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Province" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customer.postal_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal code</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Postal code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customer.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex-col flex gap-y-5 p-10  border-double border-sky-800 rounded-lg border-2 mt-5  ">
          <h2 className="text-2xl font-bold">Product Information</h2>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex justify-between items-center gap-x-2"
            >
              <FormField
                control={form.control}
                name={`products.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Item Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`products.${index}.quantity`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Quantity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`products.${index}.price`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Total($)</FormLabel>
                <FormControl>
                  {/* Assuming you have a function to format your price, like `formatPrice` */}
                  <Input
                    type="text"
                    placeholder="Total"
                    value={formatPrice(
                      form.watch(`products.${index}.quantity`) *
                        form.watch(`products.${index}.price`)
                    )}
                    disabled
                  />
                </FormControl>
              </FormItem>
              <Button
                type="button"
                variant={"destructive"}
                onClick={() => remove(index)}
                className=" mt-7 rounded-xl"
              >
                <FaTrash />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() => append({ name: "", quantity: 0, price: 0 })}
            className="mt-4 flex items-center rounded-lg"
          >
            <FaPlus className="mr-2" /> Add New Item
          </Button>
        </div>
        <Button
          disabled={isSubmitting}
          type={"submit"}
          className="w-full mt-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          {isSubmitting ? "Đang tạo..." : "Create"}
        </Button>
      </form>
    </Form>
  );
};

export default InvoiceForm;
