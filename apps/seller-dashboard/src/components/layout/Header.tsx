"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/ui/Button";
import { logoutThunk } from "@/features/auth/store";
import { RootState, AppDispatch } from "@/store";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  // 1. Grab user metadata dynamically from Redux
  const { user, loading } = useSelector((state: RootState) => state.auth);

  // 2. Compute user initials fallback dynamically
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "A";

  const handleLogout = async () => {
    // 3. Dispatch the logout thunk which clears server-sessions, state, and localStorage tokens
    await dispatch(logoutThunk());
    
    // 4. Cleanly reset route timeline back onto login screen
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm lg:px-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          ☰
        </Button>

        <h1 className="text-xl font-semibold">
          Seller Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="relative text-xl transition hover:scale-110"
          aria-label="Notifications"
        >
          🔔
        </button>

        {/* Dynamic User Profile Initial */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white uppercase">
          {userInitial}
        </div>

        <Button
          variant="destructive"
          onClick={handleLogout}
          loading={loading} // Visual feedback during network execution
        >
          Logout
        </Button>
      </div>
    </header>
  );
}