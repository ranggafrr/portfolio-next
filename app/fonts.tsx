// app/fonts.ts
import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const clash = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Regular.otf", weight: "400" },
    { path: "./fonts/ClashDisplay-Semibold.otf", weight: "600" },
    { path: "./fonts/ClashDisplay-Bold.otf", weight: "700" },
  ],
  variable: "--font-clash",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
