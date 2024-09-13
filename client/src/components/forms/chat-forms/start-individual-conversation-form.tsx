// packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// local modules
import * as startIndividualChat from "@/actions/chat-actions/individual-actions/start-individual-chat";

// COMPONENTS
import { Button } from "@/components/ui/button";

type StartIndividualFormProps = {
  selectedUserId: string | undefined;
};

export default function StartIndividualForm({
  selectedUserId,
}: StartIndividualFormProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["start-individual-conversation"],
    mutationFn: startIndividualChat.startIndividualChat,
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

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUserId) {
      mutation.mutate(selectedUserId); // Assuming your schema requires userId
      console.log(selectedUserId);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Button size={"sm"}>Start Conversation</Button>
    </form>
  );
}
