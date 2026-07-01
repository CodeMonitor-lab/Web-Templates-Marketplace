// src/features/auth/components/LoginForm.tsx
"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { useLogin } from "../hooks";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { login, loading, error, resetFormState } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

  useEffect(() => {
    return () => { resetFormState(); };
  }, [resetFormState]);

  const onSubmit = async (data: LoginFormValues) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to your seller account.</p>
      </div>

      {error && <ErrorMessage message={error} />}

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
        {...register("password", { required: "Password is required" })}
      />

      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      <Button type="submit" loading={loading} className="w-full">
        Login
      </Button>

      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="font-medium text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}