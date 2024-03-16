import * as z from "zod";
export const signUpFormSchema = z.object({
  last_name: z
    .string()
    .min(1, "Last name không được để trống")
    .max(50, "Last name có tối đa 50 kí tự"),
  first_name: z
    .string()
    .min(1, "First name không được để trống")
    .max(50, "First name có tối đa 50 kí tự"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 kí tự")
    .max(10, "Số điện thoại phải có tối đa 10 kí tự"),
  username: z.string().min(5, "user name phải ít nhất 5 ký tự."),
  password: z.string().min(8, "Mật khẩu có ít nhất 8 ký tự."),
  email: z
    .string()
    .email("Email không hợp lệ")
    .max(50, "Email phải có tối đa 50 kí tự"),
});

export type signUpFormSchemaType = z.infer<typeof signUpFormSchema>;
