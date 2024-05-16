"use client";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between px-40 py-4 border-b border-black">
      <div className="logo-frame">
        <Link href="/" className="font-bold text-lg">
          CAPS Construction
        </Link>
      </div>
      <div className="nav-links flex gap-x-2">
        <Link href="/" className="font-sans font-thin">
          Home
        </Link>
        <Link href="/portfolio" className="font-sans font-thin">
          Portfolio
        </Link>
      </div>
    </nav>
  );
}
