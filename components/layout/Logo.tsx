"use client";
import Image from "next/image";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return <Image src={logo} alt="logo" height={36} />;
};

export default Logo;
