import Image from "next/image";
import React from "react";

const AirdropHeading = () => {
  const airdropSteps = [{ text: "Global Launch" }, { text: "Mid September" }];
  return (
    <div className="w-full">
      <div className="max-w-[1920px] min-h-[610px] w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-16">
        <h1 className="text-[64px] font-thin leading-tight sm:leading-snug md:leading-[1.1] text-center w-full max-w-[895px] flex items-center justify-center font-jumboSale text-[#8A4EF7]">
          How Does the Airdrop Work?
        </h1>
        <p className="w-full max-w-[896px] text-center text-[#C7B4FE] text-2xl font-bold font-parisine leading-relaxed sm:leading-[1.6] md:leading-[1.7] lg:leading-[30.58px]">
          Takedown Legends is only as strong as the community behind it. To say
          thank you, we are rolling out our Token Airdrop to reward YOU, our
          community. The more you play, the higher you&apos;ll climb.
          Leaderboard placement will determine exactly how many $SNACK tokens
          you&apos;ll earn
        </p>
        <div className="relative w-full max-w-[896px] h-auto">
          <Image
            src="/rectangle2.svg"
            alt="Rectangle background"
            width={1026}
            height={215}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-auto"
          />
          <div className="relative z-10 w-full max-w-[834.78px] h-auto py-4 px-4 sm:px-8 mx-auto flex flex-col gap-4">
            <div className="w-full flex justify-between text-white items-center text-2xl">
              <p className="w-1/3 font-jumboSale font-thin leading-tight text-center">
                Quest Start
              </p>
              <div className="w-[8.59px] h-[32px] bg-[#180F2E] mx-auto flex-none" />
              <p className="w-1/3 font-jumboSale font-thin leading-tight text-center">
                Social Campaign
              </p>
              <div className="w-[8.59px] h-[32px] bg-[#180F2E] mx-auto flex-none" />
              <p className="w-1/3 font-jumboSale font-thin leading-tight text-center">
                Prizes Available
              </p>
            </div>
            <div className="w-full h-auto p-2 sm:p-[9px] flex flex-row gap-2 bg-[#180F2E]">
              {airdropSteps.map((step) => (
                <div
                  key={step.text}
                  className="w-1/3 h-auto py-2 flex justify-center items-center bg-[#5CFF42]"
                >
                  <p className="w-full font-parisine text-2xl font-bold leading-tight sm:leading-[30.58px] text-center text-[#180F2E]">
                    {step.text}
                  </p>
                </div>
              ))}
              <div className="w-1/3 h-auto py-2 sm:px-2 flex justify-center items-center bg-[#5CFF42]">
                <p className="w-full font-parisine text-2xl font-bold leading-tight sm:leading-[30.58px] text-center text-[#180F2E]">
                  Redeemable for up to 90 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-[589px] px-4 py-16 flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 bg-[#884DF7]">
        <Image
          src="/divider2.svg"
          alt="Divider"
          width={1920}
          height={80}
          className="absolute w-full h-[80px] object-cover top-0"
        />
        <h1 className="w-full max-w-[589px] flex items-center justify-center text-white text-[64px] font-thin font-jumboSale leading-tight sm:leading-snug md:leading-[1.1] text-center">
          How To Participate
        </h1>
        <div className="w-full max-w-[897px]">
          <Image
            src="/participate.svg"
            alt="How to participate"
            width={897}
            height={589}
            className="w-full object-cover"
          />
        </div>
        <Image
          src="/divider3.svg"
          alt="Divider"
          width={1920}
          height={80}
          className="absolute w-full h-[80px] object-cover bottom-0"
        />
      </div>

      {/* Prizes */}
      <div className="w-full max-w-[1920px] min-h-[607px] px-4  py-8  flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
        <h1 className="w-full max-w-[845px] text-white text-[64px] font-jumboSale font-thin leading-tight sm:leading-snug md:leading-[70.4px] text-center">
          Exclusive Prizes Await You!
        </h1>
        <p className="w-full max-w-[896px] text-[#C7B4FE] text-2xl font-parisine font-bold leading-snug sm:leading-[30.58px] text-center">
          Redeem your points for $SNACK tokens, virtual coins, and rare in-game
          items. Unique prizes will be revealed soon!
        </p>
        <div className="flex flex-col md:flex-row w-full max-w-[896px] gap-6 items-center sm:items-stretch">
          <Image
            src="/softcoins.svg"
            alt="Soft Coins"
            width={283}
            height={268}
            className="object-cover w-full md:w-1/3"
          />
          <Image
            src="/ingameitems.svg"
            alt="In-Game Items"
            width={283}
            height={268}
            className="object-cover w-full md:w-1/3"
          />
          <Image
            src="/snacktokens.svg"
            alt="Snack Tokens"
            width={283}
            height={268}
            className="object-cover w-full md:w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default AirdropHeading;
