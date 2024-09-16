"use client";

import links from "@/constants/links";
import Image from "next/image";
import { Button } from "../ui/button";
import Logo from "@/components/layout/Logo";
import MenuIcon from "../../assets/socials/hamburger.svg";
import React, { useState } from "react";
import { LogIn, X } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false); // Close sidebar after navigating
  };

  return (
    <div className="lg:hidden flex items-center">
      {/* Hamburger Menu Button */}
      <Button
        className="flex items-center justify-center p-0"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={MenuIcon} width={30} height={30} alt="menu" />
      </Button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`px-8 fixed top-0 left-0 h-full w-[90%] bg-color-8 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="py-6 flex items-center justify-between">
          <Logo />
          <Button
            className="p-0"
            variant="ghost"
            onClick={() => setIsOpen(false)}
          >
            {/* X Close Button */}
            <X />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col pt-16">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.name} className="border-b-[1px] p-1 w-full">
                <Button
                  asChild
                  variant="link"
                  className="text-white hover:text-color-1 w-full flex justify-start"
                  onClick={() => handleNavigation(link.link)}
                >
                  <span className="gap-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </span>
                </Button>
              </li>
            ))}

            <li key="login" className="border-b-[1px] p-1 w-full">
              <Button
                asChild
                variant="link"
                className="text-white hover:text-color-1 w-full flex justify-start"
                onClick={() => handleNavigation("/login")}
              >
                <span className="gap-2">
                  <LogIn />
                  <span>Login</span>
                </span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
