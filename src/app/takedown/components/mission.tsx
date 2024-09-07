import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const MissionHeading = () => {
  return (
    <>
      <div className="relative w-full min-h-[900px] py-36 flex flex-col gap-8 sm:gap-12 md:gap-16 bg-[#884DF7] justify-center items-center">
        <Image
          src="/divider2.svg"
          alt="Divider"
          width={1920}
          height={80}
          className="absolute w-full h-[80px] object-cover top-0"
        />
        <h1 className="w-full max-w-[896px] px-4 text-[64px] font-jumboSale font-thin leading-tight sm:leading-snug md:leading-[70px] text-center text-white">
          Daily Missions and <br className="hidden md:block" /> Special
          Challenges
        </h1>
        <p className="w-full max-w-[896px] px-4 text-2xl font-parisine font-bold leading-snug sm:leading-[1.6] md:leading-[30.58px] text-center text-white">
          Complete daily missions to earn extra points and premium items. If you
          hold an NFT, enjoy special missions with even better rewards!
        </p>
        <h2 className="w-full max-w-[896px] px-4 text-[32px] font-jumboSale font-thin leading-tight sm:leading-snug md:leading-[35.2px] text-center text-white">
          Mission Details
        </h2>
        <div className="max-w-[896px] w-full px-4 flex flex-col md:flex-row gap-4 sm:gap-8">
          <div className="w-full md:w-1/3 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-[32px] bg-[#611FB8]">
            <p className="font-jumboSale text-2xl font-thin leading-tight sm:leading-[26.4px] text-left text-white">
              Daily Reset
            </p>
            <p className="text-white text-base font-parisine font-bold leading-snug sm:leading-[20.38px] text-left">
              New missions and challenges every day.
            </p>
          </div>
          <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-[32px] bg-[#611FB8]">
            <p className="font-jumboSale text-2xl font-thin leading-tight sm:leading-[26.4px] text-left text-white">
              Special Missions For NFT Holders
            </p>
            <p className="text-white text-base font-parisine font-bold leading-snug sm:leading-[20.38px] text-left">
              More challenges, more rewards! The higher the rarity of your NFT,
              the better the rewards.
            </p>
          </div>
        </div>
        <p className="w-full max-w-[896px] px-4 text-center text-base font-parisine font-bold leading-snug sm:leading-[20.38px] text-[#C7B4FE]">
          *Tokens are claimable for up to 90 Days after TGE
        </p>
        <Image
          src="/divider3.svg"
          alt="Divider"
          width={1920}
          height={80}
          className="absolute w-full h-[80px] object-cover bottom-0 scale-x-[-1]"
        />
      </div>
      <div className="w-full px-4 py-16 flex flex-col items-center gap-8 md:gap-16">
        <h1 className="w-auto text-[64px] font-jumboSale font-thin leading-tight md:leading-[70.4px] text-center flex items-center justify-center text-white">
          Stay Tuned!
        </h1>
        <p className="w-full max-w-[496px] text-center text-2xl font-parisine font-bold leading-snug md:leading-[30.58px] text-[#C7B4FE]">
          Follow us for more updates, new missions, and opportunities to earn
          prizes.
        </p>
        <div className="w-full max-w-[529px] flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
          <Button className="w-full sm:w-auto h-[72px] px-4 sm:px-8 py-6 gap-2 rounded-3xl border-[5px] border-[#180F2E] bg-[#884DF7] flex items-center justify-center shadow-[inset_0px_-6px_0px_0px_rgba(26,9,63,0.5)] transition-transform hover:translate-y-[-15px] active:translate-y-0 hover:bg-[#7038D6]">
            <span className="font-jumboSale text-2xl font-thin leading-[26.4px] text-left flex items-center justify-center gap-2">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              Instagram
            </span>
          </Button>
          <Button className="w-full sm:w-auto h-[72px] px-4 sm:px-8 py-6 gap-2 rounded-3xl border-[5px] border-[#180F2E] bg-[#884DF7] flex items-center justify-center shadow-[inset_0px_-6px_0px_0px_rgba(26,9,63,0.5)] transition-transform hover:translate-y-[-15px] active:translate-y-0 hover:bg-[#7038D6]">
            <span className="font-jumboSale text-2xl font-thin leading-[26.4px] text-left flex items-center justify-center gap-2">
              <AiOutlineDiscord className="w-5 h-5 sm:w-6 sm:h-6" />
              Discord
            </span>
          </Button>
          <Button className="w-full sm:w-auto h-[72px] px-4 sm:px-8 py-6 gap-2 rounded-3xl border-[5px] border-[#180F2E] bg-[#884DF7] flex items-center justify-center shadow-[inset_0px_-6px_0px_0px_rgba(26,9,63,0.5)] transition-transform hover:translate-y-[-15px] active:translate-y-0 hover:bg-[#7038D6]">
            <span className="font-jumboSale text-2xl font-thin leading-[26.4px] text-left flex items-center justify-center gap-2">
              <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />X
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MissionHeading;
