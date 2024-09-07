import Image from "next/image";
import React from "react";

const MissionHeading = () => {
  return (
    <div className="relative w-full min-h-[900px] py-36 flex flex-col gap-8 sm:gap-12 md:gap-16 bg-[#884DF7] justify-center items-center">
      <Image
        src="/divider2.svg"
        alt="Divider"
        width={1920}
        height={80}
        className="absolute w-full h-[80px] object-cover top-0"
      />
      <h1 className="w-full max-w-[896px] px-4 text-[64px] font-jumboSale font-thin leading-tight sm:leading-snug md:leading-[70px] text-center text-white">
        Daily Missions and <br className="hidden md:block" /> Special Challenges
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
  );
};

export default MissionHeading;
