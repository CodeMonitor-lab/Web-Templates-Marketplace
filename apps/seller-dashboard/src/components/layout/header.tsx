'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser as logoutAction } from '@/store/slices/authSlice';
import { UserCircle, Settings, LogOut } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logout = () => {
    dispatch(logoutAction());
    router.replace('/login');
  };

  return (
    <header className="flex h-16 items-center justify-end px-6 bg-white">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 transition"
        >
          <UserCircle className="h-6 w-6 text-gray-700" />

          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm font-medium">
              {mounted ? user?.name || "User" : "User"}
            </span>

            <span className="text-xs text-gray-500">
              {mounted ? user?.email || "user@example.com" : "user@example.com"}
            </span>
          </div>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-lg overflow-hidden">
            <button
              onClick={() => {
                setOpen(false);
                router.push("/settings");
              }}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <Settings className="h-4 w-4" />
              Settings
            </button>

            <button
              onClick={logout}
              className="flex items-center gap-2 w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}