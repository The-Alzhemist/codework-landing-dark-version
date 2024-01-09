

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export default function NotFound() {
 

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
