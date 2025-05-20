"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSession } from "@/contexts/SessionContext";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});

export function ProfileForm() {
  const { user, login } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const parent = useRef(null);
  
    useEffect(() => {
      parent.current && autoAnimate(parent.current);
    }, [parent.current]);

  useEffect(() => {
    if (loggedIn && user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate(-1);
      }
    }
  }, [user, loggedIn]);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      await login(values.email, values.password);
      toast.success("Login Successful");
      setLoggedIn(true);
    } catch (error) {
      toast.error("Login failed");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem ref={parent}>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem ref={parent}>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
