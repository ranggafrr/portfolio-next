import type { Metadata } from "next";
import { clash, inter } from "./fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website of Rangga Firmansyah",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clash.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
