import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label htmlFor={props.id}>{label}</Label>

        <Input
          ref={ref}
          {...props}
          className={`h-12 rounded-xl ${
            error ? "border-red-500" : ""
          }`}
        />

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";