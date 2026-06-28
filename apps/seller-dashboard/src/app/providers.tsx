"use client";

import { ReactNode } from "react";

import ReduxProvider from "@/providers/redux-provider";
import AuthProvider from "@/providers/auth-provider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ReduxProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ReduxProvider>
  );
}