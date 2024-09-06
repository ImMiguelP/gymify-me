import { Button } from "@/components/ui/button";
import React from "react";
import TakedownHeading from "./components/heading";
import Airdrop from "./components/airdrop";

const TakedownHomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      {/* Header */}
      <TakedownHeading />
      {/* Airdrop Info */}
      <Airdrop />
    </main>
  );
};

export default TakedownHomePage;
