"use client";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import logoH from "@/assets/logo-h.png";
import { Playball } from "next/font/google";

const font = Playball({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 pr-6">
      <Image src={logoH} alt="logo" height={36} />
      <p className={`${font.className} text-white text-[1.5rem]`}>
        Hassan | Portfolio
      </p>
    </div>
  );
};

export default Logo;
