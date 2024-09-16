"use client";
import links from "@/constants/links";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";

const Navbar = () => {
  return (
    <nav className="hidden navbar lg:flex items-center text-xl font-medium">
      {/* {links.map((link) => {
        return (
          <Button
            asChild
            key={link.id}
            className="flex items-center gap-x-2 text-txtColor-3 hover:text-color-1"
            // className={`flex items-center gap-x-2 hover:text-color-1 ${
            //   currentHash === link.href ? "text-white" : "text-txtColor-3"
            // }`}
            variant={"link"}
            // onClick={() => selectNavLink(link.href)}
          >
            <Link href={link.href}>
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        );
      })} */}
      <FloatingNav navItems={links} />
    </nav>
  );
};
export default Navbar;
