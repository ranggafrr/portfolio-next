"use client";
import ScrollContext from "@/components/scroll-context";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import Timeline from "@/components/timeline";
import FAQ from "@/components/faq";
import SplashScreen from "@/components/splash-screen";
import { useState } from "react";
import Footer from "@/components/footer";

export default function About() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <SplashScreen title="ABOUT" onDone={() => setReady(true)} />
      <ScrollContext ready={ready}>
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
            About Me
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
        <div className="flex justify-between relative -mt-5">
          {/* Left Line */}
          <div className="w-2/20 lg:w-1/10 relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-16 right-0 w-[1.5px] bg-zinc-500 h-[calc(100%+10rem)]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="w-16/20 lg:w-8/10 py-20 pb-52 mx-5 md:mx-10 xl:mx-32"
          >
            <p className="font-heading font-semibold text-4xl lg:text-6xl text-zinc-800">
              Hello There!
            </p>
            <p className="mt-5 font-[Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif] text-sm md:text-base">
              <span className="block">
                {" "}
                Hello! I’m Rangga Firmansyah, a Frontend Developer with over 4
                years of experience in building modern, responsive, and
                user-focused web applications. I specialize in crafting clean,
                scalable interfaces using technologies{" "}
                <span className="text-blue-700 border-b-3 border-blue-700">
                  React
                </span>{" "}
                and{" "}
                <span className="text-blue-700 border-b-3 border-blue-700">
                  Next.js
                </span>
                .
              </span>
              <br />
              <span className="block">
                My journey in web development is driven by a strong curiosity and
                a commitment to continuous improvement. Over the years, I’ve
                worked on various projects ranging from internal dashboards to
                public-facing platforms, focusing on performance, accessibility,
                and maintainable code. I’m comfortable collaborating across teams
                and translating business requirements into intuitive digital
                experiences.
              </span>
              <br />
              <span className="block">
                Beyond frontend development, I also have experience working with
                backend technologies such as{" "}
                <span className="underline">Laravel</span>,{" "}
                <span className="underline">PHP</span>,{" "}
                <span className="underline">MySQL</span>, and integrating APIs,
                which allows me to understand products from an end-to-end
                perspective. This full-picture mindset helps me build interfaces
                that are not only visually appealing but also technically
                reliable.
              </span>
              <br />
              <span className="block">
                I enjoy learning new technologies, refining my skills, and solving
                real-world problems through thoughtful design and engineering. I’m
                always open to new challenges, collaborations, and opportunities
                to create meaningful digital products.
              </span>
            </p>
          </motion.div>

          {/* Right Line */}
          <div className="w-2/20 lg:w-1/10 relative">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute -top-16 left-0 w-[1.5px] bg-zinc-500 h-[calc(100%+10rem)]"
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 1.8 }}
            className="h-[1.5px] bg-zinc-500 overflow-hidden absolute bottom-32"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-semibold text-4xl lg:text-5xl text-zinc-800 mb-16 text-center"
          >
            My Career Journey
          </motion.h2>

          <Timeline />
        </div>
        <FAQ />
        <Footer />
      </ScrollContext>
    </>
  );
}
