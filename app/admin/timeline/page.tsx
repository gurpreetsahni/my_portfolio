import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { readDb } from "@/lib/db";
import TimelineForm from "@/components/admin/TimelineForm";

export const dynamic = "force-dynamic";

export default async function AdminTimeline() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const data = await readDb();

  return <TimelineForm initialData={data.timeline} />;
}
