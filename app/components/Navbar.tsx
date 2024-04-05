import Link from "next/link";
import logo from "../../public/netflix_logo.svg";
import Image from "next/image";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "TV Show", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My Lists", href: "/home/user/lists" },
];

export default function Navbar() {
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex flex-center">
        <Link href="/home" className="w-32">
          <Image src={logo} alt="Logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
            
        </ul>
      </div>
    </div>
  );
}
