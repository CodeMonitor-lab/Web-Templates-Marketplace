"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { forgotPasswordThunk } from "../store";
import { AppDispatch } from "@/store";

interface ForgotPasswordValues {
  email: string;
}

export default function ForgotPasswordForm() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordValues>();

  const onSubmit = async (data: ForgotPasswordValues) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const resultAction = await dispatch(forgotPasswordThunk(data));

    if (forgotPasswordThunk.fulfilled.match(resultAction)) {
      setSuccessMessage(resultAction.payload.message || "Reset link sent to your email!");
    } else {
      setError(resultAction.payload as string);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Forgot Password</h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      {error && <ErrorMessage message={error} />}
      {successMessage && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-700 border border-green-200">
          {successMessage}
        </div>
      )}

      {!successMessage && (
        <>
          <Input
            label="Email Address"
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

          <Button type="submit" loading={loading} className="w-full">
            Send Reset Link
          </Button>
        </>
      )}

      <p className="text-center text-sm">
        Back to{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}