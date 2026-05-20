"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Docs/Sidebar";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import sectionsData from "./sections.json";

const navItems = sectionsData.map((s) => ({
  id: s.id,
  label: s.title,
}));

export default function DocsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const activeFromPath = pathname?.split("/").pop();

  const [active, setActive] = useState("getting-started");
  const [open, setOpen] = useState(false);
  const effectiveActive = activeFromPath || active;

  // ✅ Scroll spy (optimized)
  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Navigation handler
  const navigate = (id) => {
    router.push(`/docs/${id}`);
    setActive(id);
    setOpen(false);

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* ✅ Sidebar */}
      <div className="hidden md:block">
        <Sidebar onNavigate={navigate} activeId={effectiveActive} />
      </div>

      {/* ✅ Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button onClick={() => setOpen(!open)}>Menu</Button>
      </div>

      {/* ✅ Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-64 bg-background h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onNavigate={navigate} activeId={effectiveActive} />
          </div>
        </div>
      )}

      {/* ✅ Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold mb-2">Your SaaS Docs</h1>
          <p className="text-muted-foreground mb-8">
            Everything you need to get started and master the platform.
          </p>
        </motion.div>

        <div className="space-y-10 max-w-3xl">
          {sectionsData.map((section, i) => (
            <motion.div
              id={section.id}
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {section.description}
                  </p>

                  {section.items && (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Button className="rounded-2xl px-6 py-2 text-base">
            Go to Dashboard
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
