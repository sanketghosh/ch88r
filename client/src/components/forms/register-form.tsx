import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as registerUser from "@/actions/register-user";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// components
import FormInput from "@/components/forms/form-input";
import { Button } from "@/components/ui/button";

interface RegisterFormProps {
  className?: string;
}

export type RegisterFormDataType = {
  username: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm({ className }: RegisterFormProps) {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<RegisterFormDataType>();

  const REGISTER_INPUT_FIELDS = [
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
    {
      htmlAttr: "confirm-password",
      type: "password",
      defaultValue: "goodpassowrd123456",
      label: "Confirm Password",
      func: register("confirmPassword", {
        validate: (val) => {
          if (!val) {
            return "This field is required";
          } else if (watch("password") !== val) {
            return "Not matched with the password you entered";
          }
        },
      }),
      errorExists: errors.confirmPassword,
      errorMessage: errors.confirmPassword?.message,
    },
  ];

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: registerUser.registerUser,
    onSuccess: async () => {
      toast.success("Registered successfully");
      await queryClient.invalidateQueries({ queryKey: ["validate_token"] });
      navigate("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleFormSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className={cn(className)} onSubmit={handleFormSubmit}>
      <div className="space-y-3">
        {REGISTER_INPUT_FIELDS.map((inp) => {
          return (
            <FormInput
              key={inp.htmlAttr}
              htmlAttr={inp.htmlAttr}
              label={inp.label}
              defaultValue={inp.defaultValue}
              func={inp.func}
              errorExists={inp.errorExists}
              errorMessage={inp.errorMessage}
              type={inp.type}
            />
          );
        })}
      </div>
      <Button className="mt-3">Register</Button>
    </form>
  );
}
