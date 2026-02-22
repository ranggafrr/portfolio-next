// app/fonts.ts
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const clash = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Regular.otf", weight: "400" },
    { path: "../public/fonts/ClashDisplay-Semibold.otf", weight: "600" },
    { path: "../public/fonts/ClashDisplay-bold.otf", weight: "700" },
  ],
  variable: "--font-clash",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
