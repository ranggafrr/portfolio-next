"use client";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";
import { useViewPoint } from "@/hooks/useViewpoint";
const LenisContext = createContext<Lenis | null>(null);

export default function ScrollContext({ children, ready = true }: { children: ReactNode; ready?: boolean }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  useViewPoint();
  useEffect(() => {
    if (!ready) return;

    const instance = new Lenis();
    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      instance.destroy();
    };
  }, [ready]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);