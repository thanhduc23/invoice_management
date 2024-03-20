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
import { useToast } from "@/components/ui/use-toast";

import { signUp } from "@/lib/actions/signUp.action";
import { useState } from "react";
import {
  signUpFormBody,
  signUpFormBodyType,
} from "@/SchemaValidations/auth.schema";
import { useRouter } from "next/navigation";
import { CircleLoader } from "react-spinners";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<signUpFormBodyType>({
    resolver: zodResolver(signUpFormBody),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data: signUpFormBodyType) => {
    // console.log(data);
    try {
      setIsSubmitting(true);
      await signUp(data);
      toast({
        title: "Đăng kí thành công",
        description: "Chúc mừng bạn đã đăng kí thành công.",
      });
      router.push("/");
    } catch (err) {
      setIsSubmitting(false);
      toast({
        variant: "destructive",
        title: "Đăng kí không thành công",
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
        className="w-full flex-col flex gap-y-5 p-10 border-double border-sky-800 rounded-lg border-2 min-w-[400px] max-w-[490px] light:border-black"
      >
        <h2 className="text-2xl font-bold text-center mb-5">Đăng Ký</h2>
        <div className="flex gap-x-5">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Tên" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Họ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email </FormLabel>
              <FormControl>
                <Input type="text" placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          type={"submit"}
          className="w-full mt-5 py-3"
        >
          {isSubmitting ? (
            <CircleLoader color="#3646d6" size={30} />
          ) : (
            "Đăng kí"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
