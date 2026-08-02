import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { readDb } from "@/lib/db";
import ProjectsForm from "@/components/admin/ProjectsForm";

export const dynamic = "force-dynamic";

export default async function AdminProjects() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <ProjectsForm initialData={data.projects} />;
}
