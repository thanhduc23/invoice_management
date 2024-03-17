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

import { signUp } from "@/lib/signUp.action";
import { useState } from "react";
import {
  signUpFormBody,
  signUpFormBodyType,
} from "@/SchemaValidations/auth.schema";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } catch (err) {
      console.error("Đăng ký không thành công.");
      setIsSubmitting(false);
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
        <h2 className="text-2xl font-bold text-center mb-5">Sign Up</h2>
        <FormField
          control={form.control}
          name="first_name"
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
          name="last_name"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number </FormLabel>
              <FormControl>
                <Input type="text" placeholder="phone" {...field} />
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
              <FormLabel>Username </FormLabel>
              <FormControl>
                <Input type="text" placeholder="user name" {...field} />
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
              <FormLabel>Password </FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
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
          className="w-full py-3 rounded-lg bg-blue-400 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          {isSubmitting ? "Vui lòng chờ..." : "Đăng kí"}
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
