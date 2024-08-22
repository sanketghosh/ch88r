import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UpdateBioSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function UpdateBio() {
  const form = useForm<z.infer<typeof UpdateBioSchema>>({
    resolver: zodResolver(UpdateBioSchema),
    defaultValues: {
      userBio: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof UpdateBioSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="userBio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Bio</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Write a short bio here..."
                  disabled={false}
                  rows={5}
                  maxLength={150}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Update Bio</Button>
      </form>
    </Form>
  );
}
