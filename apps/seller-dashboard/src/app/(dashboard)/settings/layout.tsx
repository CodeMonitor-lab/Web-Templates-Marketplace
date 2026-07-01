import Link from "next/link";

const settingsMenu = [
  { name: "Profile", href: "/dashboard/settings/profile" },
  { name: "Security", href: "/dashboard/settings/security" },
  { name: "Preferences", href: "/dashboard/settings/preferences" },
  { name: "Appearance", href: "/dashboard/settings/appearance" },
  { name: "Danger Zone", href: "/dashboard/settings/danger-zone" },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>

        <nav className="space-y-2">
          {settingsMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded text-sm hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="border-b bg-white px-6 py-4">
          <h1 className="text-xl font-semibold">Account Settings</h1>
          <p className="text-sm text-gray-500">
            Manage your profile, security and preferences
          </p>
        </div>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}