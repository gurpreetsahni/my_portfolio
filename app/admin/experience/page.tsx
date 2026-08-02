import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { readDb } from "@/lib/db";
import ExperienceForm from "@/components/admin/ExperienceForm";

export const dynamic = "force-dynamic";

export default async function AdminExperience() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <ExperienceForm initialData={data.experience} />;
}
