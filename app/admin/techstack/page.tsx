import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { readDb } from "@/lib/db";
import TechStackForm from "@/components/admin/TechStackForm";

export const dynamic = "force-dynamic";

export default async function AdminTechStack() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <TechStackForm initialData={data.techStack} />;
}
