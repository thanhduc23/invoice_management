"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import { useState } from "react";
import {
  signInFormBody,
  signInFormBodyTypeType,
} from "@/SchemaValidations/auth.schema";
import { useRouter } from "next/navigation";
import { login } from "@/lib/actions/signIn.action";
import { setAuthTokens } from "@/utils/auth";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<signInFormBodyTypeType>({
    resolver: zodResolver(signInFormBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLoginSuccess = (tokens: { refresh: string; access: string }) => {
    setAuthTokens(tokens);
  };
  const onSubmit = async (data: signInFormBodyTypeType) => {
    setIsSubmitting(true);
    try {
      const tokens = await login(data);
      if (tokens) {
        handleLoginSuccess(tokens);
        console.log("Đăng nhập thành công");
      }
      toast("Đăng nhập thành công", {
        description: "Chúc mừng bạn đã đăng nhập thành công.",
      });
      router.push("/");
    } catch (err) {
      // console.error("Đăng nhập thất bại:", err);
      toast("Đăng nhập thất bại", {
        description: "Vui lòng kiểm tra lại thông tin đăng nhập.",
      });
    } finally {
      setIsSubmitting(false);
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex-col flex gap-y-5 p-10  border-double border-sky-800 rounded-lg border-2 min-w-[400px] max-w-[490px] "
      >
        <h2 className="text-2xl font-bold text-center mb-5">Đăng Nhập</h2>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên tài khoản </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Tên tài khoản" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu </FormLabel>
              <FormControl>
                <Input type="password" placeholder="Mật khẩu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          type={"submit"}
          className="w-full mt-5 py-3 rounded-lg bg-blue-400 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          {isSubmitting ? "Vui lòng chờ..." : "Đăng nhập"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
