import Sidebar from '@/components/dashboard/Sidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <DashboardNavbar />
      <main className="ml-64 pt-20 p-6">
        {children}
      </main>
    </div>
  );
}