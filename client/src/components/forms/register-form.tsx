import * as registerUser from "@/actions/auth-actions/register-user";
import AuthCardWrapper from "@/components/cards/auth-card-wrapper";
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

import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

export default function LoginForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: registerUser.registerUser,
    onSuccess: async (data) => {
      toast.success(data.message);
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const formSubmitHandler = (values: z.infer<typeof RegisterSchema>) => {
    mutation.mutate(values);
    console.log(values);
  };

  return (
    <AuthCardWrapper
      title="Get Started."
      description="Join ch88r and feel free chat with friends, family and mates in an end-to-end encypted environment."
      footer="If you already have an account, just login by switching to login tab."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmitHandler)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe"
                      type="text"
                      disabled={mutation.isPending}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@mail.com"
                      type="email"
                      disabled={mutation.isPending}
                    />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-4 w-full">Register</Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
