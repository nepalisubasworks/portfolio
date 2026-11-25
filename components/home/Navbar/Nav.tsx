"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { navLinks, SITE } from "@/constant/constant";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  const [navBg, setNavBg] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setNavBg(window.scrollY > 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[100] h-[12vh] w-full transition-all duration-200 ${
        navBg ? "bg-[#0F142E] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-[90%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
            <FaCode className="h-5 w-5" />
          </div>
          <h1 className="hidden text-xl font-bold text-white sm:block md:text-2xl">
            {SITE.shortName}
            <span className="text-cyan-300">.</span>
          </h1>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base font-medium text-white transition-colors duration-200 hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href={SITE.cv}
            download
            className="rounded-lg bg-blue-800 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-900"
          >
            Download CV
          </a>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={openNav}
            className="lg:hidden"
          >
            <HiBars3BottomRight className="h-8 w-8 cursor-pointer text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
