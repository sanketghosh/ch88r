import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
  htmlAttr: string;
  label: string;
  defaultValue?: string;
  errorExists?: FieldError;
  errorMessage?: string;
  func: UseFormRegisterReturn | any;
}

export default function FormInput({
  htmlAttr,
  label,
  defaultValue,
  errorExists,
  errorMessage,
  func,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={htmlAttr}>{label}</Label>
      <Input id={htmlAttr} {...func} />
      {errorExists && <p>{errorMessage}</p>}
    </div>
  );
}
