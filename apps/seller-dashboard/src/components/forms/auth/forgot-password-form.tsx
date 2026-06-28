"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import authService from "@/services/auth.service";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      await authService.forgotPassword({
        email,
      });

      toast.success(
        "Password reset link sent to your email"
      );

      setEmail("");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to send reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-4"
    >
      <Input
        type="email"
        placeholder="Email Address"
        value={email}
        disabled={loading}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading
          ? "Sending..."
          : "Send Reset Link"}
      </Button>

      <div className="text-center">
        <Link
          href="/login"
          className="text-sm hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
}