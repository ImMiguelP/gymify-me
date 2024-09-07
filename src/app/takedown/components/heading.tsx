import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TakedownHeading = () => {
  return (
    <div className="flex flex-col w-full min-h-screen md:h-[1080px] justify-center items-center px-4 md:px-0 relative">
      <div className="w-full md:w-[778px] h-auto md:h-[617px] gap-8 md:gap-16 flex flex-col items-center justify-center z-10">
        <h1 className="w-full md:w-[938px] h-auto md:h-[244px] text-center mt-12 md:mt-24 mb-4 md:mb-8">
          <span className="text-[#8A4EF7] text-8xl lg:text-9xl font-bold leading-none font-jumboSale whitespace-normal md:whitespace-nowrap overflow-visible">
            $SNACK TOKENS
          </span>
          <span className="text-white text-8xl lg:text-[192px] font-bold leading-none font-jumboSale block w-full">
            AIRDROP!
          </span>
        </h1>
        <div className="w-full max-w-[632px] h-auto md:h-[56px] bg-[url('/rectangle.svg')] bg-cover bg-center flex items-center justify-center p-4 md:p-0">
          <p className="text-white text-lg md:text-2xl font-bold font-parisine text-center">
            Play Games, Win Trophies, Earn $SNACK Tokens
          </p>
        </div>
        <Button className="max-w-[277px] w-full h-[70px] px-4 md:px-8 py-2 md:py-6 bg-[#DA613D] hover:bg-[#B84E31] text-white rounded-3xl border-[5px] border-[#A83526] flex transition-transform hover:translate-y-[-15px] active:translate-y-0">
          <p className="flex items-center justify-center max-w-[213px] w-full font-jumboSale text-[28px] font-thin leading-[1.2] md:leading-[35.2px]">
            LEADERBOARDS
          </p>
        </Button>
      </div>
      <Image
        src="/bg.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="w-full md:w-[1920px] h-[40px] md:h-[80px] bg-[url('/divider.svg')] bg-cover bg-center absolute bottom-0 md:top-[1000px] z-20" />
    </div>
  );
};

export default TakedownHeading;
