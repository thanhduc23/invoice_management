import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "../../assets/images/404-team-high-resolution-logo-transparent.png";

const NavBar = () => {
  return (
    <header className="w-full p-5">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={150} height={80} alt="logo" />
        </Link>

        <div className="flex gap-x-5 items-center">
          <ModeToggle />
          <ul className="flex gap-x-5 items-centers">
            <Link href="/sign-in">Sign in</Link>
            <Link href="/sign-up">Sign up</Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
