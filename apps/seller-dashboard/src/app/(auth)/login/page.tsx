import LoginForm from '@/components/forms/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>

        <LoginForm />
      </div>
    </div>
  );
}