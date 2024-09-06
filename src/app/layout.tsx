import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Nav";
import localFont from "next/font/local";
import TakedownNav from "./takedown/components/nav";
import type { PropsWithChildren } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gymify Me",
  description: "Forge Your Ideal Physique",
};

const jumboSale = localFont({
  src: "../../public/fonts/JumboSale Trial.otf",
  variable: "--font-jumbo-sale",
});

const parisine = localFont({
  src: "../../public/fonts/Parisine Regular.otf",
  variable: "--font-parisine",
});

export default function RootLayout({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#180F2E]">
      <body
        className={cn(
          "flex flex-col min-h-screen bg-[#180F2E]",
          fontSans.variable,
          jumboSale.variable,
          parisine.variable
        )}
      >
        <main className="max-w-[1920px] mx-auto w-full flex-grow flex flex-col bg-[#180F2E]">
          {/* <Nav /> */}
          <TakedownNav />
          <div className="flex-grow bg-[#180F2E]">{children}</div>
        </main>
      </body>
    </html>
  );
}
