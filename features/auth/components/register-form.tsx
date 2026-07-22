"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  RegisterFormValues,
} from "../schemas/register.schema";

import { TextInput } from "@/components/forms/text-input";
import { RoleSelector } from "@/components/forms/role-selector";
import { AppButton } from "@/components/common/app-button";

const roles = [
  {
    value: "trader",
    label: "Trader",
  },
  {
    value: "collector",
    label: "Collector",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "financier",
    label: "Financier",
  },
];

export function RegisterForm() {
  const [selectedRole, setSelectedRole] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormValues) {
    console.log(data);
  }

  function handleRoleChange(role: string) {
    setSelectedRole(role);
    setValue("role", role);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="First Name"
          placeholder="First Name"
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <TextInput
          label="Last Name"
          placeholder="Last Name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
      </div>

      <TextInput
        label="Email Address"
        placeholder="Email Address"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextInput
        label="Create Password"
        placeholder="********"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="space-y-2">
        <p className="text-sm font-medium">
          Choose Role
        </p>

        <RoleSelector
          roles={roles}
          value={selectedRole}
          onChange={handleRoleChange}
        />

        {errors.role && (
          <p className="text-sm text-red-500">
            {errors.role.message}
          </p>
        )}
      </div>

      <AppButton
        loading={isSubmitting}
        type="submit"
      >
        Continue
      </AppButton>
    </form>
  );
}