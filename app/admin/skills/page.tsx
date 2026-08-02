import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { readDb } from "@/lib/db";
import SkillsForm from "@/components/admin/SkillsForm";

export const dynamic = "force-dynamic";

export default async function AdminSkills() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <SkillsForm initialData={data.skillCategories} />;
}
