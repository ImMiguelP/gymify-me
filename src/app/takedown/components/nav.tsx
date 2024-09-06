import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TakedownNav = () => {
  const navLinks = [
    { name: "Whitepaper", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "PatchNotes", href: "#" },
    { name: "Support", href: "#" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 h-[160px] px-64 py-8 flex items-center gap-2">
      <div className="max-w-[1407px] w-full h-24 px-8 py-4 rounded-tl-[1000px] flex justify-between items-center">
        <div>
          {/* Add logo or left-side content here */}
          <Image src="/logo.svg" alt="logo" width={226} height={64} />
        </div>
        <div className="flex max-w-[783px] w-full h-[41px] gap-[35px] justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-thin font-jumboSale leading-[26.4px] text-left"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-[132px] h-[41px] px-6 py-3 gap-2 rounded-[1000px] bg-[#884DF7] text-white text-2xl font-jumboSale font-thin">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default TakedownNav;
