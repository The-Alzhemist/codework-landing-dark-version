"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  if (pathname === "/contact-us") {
    redirect("/en/contact-us");
  } else if (pathname === "/team") {
    redirect("/en/team");
  } else if (pathname === "/projects") {
    redirect("/en/projects");
  } else if (pathname === "/services") {
    redirect("/en/services");
  } else if (pathname === "/blog") {
    redirect("/en/blog");
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
