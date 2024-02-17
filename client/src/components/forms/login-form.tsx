import { cn } from "@/lib/utils";
import FormInput from "./form-input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as loginUser from "@/actions/login-user";
import { toast } from "sonner";

interface LoginFormProps {
  className?: string;
}

export type LoginFormDataTypes = {
  username: string;
  password: string;
};

export default function LoginForm({ className }: LoginFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormDataTypes>();

  const LOGIN_INPUT_FIELDS = [
    {
      htmlAttr: "username",
      type: "text",
      defaultValue: "@johndoe",
      label: "Username",
      func: register("username", {
        required: "This field is required",
        minLength: {
          value: 5,
          message: "Username must be of atleast 5 characters",
        },
        maxLength: {
          value: 15,
          message: "Username must not exceed 15 characters",
        },
      }),
      errorExists: errors.username,
      errorMessage: errors.username?.message,
    },
    {
      htmlAttr: "password",
      type: "password",
      defaultValue: "goodpassowrd123456",
      label: "Password",
      func: register("password", {
        required: "This field is required",
        minLength: {
          value: 6,
          message: "Password must be of atleast 6 characters",
        },
      }),
      errorExists: errors.password,
      errorMessage: errors.password?.message,
    },
  ];

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: loginUser.loginUser,
    onSuccess: async (data) => {
      const { username } = data;
      localStorage.setItem("USERNAME", username);
      toast.success("Logged in successfully.");
      await queryClient.invalidateQueries({ queryKey: ["validate_token"] });
      navigate("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleLoginForm = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className={cn(className)} onSubmit={handleLoginForm}>
      <div className="space-y-3">
        {LOGIN_INPUT_FIELDS.map((inp) => {
          return (
            <FormInput
              key={inp.htmlAttr}
              htmlAttr={inp.htmlAttr}
              label={inp.label}
              defaultValue={inp.defaultValue}
              type={inp.type}
              func={inp.func}
              errorExists={inp.errorExists}
              errorMessage={inp.errorMessage}
            />
          );
        })}
      </div>
      <Button className="mt-3">Continue</Button>
    </form>
  );
}
