'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Siswa', href: '/dashboard/student', icon: Users },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden px-4 py-2 border-b flex justify-between items-center bg-white shadow-sm">
        <h1 className="font-bold text-blue-600 text-lg">MyDashboard</h1>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-white shadow-md border-r z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-600">MyDashboard</h2>
        </div>
        <nav className="flex flex-col px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-100 ${
                  isActive
                    ? 'bg-blue-100 font-semibold text-blue-700'
                    : 'text-gray-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
          <Button
            variant="ghost"
            className="flex items-center gap-3 text-red-600 justify-start mt-4"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </nav>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-30 md:hidden z-30"
        />
      )}
    </>
  );
}
