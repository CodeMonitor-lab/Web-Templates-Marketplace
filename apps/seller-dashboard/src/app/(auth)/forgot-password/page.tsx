import ForgotPasswordForm from "@/components/forms/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold">
          Forgot Password
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Enter your email to receive a password reset link.
        </p>

        <ForgotPasswordForm />
      </div>
    </div>
  );
}