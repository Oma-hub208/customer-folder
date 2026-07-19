import { AuthHeader } from "@/components/auth/auth-header";
import { AppButton } from "@/components/common/app-button";
import { TextInput } from "@/components/forms/text-input";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to AWÍN"
        />

        <div className="space-y-4">
          <TextInput
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <TextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <AppButton>
          Continue
        </AppButton>
      </div>
    </main>
  );
}