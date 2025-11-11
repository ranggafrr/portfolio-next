"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollContext from "@/components/scroll-context";
import TextType from "@/components/TextType";
import SplashScreen from "@/components/splash-screen";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollContext>
        <div className="h-screen relative">
          <Navbar />
          <div className="absolute top-0 flex justify-between items-center h-full w-full px-40 gap-x-10">
            <div className="flex flex-col w-1/2">
              <p className="lg:text-4xl text-zinc-800">
                Hello I&apos;m{" "}
                <span className="font-bold">Rangga Firmansyah</span>
              </p>
              <div className="inline-flex items-center gap-x-2 mt-3">
                <div className="border-b w-56 h-0.75 bg-zinc-800 mt-1.5" />
                <TextType
                  text={["Frontend Developer", "Freelancer", "Vibe Coder"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                  className="text-zinc-800 w-full text-3xl font-medium"
                />
              </div>
              <p className="text-xl tracking-wide font-stretch-expanded w-5/6 mt-2">
                Every pixel, every line of code — designed to make the web a
                better place.
              </p>
              <Button className="bg-zinc-800 text-white w-36 mt-5 rounded-full font-semibold text-lg ">
                Let&apos;s Talk
              </Button>
            </div>
            <Image
              src={"/images/me.svg"}
              className="absolute bottom-0 right-20 h-[600px] w-[600px]"
              width={5000}
              height={5000}
              alt="rangga firmansyah"
            />
          </div>
          <div className="absolute left-40 bottom-5">
            <p className="underline text-lg border-zinc-800">
              ranggaf758@gmail.com
            </p>
          </div>
        </div>
        {/* tech stack */}
        <div className="min-h-screen bg-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl lg:text-4xl font-bold text-white mb-4 tracking-wide">
                WHAT TECHNOLOGIES DO I MASTER
              </h2>
              <p className="text-zinc-400 text-sm lg:text-lg">
                Technologies i’ve been working with recently
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "JavaScript", icon: "/images/logo/JS-1.png" },
                { name: "TypeScript", icon: "/images/logo/ts.png" },
                { name: "PHP", icon: "/images/logo/4.png" },
                { name: "Vue JS", icon: "/images/logo/vue.png" },
                { name: "React JS", icon: "/images/logo/react-black.png" },
                { name: "Next JS", icon: "/images/logo/next.png" },
                { name: "Tailwind", icon: "/images/logo/tailwind.png" },
                { name: "MySQL", icon: "/images/logo/mysql.png" },
                { name: "Prisma", icon: "/images/logo/prisma.png" },
                { name: "Supabase", icon: "/images/logo/supabase.png" },
                { name: "HTML", icon: "/images/logo/html-2.png" },
                { name: "Node JS", icon: "/images/logo/node.png" },
              ].map((tech, index) => (
                <Card
                  key={index}
                  className="group bg-zinc-800 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-750 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-lg  group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="text-white font-medium text-sm group-hover:text-zinc-200 transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Project */}
        <div className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl lg:text-4xl font-bold text-zinc-800 mb-4 tracking-wide">
                PROJECTS
              </h2>
              <p className="text-zinc-700 text-sm lg:text-lg">
                A selection of projects I’ve designed and developed using modern web technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

            </div>
          </div>
        </div>
      </ScrollContext>
    </>
  );
}
