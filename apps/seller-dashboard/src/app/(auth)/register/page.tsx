"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const { register, isRegistering } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    register({
      name: form.name,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />

          <button
            disabled={isRegistering}
            className="w-full rounded-lg bg-black p-3 text-white disabled:opacity-50"
          >
            {isRegistering ? "Creating..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}