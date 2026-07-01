import type { ReactNode } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface TemplatesLayoutProps {
  children: ReactNode;
}

export default function TemplatesLayout({
  children,
}: TemplatesLayoutProps) {
  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/templates">
              <Button variant="outline">
                All Templates
              </Button>
            </Link>

            <Link href="/templates/create">
              <Button>
                + Create Template
              </Button>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[450px]">
            <Input
              placeholder="Search templates..."
              className="flex-1"
            />

            <Button variant="outline">
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="min-h-[70vh]">
        {children}
      </main>
    </div>
  );
}