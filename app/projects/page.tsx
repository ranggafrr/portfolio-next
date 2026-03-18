"use client";
import ScrollContext from "@/components/scroll-context";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import SplashScreen from "@/components/splash-screen";
import Footer from "@/components/footer";
import ProjectList from "@/components/projects-list";

export default function Projects() {
  return (
    <>
      <SplashScreen title="PROJECTS" />
      <ScrollContext>
        <Navbar />
        <div className="relative flex items-center justify-center h-96">
          <Link href={"/"}>
            <div className="hidden md:block absolute top-0 left-10 bg-transparent border border-zinc-800 rounded-full p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="font-heading font-semibold text-zinc-800 text-6xl md:text-8xl"
          >
            Projects
          </motion.p>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1.5px] bg-zinc-500 overflow-hidden"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-[1.5px] bg-zinc-500 overflow-hidden mt-20"
        />
        <div className="flex justify-between mx-10 relative -mt-5">
          {/* Left Line */}
          <div className="md:w-1/20 lg:w-1/10 h-[83px] relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-16 right-0 w-[1.5px] bg-zinc-500 overflow-hidden"
            />
          </div>

          <div className="w-full md:w-18/20 lg:w-8/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 py-20">
            <ProjectList />
          </div>

          {/* Right Line */}
          <div className="md:w-1/20 lg:w-1/10 h-[83px] relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute  -top-16 left-0 w-[1.5px] bg-zinc-500 overflow-hidden"
            />
          </div>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.8 }}
          className="h-[1.5px] bg-zinc-500 overflow-hidden bottom-28"
        />
        <Footer />
      </ScrollContext>
    </>
  );
}
