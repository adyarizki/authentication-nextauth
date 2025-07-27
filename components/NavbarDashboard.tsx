'use client';

import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, UserCircle, UserCheck2 } from "lucide-react";

export default function NavbarDashboard() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="text-xl font-bold text-blue-600 ">Authentication</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <UserCircle className="h-6 w-6 text-gray-700" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 mt-2">
          <DropdownMenuItem disabled>
            <UserCheck2 className="w-4 h-4 mr-2" />
            <span className="text-sm">{session?.user?.email}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="text-red-600 cursor-pointer"
          >
            <LogOutIcon className="w-4 h-4 mr-2" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
