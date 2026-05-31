// src/app/layout.tsx

import "./globals.css";

import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <AuthProvider>
            {children}

            <Toaster
              richColors
              position="top-right"
              closeButton
              expand={true}
              duration={3000}
            />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
