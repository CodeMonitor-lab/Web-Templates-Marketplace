import type { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}
        <section className="hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
          <div className="max-w-md text-center text-white">
            <h1 className="mb-6 text-5xl font-bold">
              LaunchPadKits
            </h1>

            <p className="text-lg text-blue-100">
              Manage templates, orders, analytics and your
              marketplace business from one dashboard.
            </p>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-8 text-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600"
              >
                LaunchPadKits
              </Link>
            </div>

            {children}
          </div>
        </section>
      </div>
    </main>
  );
}