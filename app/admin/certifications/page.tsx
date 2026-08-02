import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { readDb } from "@/lib/db";
import CertificationsForm from "@/components/admin/CertificationsForm";

export const dynamic = "force-dynamic";

export default async function AdminCertifications() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <CertificationsForm initialData={data.certifications} />;
}
