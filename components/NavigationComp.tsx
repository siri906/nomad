"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationComp() {
  const path = usePathname();
  console.log(path, " test");
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
