import { cn } from "@/lib/utils";
import FormInput from "./form-input";

interface RegisterFormProps {
  className?: string;
}

export default function RegisterForm({ className }: RegisterFormProps) {
  const REGISTER_INPUT_FIELDS = [
    {
      htmlAttr: "username",
      defaultValue: "@johndoe",
      label: "Username",
    },
    {
      htmlAttr: "password",
      defaultValue: "goodpassowrd123456",
      label: "Password",
    },
    {
      htmlAttr: "confirm-password",
      defaultValue: "goodpassowrd123456",
      label: "Confirm Password",
    },
  ];

  return (
    <form className={cn(className)}>
      {REGISTER_INPUT_FIELDS.map((inp) => {
        return (
          <FormInput
            key={inp.htmlAttr}
            htmlAttr={inp.htmlAttr}
            label={inp.label}
            defaultValue={inp.defaultValue}
          />
        );
      })}
    </form>
  );
}
