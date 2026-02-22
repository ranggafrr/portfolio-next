import { useState } from "react";
import { cn } from "@/lib/utils";

export function HamburgerMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end">
      {/* Tombol Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
    fixed z-[9999] top-8 right-8
    flex flex-col justify-center gap-2
    rounded-full px-4 py-7
    bg-white border border-zinc-800
    transition-colors duration-300
  "
      >
        <span
          className={cn(
            "block h-[3px] w-10 rounded bg-zinc-800 transition-all duration-300 ease-in-out",
            isOpen ? "translate-y-1.5 rotate-45" : "",
          )}
        />
        <span
          className={cn(
            "block h-[3px] w-6 rounded bg-zinc-800 transition-all duration-300 ease-in-out",
            isOpen ? "-translate-y-1.5 -rotate-45 w-10" : "",
          )}
        />
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[90] flex items-center justify-center overflow-hidden transition-all duration-700",
          isOpen ? "visible" : "invisible delay-500",
        )}
      >
        {/* Circle */}
        <div
          className={cn(
            "absolute -top-20 -right-20 w-40 h-40 bg-zinc-950 rounded-full",
            "transition-transform duration-700",
            isOpen ? "scale-[25]" : "scale-0",
          )}
          style={{
            transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        />

        {/* Menu */}
        <nav
          className={cn(
            "relative z-[101] flex flex-col items-center gap-y-8 transition-all duration-500",
            isOpen
              ? "opacity-100 translate-y-0 delay-300"
              : "opacity-0 translate-y-10",
          )}
        >
          {["Home", "About", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-3xl lg:text-6xl font-semibold text-white hover:text-zinc-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex justify-center gap-x-5">
            <div className="text-white">a</div>
            <div className="text-white">a</div>
            <div className="text-white">a</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default [HamburgerMenuMobile];
