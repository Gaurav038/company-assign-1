
import Sidebar from "@/components/Sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen h-auto w-full">
      <Sidebar />
      {children}
    </div>
  );
}
