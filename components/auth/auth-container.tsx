import { ReactNode } from "react";

type AuthContainerProps = {
  children: ReactNode;
};

export function AuthContainer({ children }: AuthContainerProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-sm">
        {children}
      </div>
    </main>
  );
}