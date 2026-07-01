"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    title: "Templates",
    href: "/templates",
    icon: "📄",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: "🛒",
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: "📊",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "⚙️",
  },
];

export default function Sidebar({
  open,
  onClose,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 bg-white shadow-xl transition-transform duration-300",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <h2 className="text-xl font-bold">
            LaunchKits
          </h2>

          <button
            className="text-xl lg:hidden"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="mt-4 space-y-2 px-3">
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-all",
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              )}
            >
              <span>{item.icon}</span>

              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}