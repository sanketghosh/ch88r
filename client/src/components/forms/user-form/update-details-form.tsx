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
import { useAuthContext } from "@/providers/auth-context-provider";
import { UpdateUserDetailsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function UpdateDetailsForm() {
  const { user } = useAuthContext();

  const form = useForm<z.infer<typeof UpdateUserDetailsSchema>>({
    resolver: zodResolver(UpdateUserDetailsSchema),
    defaultValues: {
      username: user?.userUsername,
      email: user?.userEmail,
    },
  });

  const handleFormSubmit = (
    values: z.infer<typeof UpdateUserDetailsSchema>,
  ) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-4"
      >
        <div className="space-y-3">
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
                    disabled={false}
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
                    disabled={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button>Update Details</Button>
      </form>
    </Form>
  );
}
