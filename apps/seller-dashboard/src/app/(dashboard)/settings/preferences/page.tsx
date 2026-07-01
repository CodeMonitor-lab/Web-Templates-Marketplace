"use client";

import { Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";

export default function PreferencesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-lg font-semibold">Preferences</h2>
        <p className="text-sm text-gray-500">
          Customize your app experience and defaults
        </p>
      </div>

      {/* Language & Region */}
      <Card className="p-5 space-y-4">
        <h3 className="font-medium">Language & Region</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-gray-600">Language</label>
            <select className="w-full border rounded-md p-2 mt-1">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Timezone</label>
            <select className="w-full border rounded-md p-2 mt-1">
              <option>IST (India Standard Time)</option>
              <option>UTC</option>
              <option>PST</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Notifications Preferences */}
      <Card className="p-5 space-y-4">
        <h3 className="font-medium">Notification Preferences</h3>

        <div className="flex items-center justify-between">
          <span className="text-sm">Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">SMS Notifications</span>
          <input type="checkbox" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Marketing Emails</span>
          <input type="checkbox" />
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
}