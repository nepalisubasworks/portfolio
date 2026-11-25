"use client";

import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { navLinks } from "@/constant/constant";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  return (
    <div
      aria-hidden={!showNav}
      className={`fixed inset-0 z-[1000] transform transition-all duration-300 ${
        showNav ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop overlay (click to close) */}
      <div
        onClick={closeNav}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Slide-in drawer */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[80%] max-w-sm transform flex-col justify-center space-y-6 bg-[#0F142E] pl-10 shadow-2xl transition-transform delay-300 duration-300 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.id}
            href={link.url}
            onClick={closeNav}
            style={{ transitionDelay: showNav ? `${index * 60}ms` : "0ms" }}
            className={`w-fit border-b-2 border-white pb-1 text-2xl font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:text-cyan-300 sm:text-3xl ${
              showNav ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeNav}
          className="absolute right-6 top-6"
        >
          <CgClose className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
