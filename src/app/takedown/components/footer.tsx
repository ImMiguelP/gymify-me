import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
    {
      name: "Discord",
      href: "https://discord.com/invite/takedownlegends",
      icon: <FaDiscord className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
    {
      name: "TikTok",
      href: "#",
      icon: <FaTiktok className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/takedownlegends/",
      icon: <FaInstagram className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebookF className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/TakedownLegends",
      icon: <FaXTwitter className="w-4 h-4 lg:w-6 lg:h-6" />,
    },
  ];
  return (
    <footer className="w-full px-4 sm:px-8 xl:px-64 py-8 lg:py-24 flex flex-col gap-8 lg:gap-16">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-4 lg:gap-8">
          <Image
            src="/logo.svg"
            alt="logo"
            width={453}
            height={128}
            className="w-full max-w-[453px] h-auto"
          />
          <div className="w-full max-w-[402px] flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <button
              type="button"
              className="w-auto sm:w-full transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              <Image
                src="/appstore.svg"
                alt="App Store"
                width={189}
                height={56}
                className="w-auto md:w-full h-auto"
              />
            </button>
            <button
              type="button"
              className="w-auto sm:w-full transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              <Image
                src="/googlestore.svg"
                alt="Google Play Store"
                width={190}
                height={57}
                className="w-auto md:w-full h-auto"
              />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-4 lg:gap-8">
          <h3 className="font-jumboSale text-xl lg:text-2xl font-thin leading-[26.4px] text-center lg:text-start text-[#A7A2FF]">
            Useful Links
          </h3>
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="font-jumboSale text-2xl lg:text-[32px] font-thin leading-[35.2px] text-center lg:text-start text-white whitespace-nowrap transition-transform hover:translate-y-[-15px] active:translate-y-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#A7A2FF]" />
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <p className="font-parisine text-lg lg:text-2xl font-bold leading-[30.58px] text-center text-[#FEFFF3]/40">
          All Rights Reserved © 2021 A SNACK BUILDS PRODUCT
        </p>
        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-end gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-12 h-12 lg:w-16 lg:h-16 p-2 lg:p-4 flex items-center justify-center gap-2 rounded-3xl border-2 border-[#884DF7] bg-[#611FB8] hover:bg-[#4D1893] transition-transform hover:translate-y-[-15px] active:translate-y-0">
                {social.icon}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default TakedownFooter;
