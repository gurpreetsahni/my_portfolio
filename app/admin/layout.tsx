import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";
import SessionProvider from "@/components/admin/SessionProvider";

export const metadata = {
  title: "Admin Portal - Portfolio",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider>
      <div className="fixed inset-0 min-h-screen bg-[#07070a] text-white overflow-y-auto z-[9999]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {session ? (
          <div className="flex min-h-screen">
            <AdminNav />
            <main className="flex-1 p-6 md:p-10 ml-0 md:ml-64">
              <div className="pt-12 md:pt-0">
                {children}
              </div>
            </main>
          </div>
        ) : (
          children
        )}
      </div>
    </SessionProvider>
  );
}
