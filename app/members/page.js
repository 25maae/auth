import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/auth";

export const metadata = {
  title: "Members",
};

export default async function MembersPage() {
  // The same check as on the profile page
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Members only</h1>
      <p>Welcome back, {user.email}. Only logged-in users can see this page.</p>
    </main>
  );
}
