"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const TakedownNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Whitepaper", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "PatchNotes", href: "#" },
    { name: "Support", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 max-w-[1407px] w-full h-24 px-8 py-4 flex justify-between rounded-3xl mt-4 items-center mx-auto transition-all duration-300",
        scrollY > 10
          ? "bg-[#180F2E] shadow-[0px_2px_14.8px_0px_rgba(16,3,42,1)]"
          : ""
      )}
    >
      <Image src="/logo.svg" alt="logo" width={226} height={64} />
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
        <Button className="w-[132px] h-[41px] px-6 py-3 gap-2 rounded-[1000px] bg-[#884DF7] hover:bg-[#7038D6] text-white text-2xl font-jumboSale font-thin">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default TakedownNav;
