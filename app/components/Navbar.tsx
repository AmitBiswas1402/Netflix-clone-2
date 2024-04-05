import Link from "next/link";
import logo from '../../public/netflix_logo.svg'
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex flex-center">
                <Link href="/home" className="w-32"/>
                <Image src={logo} alt='Logo' priority />
            </div>
        </div>
    )
}