"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PiBugDuotone } from "react-icons/pi";
function Navbar() {
  const currentPathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  console.log(currentPathname);
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugDuotone className="text-3xl" />
      </Link>
      <ul className="flex space-x-6 text-zinc-500 text-2xl font-semibold">
        {links?.map((link, i) => {
          return (
            <li
              key="i"
              className={classNames({
                "hover:text-zinc-500 transition-colors": true,
                "text-zinc-900": link?.href === currentPathname,
              })}
            >
              <Link href={link?.href}>{link?.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
