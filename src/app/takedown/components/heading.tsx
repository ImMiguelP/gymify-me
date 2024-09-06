import { Button } from "@/components/ui/button";
import React from "react";

const TakedownHeading = () => {
  return (
    <div className="flex flex-col w-full min-h-screen md:h-[1080px] bg-[url('/bg.svg')] bg-cover justify-center items-center px-4 md:px-0">
      <div className="w-[778px] h-[617px] gap-16 flex flex-col items-center justify-center">
        <h1 className="w-[938px] h-[244px] text-center mt-24 mb-8">
          <span className="text-[#8A4EF7] text-9xl font-bold leading-none font-jumboSale whitespace-nowrap overflow-visible">
            $SNACK TOKENS
          </span>
          <span className="text-white text-[192px] font-bold leading-none font-jumboSale block w-full">
            AIRDROP!
          </span>
        </h1>
        <div className="w-[632px] h-[56px]  bg-[url('/rectangle.svg')] bg-cover bg-center flex items-center justify-center">
          <p className="text-white text-2xl font-bold font-parisine">
            Play Games, Win Trophies, Earn $SNACK Tokens
          </p>
        </div>
        <Button className="max-w-[277px] w-full h-[70px] px-8 py-6 bg-[#DA613D] text-white rounded-3xl border-[5px] border-[#A83526] flex ">
          <p className="flex items-center justify-center max-w-[213px] w-full font-jumboSale text-[28px] font-thin leading-[35.2px]">
            LEADERBOARDS
          </p>
        </Button>
      </div>
      <div className="w-[1920px] h-[80px] bg-[url('/divider.svg')] bg-cover bg-center absolute top-[1000px]" />
    </div>
  );
};

export default TakedownHeading;
