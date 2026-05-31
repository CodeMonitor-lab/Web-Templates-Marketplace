"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const { register, isRegistering } = useAuth();

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.name.trim()) {
      return setError("Name is required");
    }

    if (!form.email.trim()) {
      return setError("Email is required");
    }

    if (form.password.length < 6) {
      return setError(
        "Password must be at least 6 characters"
      );
    }

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">
          Create Account
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Register to access your seller dashboard.
        </p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            disabled={isRegistering}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            disabled={isRegistering}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            disabled={isRegistering}
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            disabled={isRegistering}
            className="w-full rounded-lg bg-black p-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isRegistering
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}