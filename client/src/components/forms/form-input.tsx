import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
  htmlAttr: string;
  label: string;
  defaultValue?: string;
}

export default function FormInput({
  htmlAttr,
  label,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={htmlAttr}>{label}</Label>
      <Input id={htmlAttr} defaultValue={defaultValue} />
    </div>
  );
}
