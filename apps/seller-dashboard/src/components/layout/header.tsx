// header.tsx

'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('isLoggedIn');

    router.push('/login');
  };

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-xl font-bold">
        Seller Dashboard
      </h1>

      <button
        onClick={logout}
        className="rounded-lg border px-4 py-2"
      >
        Logout
      </button>
    </header>
  );
}