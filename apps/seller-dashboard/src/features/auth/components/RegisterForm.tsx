// src/features/auth/components/RegisterForm.tsx
"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useRegister } from "../hooks";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const { register: registerUser, loading, error, resetFormState } = useRegister();
  const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>();
  const password = watch("password");

  useEffect(() => {
    return () => { resetFormState(); };
  }, [resetFormState]);

  const onSubmit = async (data: RegisterFormValues) => {
    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="mt-2 text-sm text-gray-500">Register to start selling templates.</p>
      </div>

      {error && <ErrorMessage message={error} />}

      <Input
        label="Full Name"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register("name", { required: "Full name is required" })}
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <Input
        label="Password"
        type="password"
        placeholder="********"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
        })}
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="********"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Confirm your password",
          validate: (value) => value === password || "Passwords do not match",
        })}
      />

      <Button type="submit" loading={loading} className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}