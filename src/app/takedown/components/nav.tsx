"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const TakedownNav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 max-w-[1407px] w-full h-24 px-4 sm:px-8 py-4 flex justify-between rounded-3xl mt-4 items-center mx-auto transition-all duration-300",
        scrollY > 10
          ? "bg-[#180F2E] shadow-[0px_2px_14.8px_0px_rgba(16,3,42,1)]"
          : ""
      )}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={226}
        height={64}
        className="w-auto h-auto"
      />
      <div className="hidden lg:flex max-w-[783px] w-full h-[41px] gap-[35px] justify-center items-center">
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
      <div className="flex items-center">
        <Button className="w-[132px] h-[41px] px-6 py-3 gap-2 rounded-[1000px] bg-[#884DF7] hover:bg-[#7038D6] text-white text-2xl font-jumboSale font-thin lg:hidden">
          Sign Up
        </Button>
        <div className="lg:hidden ml-4">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 p-2 rounded-full bg-[#884DF7] hover:bg-[#7038D6] text-white"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#180F2E] mt-4 p-4 rounded-b-3xl shadow-[0px_2px_14.8px_0px_rgba(16,3,42,1)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white text-2xl font-thin font-jumboSale leading-[26.4px] text-left py-2"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4 h-[41px] px-6 py-3 gap-2 rounded-[1000px] bg-[#884DF7] hover:bg-[#7038D6] text-white text-2xl font-jumboSale font-thin">
            Sign Up
          </Button>
        </div>
      )}
    </nav>
  );
};

export default TakedownNav;
