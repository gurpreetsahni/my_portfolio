import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UploadsForm from "@/components/admin/UploadsForm";

export default async function AdminUploads() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  return <UploadsForm />;
}
