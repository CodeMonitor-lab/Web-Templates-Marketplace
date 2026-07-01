import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <p className="text-gray-500">
        Choose a section to manage your account.
      </p>

      <div className="flex flex-col gap-2">
        <Link className="text-blue-600" href="/settings/profile">
          Profile
        </Link>
        <Link className="text-blue-600" href="/settings/security">
          Security
        </Link>
        <Link className="text-blue-600" href="/settings/preferences">
          Preferences
        </Link>
        <Link className="text-blue-600" href="/settings/appearance">
          Appearance
        </Link>
      </div>
    </div>
  );
}