'use client';

import { ReactNode, useState } from 'react';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden">
      
      {/* Desktop Sidebar (sticky) */}
      <div className="hidden md:block h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed z-50 md:hidden h-full">
            <Sidebar />
          </div>
        </>
      )}

      {/* Main Area */}
      <div className="flex flex-1 flex-col h-screen overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center gap-3 bg-white px-4 h-16 sticky top-0 z-30 border-b">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex-1">
            <Header />
          </div>
        </div>

        {/* Scrollable Content ONLY */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}