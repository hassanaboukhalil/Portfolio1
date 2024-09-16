"use client";
import Link from "next/link";
import { footerLinks } from "@/constants/footerLinks";
import { socialMedia } from "@/constants/socialMedia";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section className="flex justify-center items-center my-container flex-col pt-12 pb-6 bg-color-8">
      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <p className="font-poppins font-normal text-center body-2 text-txtColor-2">
          Copyright Ⓒ 2024 Brainwave. All Rights Reserved.
        </p>

        <div className="flex flex-row mb-3 md:mt-0 mt-6 md:mb-0">
          {socialMedia.map((social, index) => (
            <Link href={social.link} key={social.id}>
              <Image
                src={social.icon}
                alt={social.id}
                className={`text-black w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Footer;
