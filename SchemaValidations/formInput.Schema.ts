import * as z from "zod";

const productSchema = z.object({
  name: z.string().min(1),
  quantity: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && Number.isInteger(val))
    .refine((val) => val > 0),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0),
});

const customerSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  company: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postal_code: z.string(),
  country: z.string(),
});

export const invoiceFormSchema = z.object({
  customer: customerSchema,
  products: z.array(productSchema),
});

export type invoiceFormSchemaType = z.infer<typeof invoiceFormSchema>;
