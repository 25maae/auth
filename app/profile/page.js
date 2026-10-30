import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Profile",
};

async function signOut() {
  "use server";

  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect("/");
}

export default async function ProfilePage() {
  // A Server Component: the check runs on the server, before any HTML is sent
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>User id: {user.sub}</p>
      <form action={signOut} className="auth-form">
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}
