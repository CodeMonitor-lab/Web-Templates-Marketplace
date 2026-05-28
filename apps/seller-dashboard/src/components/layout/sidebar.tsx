import Link from 'next/link';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Analytics',
    href: '/analytics',
  },
  {
    name: 'Templates',
    href: '/templates',
  },
  {
    name: 'Orders',
    href: '/orders',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6">
      <div className="mb-8 text-2xl font-bold">BrandBuilder</div>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl px-4 py-3 hover:bg-muted"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}