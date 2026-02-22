"use client";

import { useEffect, useState } from "react";
import { HamburgerMenuMobile } from "@/components/hamburger";

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHamburger(window.scrollY > 80); // threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center mx-5 lg:mx-36 pt-14 lg:pt-10">
        <ul className="flex items-center gap-x-10">
          <li className="font-semibold text-lg text-zinc-600">HOME</li>
          <li className="font-semibold text-lg text-zinc-600">ABOUT</li>
          <li className="font-semibold text-lg text-zinc-600">PROJECTS</li>
          <li className="font-semibold text-lg text-zinc-600">CONTACT</li>
        </ul>
      </div>

      {/* Hamburger (md+) */}
      {showHamburger && (
        <div className="fixed z-50 hidden md:block">
          <div
            className="
        animate-in fade-in slide-in-from-top-4
        duration-500 ease-out
      "
          >
            <HamburgerMenuMobile />
          </div>
        </div>
      )}

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <HamburgerMenuMobile />
      </div>
    </>
  );
}
