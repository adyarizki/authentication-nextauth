import NavbarDashboard from "@/components/NavbarDashboard";
import Sidebar from "@/components/SidebarDashboard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <NavbarDashboard />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
