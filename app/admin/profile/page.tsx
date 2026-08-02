import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { readDb } from "@/lib/db";
import ProfileForm from "@/components/admin/ProfileForm";

export const dynamic = "force-dynamic";

export default async function AdminProfile() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <ProfileForm initialData={data.profile} />;
}
