import { useEffect } from "react";

export function useViewPoint() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // ganti "smooth" kalau mau animasi
    });
  }, []);
}