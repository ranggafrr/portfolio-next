"use client";

import { useEffect, useState } from "react";
import { HamburgerMenuMobile } from "@/components/hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const pathname = usePathname();

  const navClass = (path: string) =>
    `relative font-heading text-lg pb-1 transition-colors
    ${
      pathname === path
        ? "text-zinc-800 after:w-full"
        : "text-zinc-600 hover:text-black after:w-0 hover:after:w-full"
    }
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:h-[2px]
    after:bg-black
    after:transition-all
    after:duration-300`;

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
          <Link
            href="/"
            className={`font-heading text-xl xl:text-lg text-zinc-600 ` + navClass("/")}
          >
            HOME
          </Link>
          <Link href={"/about"}   className={`font-heading text-xl xl:text-lg text-zinc-600 ` + navClass("/about")}>
            ABOUT
          </Link>
          <Link
            href={"/projects"}
              className={`font-heading text-xl xl:text-lg text-zinc-600 ` + navClass("/projects")}
          >
            PROJECTS
          </Link>
          <Link
            href={"/contact"}
              className={`font-heading text-xl xl:text-lg text-zinc-600 ` + navClass("/contact")}
          >
            CONTACT
          </Link>
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
