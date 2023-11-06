import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
function Navbar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 text-zinc-500">
        {links?.map((link, i) => {
          return (
            <li key="i" className="hover:text-zinc-900">
              <Link href={link?.href}>{link?.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
