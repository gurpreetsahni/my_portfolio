import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import UploadsForm from "@/components/admin/UploadsForm";
import { readDb } from "@/lib/db";

export default async function AdminUploads() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();
  const uploads = data.uploads || {};

  return <UploadsForm currentPhotoUrl={uploads.photoUrl} currentResumeUrl={uploads.resumeUrl} />;
}
