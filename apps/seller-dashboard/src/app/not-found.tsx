"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000); // 1.5 sec delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to dashboard...</p>

      <button
        onClick={() => router.push("/dashboard")}
        style={{
          marginTop: "16px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </button>
    </main>
  );
}