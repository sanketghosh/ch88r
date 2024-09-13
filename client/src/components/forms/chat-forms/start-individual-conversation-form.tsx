// packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// local modules
import * as startIndividualChat from "@/actions/chat-actions/individual-actions/start-individual-chat";

// COMPONENTS
import { Button } from "@/components/ui/button";

type StartIndividualFormProps = {
  participantId: string | undefined;
};

export default function StartIndividualForm({
  participantId,
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
    if (participantId) {
      mutation.mutate(participantId);
      console.log(participantId);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Button size={"sm"}>Start Conversation</Button>
    </form>
  );
}
