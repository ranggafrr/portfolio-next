"use client";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between lg:mx-36 pt-5">
      <Image
        src={"/images/RF-removebg-preview.png"}
        alt="logo-RF"
        width={100}
        height={100}
        className="size-14"
      />
      <ul className="flex items-center gap-x-10">
        <li className="font-medium text-md text-zinc-800">HOME</li>
        <li className="font-medium text-md text-zinc-800">SKILL</li>
        <li className="font-medium text-md text-zinc-800">PROJECTS</li>
        <li className="font-medium text-md text-zinc-800">CONTACT</li>
      </ul>
    </div>
  );
}
