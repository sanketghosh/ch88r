// PACKAGES
import * as loginUser from "@/actions/auth-actions/login-user";
import { useAuthContext } from "@/providers/auth-context-provider";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

// COMPONENTS
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

export default function LoginForm() {
  const navigate = useNavigate();
  const { updateUser } = useAuthContext();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: loginUser.loginUser,
    onSuccess: async (data) => {
      toast.success(data.message);
      updateUser(data);
      navigate("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const formSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
    mutation.mutate(values);
    // console.log(values);
  };

  return (
    <AuthCardWrapper
      title="Welcome Back!"
      description="Continue from where you left last time, your personal data is safe and secure with us."
      footer="If you don't have an account just create one by switching to register tab."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(formSubmitHandler)}>
          <div className="space-y-4">
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
                      placeholder="nD9I1xTod6mN31"
                      type="password"
                      disabled={mutation.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-4 w-full">Login</Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
