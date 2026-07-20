import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required"),

  lastName: z
    .string()
    .min(2, "Last name is required"),

  email: z
    .email("Enter a valid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  role: z
    .string()
    .min(1, "Please select a role"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;