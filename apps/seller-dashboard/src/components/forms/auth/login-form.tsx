"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import { useAuth } from "@/hooks/useAuth";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  // ✅ FIX: map isLoading -> isLoggingIn
  const { login, isLoading: isLoggingIn } = useAuth();

  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const updateField = (
    field: keyof LoginFormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!form.password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      await login({
        email: form.email.trim(),
        password: form.password,
      });

      toast.success("Login successful");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">Welcome Back</h1>

      <p className="mt-2 text-sm text-gray-500">
        Sign in to access your seller dashboard.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          type="email"
          placeholder="Email Address"
          value={form.email}
          disabled={isLoggingIn}
          onChange={(e) =>
            updateField("email", e.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          disabled={isLoggingIn}
          onChange={(e) =>
            updateField("password", e.target.value)
          }
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-4 text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-gray-500 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-black hover:underline"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}