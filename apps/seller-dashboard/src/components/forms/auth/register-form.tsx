"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  // ✅ FIX: map isLoading -> isRegistering
  const { register, isLoading: isRegistering } = useAuth();

  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });

  const updateField = (
    field: keyof RegisterFormData,
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

    // basic validation
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

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
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });

      toast.success("Account created successfully");

      // optional reset
      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">Create Account</h1>

      <p className="mt-2 text-sm text-gray-500">
        Register to access your seller dashboard.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
            updateField("password", e.target.value)
          }
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isRegistering}
        >
          {isRegistering
            ? "Creating Account..."
            : "Create Account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}