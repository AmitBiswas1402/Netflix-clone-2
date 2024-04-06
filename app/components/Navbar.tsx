"use client";

import Link from "next/link";
import logo from "../../public/netflix_logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Added", href: "/home/recently" },
  { name: "Lists", href: "/home/user/lists" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex flex-center">
        <Link href="/home" className="w-32">
          <Image src={logo} alt="Logo" priority />
        </Link>
        <ul className="lg:flex gap-x-7 ml-16 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-normal text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
}
