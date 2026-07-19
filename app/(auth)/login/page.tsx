import { AuthHeader } from "@/components/auth/auth-header";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8">
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to AWÍN"
        />

        <LoginForm />
      </div>
    </main>
  );
}