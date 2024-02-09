import { cn } from "@/lib/utils";
import FormInput from "./form-input";

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps) {
  const LOGIN_INPUT_FIELDS = [
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
  ];

  return (
    <form className={cn(className)}>
      {LOGIN_INPUT_FIELDS.map((inp) => {
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
