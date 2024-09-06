"use client";
import * as React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/weight-coach", label: "Weight Coach" },
  { href: "/fit-routine", label: "Fit Routine" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-900 bg-opacity-80 text-zinc-300 z-[9999]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-red-500">
            GYMIFY
          </Link>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-red-500 transition-colors uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
