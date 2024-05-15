import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between px-40 py-4 border-b border-black">
      <div className="logo-frame">
        <p className="font-bold text-lg">CAPS Construction</p>
      </div>
      <div className="nav-links flex gap-x-2">
        <Link href="/home" className="font-sans font-thin">
          Home
        </Link>
        <Link href="/portfolio" className="font-sans font-thin">
          Portfolio
        </Link>
      </div>
    </nav>
  );
}
