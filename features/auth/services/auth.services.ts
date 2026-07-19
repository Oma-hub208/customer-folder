import { LoginRequest } from "../types";

export async function login(data: LoginRequest) {
  console.log("Login payload:", data);

  // TODO: Replace with actual API call
  return Promise.resolve({
    accessToken: "",
    refreshToken: "",
  });
}