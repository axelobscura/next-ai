import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/api/auth/login">LOGIN</Link>
      </div>
    </div>
  );
}
