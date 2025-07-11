"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();


  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={link.path === pathname ? "text-green-400 border-b-2 border-green hover:text-green-200 transition-all "  : ""}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
