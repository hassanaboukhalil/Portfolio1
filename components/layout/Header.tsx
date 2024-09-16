import Link from "next/link";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="max-w-full my-container py-6 flex flex-wrap items-center justify-between bg-color-8">
      <Link href="/">
        <Logo />
      </Link>
      <Navbar />
      <MobileNav />
    </header>
  );
};
export default Header;
