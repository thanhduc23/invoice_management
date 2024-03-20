"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Logo from "../../assets/images/404-team-high-resolution-logo-transparent.png";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hooks";
import { logout } from "@/lib/redux/store/authSlice";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/sign-in");
  };

  return (
    <header className="w-full px-10 py-5 min-w-[760px] overflow-hidden">
      <nav className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} width={250} height={200} alt="logo" />
        </Link>

        <div className="flex gap-x-5 items-center">
          <ModeToggle />
          <ul className="flex gap-x-5 items-centers">
            {isAuthenticated ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Button>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button variant={"ghost"}>
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
