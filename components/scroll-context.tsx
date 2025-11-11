"use client";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export default function ScrollContext({ children }: { children: ReactNode }) {
  const [lenis] = useState<Lenis | null>(() => 
    typeof window !== "undefined" ? new Lenis() : null
  );
  
  useEffect(() => {
    if (!lenis) return;
    
    function raf(time: number) {
      lenis!.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis!.destroy();
    };
  }, [lenis]);
  
  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);