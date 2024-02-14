import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
  htmlAttr: string;
  label: string;
  defaultValue?: string;
  errorExists?: FieldError;
  errorMessage?: string;
  func: UseFormRegisterReturn;
  type: string;
}

export default function FormInput({
  htmlAttr,
  label,
  defaultValue,
  errorExists,
  errorMessage,
  func,
  type,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={htmlAttr}>{label}</Label>
      <Input id={htmlAttr} type={type} {...func} />
      {errorExists && (
        <p className="mt-1 text-[13px] font-medium text-red-500">
          *{errorMessage}
        </p>
      )}
    </div>
  );
}
