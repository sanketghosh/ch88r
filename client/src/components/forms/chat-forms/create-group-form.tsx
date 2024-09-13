// PACKAGES
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// LOCAL MODULES
import { CreateGroupSchema } from "@/schemas";
import { UserType } from "@/types";
import * as createNewGroup from "@/actions/chat-actions/group-actions/create-new-group";

// COMPONENTS
import MultipleUsersSelect from "@/components/selects/multiple-users-select";
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
import { Textarea } from "@/components/ui/textarea";

export default function CreateGroupForm() {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof CreateGroupSchema>>({
    resolver: zodResolver(CreateGroupSchema),
    defaultValues: {
      groupName: "",
      groupDescription: "",
      groupParticipantsIds: [],
    },
  });

  const [selectedUsers, setSelectedUsers] = useState<UserType[]>([]);

  const groupParticipantsIds = selectedUsers.map((u) => u.id);

  const mutation = useMutation({
    mutationKey: ["create-group-mutation"],
    mutationFn: createNewGroup.createNewGroup,
    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({
        queryKey: ["fetch-conversations"],
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const formSubmitHandler = (values: z.infer<typeof CreateGroupSchema>) => {
    // console.log({ ...values, groupParticipantsIds });
    mutation.mutate({
      ...values,
      groupParticipantsIds,
    });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formSubmitHandler)}
          className="space-y-4"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="groupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="We are friends"
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
              name="groupDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Group Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Just a group for friends to connect and chat with each other."
                      disabled={mutation.isPending}
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <MultipleUsersSelect setSelectedUsers={setSelectedUsers} />
          </div>
          <Button className="w-full" disabled={mutation.isPending}>
            Create Group
          </Button>
        </form>
      </Form>
    </div>
  );
}
