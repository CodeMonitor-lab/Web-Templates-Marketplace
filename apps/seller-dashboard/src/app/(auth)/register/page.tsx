"use client";

import { useState } from "react";
import Link from "next/link";

import { toast } from "sonner";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import { useAuth } from "@/hooks/useAuth";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const { register, isRegistering } =
    useAuth();

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const updateField = (
    field: keyof RegisterForm,
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

    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error(
        "Please enter a valid email address"
      );
      return;
    }

    if (form.password.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      toast.success(
        "Account created successfully"
      );
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Register to access your seller dashboard.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <Input
            placeholder="Full Name"
            value={form.name}
            disabled={isRegistering}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
          />

          <Input
            type="email"
            placeholder="Email Address"
            value={form.email}
            disabled={isRegistering}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            disabled={isRegistering}
            onChange={(e) =>
              updateField(
                "password",
                e.target.value
              )
            }
          />

          <Button
            type="submit"
            className="w-full py-3"
            disabled={isRegistering}
          >
            {isRegistering
              ? "Creating Account..."
              : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}