import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export function TextInput({
  label,
  placeholder,
  type = "text",
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-xl"
      />
    </div>
  );
}