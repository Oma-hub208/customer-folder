import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export function AppButton({
  children,
  loading = false,
  className,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={cn("w-full h-12 rounded-xl", className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}