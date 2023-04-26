import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const {user} = useUser();

  console.log('USER: ', user);

  return (
    <div>
      <div>
        {!!user ? (
          <>
            <div>
              <Image src={user.picture} alt={user.name} width={50} height={50} />
            </div>
            <Link href="/api/auth/logout">LOGOUT</Link>
          </>
        ) : (
          <Link href="/api/auth/login">LOGIN</Link>
        )}
        
      </div>
    </div>
  );
}
