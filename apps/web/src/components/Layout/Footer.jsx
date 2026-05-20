"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlinkingDot, LiveUsers } from "../Common";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

/* ---------------- Data ---------------- */

const footerData = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
  ],
  solutions: [
    { name: "Use Cases", href: "/use-cases" },
    { name: "Automation", href: "/automation" },
    { name: "Workflows", href: "/workflows" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

/* ---------------- Footer ---------------- */

export default function Footer() {
  const pathname = usePathname();

  const renderLinks = (links) =>
    links.map((link, i) => {
      const isActive = pathname.startsWith(link.href);

      return (
        <li key={i}>
          <Link
            href={link.href}
            className={`transition-colors ${
              isActive ? "text-white font-semibold" : "hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Future<span className="text-indigo-500">App</span>
            </h2>

            <p className="text-sm leading-relaxed">
              A modern platform to automate workflows, build faster, and scale
              your business without complexity.
            </p>

            {/* Live Activity */}
            <div className="flex items-center gap-3 mt-4 text-xs text-gray-500">
              <div className="flex gap-1">
                <BlinkingDot delay="0s" />
                <BlinkingDot delay="0.3s" />
                <BlinkingDot delay="0.6s" />
              </div>
              <LiveUsers />
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <Link
                  key={i}
                  href={href}
                  aria-label={label}
                  className="hover:text-white transition transform hover:scale-110"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              {renderLinks(footerData.product)}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              {renderLinks(footerData.solutions)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              {renderLinks(footerData.resources)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {renderLinks(footerData.company)}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} FutureApp. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {footerData.legal.map((link, i) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`transition-colors ${
                    isActive ? "text-white font-semibold" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}