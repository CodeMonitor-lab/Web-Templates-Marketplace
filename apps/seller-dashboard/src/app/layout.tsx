import "./globals.css";

import { Toaster } from "sonner";
import ReduxProvider from "@/providers/redux-provider";
import AuthProvider from "@/providers/auth-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AuthProvider>
            {children}

            <Toaster
              richColors
              position="top-right"
              closeButton
              expand
              duration={3000}
            />
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}