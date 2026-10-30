import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1>Supabase Auth in Next.js</h1>
        <p>Create an account, log in and see your profile. Only the profile page requires login.</p>
      </section>

      <h2 className={styles.heading}>Routes</h2>
      <ul className={styles.routes}>
        <li>
          <Link href="/">/</Link>
          <span>This page</span>
          <em>Public</em>
        </li>
        <li>
          <Link href="/signup">/signup</Link>
          <span>Create an account</span>
          <em>Public</em>
        </li>
        <li>
          <Link href="/login">/login</Link>
          <span>Log in with email and password</span>
          <em>Public</em>
        </li>
        <li>
          <Link href="/profile">/profile</Link>
          <span>Your email, your user id and log out</span>
          <em className={styles.protected}>Logged in</em>
        </li>
      </ul>
    </main>
  );
}
