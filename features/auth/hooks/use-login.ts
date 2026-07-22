import { login } from "../services/auth.services";

export function useLogin() {
  async function handleLogin(email: string, password: string) {
    await login({ email, password });
  }

  return {
    handleLogin,
  };
}