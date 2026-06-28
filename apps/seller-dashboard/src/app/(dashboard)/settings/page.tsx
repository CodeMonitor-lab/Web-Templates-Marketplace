"use client";

import { User, Lock, Trash2, Mail } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

export default function SettingsPage() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-gray-500">
          Manage your profile and account settings.
        </p>
      </div>

      {/* Profile Card */}
      <div className="flex items-center gap-5 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-xl font-bold">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {user?.name || "User Name"}
          </h2>

          <p className="flex items-center gap-2 text-sm text-gray-500">
            <Mail size={16} />
            {user?.email || "user@example.com"}
          </p>

          <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize">
            {user?.role || "Seller"}
          </span>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <User size={20} />
          <h2 className="text-lg font-semibold">Profile Settings</h2>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            defaultValue={user?.name}
            placeholder="Full Name"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <input
            type="email"
            defaultValue={user?.email}
            placeholder="Email Address"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <button className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-900">
            Save Changes
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-2">
          <Lock size={20} />
          <h2 className="text-lg font-semibold">Security</h2>
        </div>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <button className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-900">
            Change Password
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <div className="mb-3 flex items-center gap-2 text-red-600">
          <Trash2 size={20} />
          <h2 className="text-lg font-semibold">Danger Zone</h2>
        </div>

        <p className="mb-4 text-sm text-red-500">
          Deleting your account is permanent and cannot be undone.
        </p>

        <button className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}