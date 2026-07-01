"use client";

import { Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { useState } from "react";

export default function DangerZonePage() {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeactivate = () => {
    // API call later
    alert("Account deactivated (mock action)");
  };

  const handleDelete = () => {
    // API call later
    alert("Account deleted (mock action)");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-red-600">
          Danger Zone
        </h2>
        <p className="text-sm text-gray-500">
          Irreversible actions for your account
        </p>
      </div>

      {/* Deactivate Account */}
      <Card className="p-5 border border-yellow-300">
        <h3 className="font-medium">Deactivate Account</h3>
        <p className="text-sm text-gray-500 mt-1">
          Temporarily disable your account. You can reactivate anytime.
        </p>

        <div className="mt-4">
          <Button
            onClick={handleDeactivate}
            className="bg-yellow-500 hover:bg-yellow-600"
          >
            Deactivate Account
          </Button>
        </div>
      </Card>

      {/* Delete Account */}
      <Card className="p-5 border border-red-300">
        <h3 className="font-medium text-red-600">Delete Account</h3>
        <p className="text-sm text-gray-500 mt-1">
          Permanently delete your account and all associated data.
        </p>

        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={confirmDelete}
              onChange={() => setConfirmDelete(!confirmDelete)}
            />
            I understand this action cannot be undone
          </label>

          <Button
            onClick={handleDelete}
            disabled={!confirmDelete}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}