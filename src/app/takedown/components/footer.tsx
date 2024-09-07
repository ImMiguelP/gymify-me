import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const TakedownFooter = () => {
  const links = [
    { name: "Newsleter", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socials = [
    { name: "Discord", href: "#", icon: <FaDiscord className="w-6 h-6" /> },
    { name: "TikTok", href: "#", icon: <FaTiktok className="w-6 h-6" /> },
    { name: "Instagram", href: "#", icon: <FaInstagram className="w-6 h-6" /> },
    { name: "Facebook", href: "#", icon: <FaFacebookF className="w-6 h-6" /> },
    { name: "YouTube", href: "#", icon: <FaYoutube className="w-6 h-6" /> },
    { name: "Twitter", href: "#", icon: <FaXTwitter className="w-6 h-6" /> },
  ];
  return (
    <footer className="w-full h-[602px] px-64 py-24 flex flex-col gap-16">
      <div className="w-[1408px] h-[216px] flex justify-between">
        <div className="w-[453.84px] h-[216px] flex flex-col gap-8">
          <Image src="/logo.svg" alt="logo" width={453} height={128} />
          <div className="w-[402px] h-[56px] flex gap-6">
            <button
              type="button"
              className="transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              <Image
                src="/appstore.svg"
                alt="App Store"
                width={189}
                height={56}
              />
            </button>
            <button
              type="button"
              className="transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              <Image
                src="/googlestore.svg"
                alt="Google Play Store"
                width={190}
                height={57}
              />
            </button>
          </div>
        </div>

        <div className="w-[297px] h-[179px] flex flex-col gap-8">
          <h3 className="font-jumboSale text-2xl font-thin leading-[26.4px] text-start text-[#A7A2FF]">
            Useful Links
          </h3>
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="font-jumboSale text-[32px] font-thin leading-[35.2px] text-start text-white whitespace-nowrap transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-[1408px] h-[2px] bg-[#A7A2FF]" />
      <div className="w-[1408px] h-[64px] flex justify-between items-center">
        <p className="font-parisine text-2xl font-bold leading-[30.58px] text-center text-[#FEFFF3]/40">
          All Rights Reserved © 2021 A SNACK BUILDS PRODUCT
        </p>
        <div className="w-[464px] h-[64px] flex gap-4">
          {socials.map((social) => (
            <Button
              key={social.name}
              className="w-[64px] h-[64px] p-4 flex items-center justify-center gap-2 rounded-3xl border-2 border-[#884DF7] bg-[#611FB8] hover:bg-[#4D1893] transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default TakedownFooter;
