"use client";

import { Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";
import { useState } from "react";

export default function SecurityPage() {
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Password updated (mock)");
    }, 1000);
  };

  const handleTwoFA = () => {
    alert("2FA toggled (mock)");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Security</h2>
        <p className="text-sm text-gray-500">
          Manage your password and account security
        </p>
      </div>

      {/* Change Password */}
      <Card className="p-5 space-y-4">
        <h3 className="font-medium">Change Password</h3>

        <div className="grid gap-4">
          <div>
            <label className="text-sm text-gray-600">Current Password</label>
            <Input type="password" placeholder="Enter current password" />
          </div>

          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <Input type="password" placeholder="Enter new password" />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Confirm New Password
            </label>
            <Input type="password" placeholder="Confirm new password" />
          </div>

          <Button onClick={handlePasswordChange} disabled={loading}>
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </div>
      </Card>

      {/* Two Factor Authentication */}
      <Card className="p-5 space-y-3">
        <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
        <p className="text-sm text-gray-500">
          Add an extra layer of security to your account
        </p>

        <Button onClick={handleTwoFA}>Enable / Disable 2FA</Button>
      </Card>

      {/* Active Sessions */}
      <Card className="p-5 space-y-3">
        <h3 className="font-medium">Active Sessions</h3>
        <p className="text-sm text-gray-500">
          Manage devices where you're logged in
        </p>

        <div className="text-sm border p-3 rounded">
          <p>Chrome - Windows (Current Device)</p>
        </div>

        <Button variant="destructive">Logout from all devices</Button>
      </Card>
    </div>
  );
}