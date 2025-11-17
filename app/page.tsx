"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollContext from "@/components/scroll-context";
import TextType from "@/components/TextType";
import SplashScreen from "@/components/splash-screen";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <div className="min-h-screen bg-zinc-900 pt-20">
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
                A selection of projects I’ve designed and developed using modern
                web technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Aksipeduli",
                  description: "Social platform for community support",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "React",
                    "Next.js",
                    "Tailwind",
                    "TypeScript",
                    "Prisma",
                    "Supabase",
                    "Framer Motion",
                  ],
                },
                {
                  title: "E-Commerce App",
                  description:
                    "Modern shopping platform with payment integration",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "Vue.js",
                    "Node.js",
                    "MySQL",
                    "Express",
                    "Stripe",
                    "JWT",
                    "Redis",
                    "Docker",
                  ],
                },
                {
                  title: "Portfolio Website",
                  description: "Responsive portfolio with smooth animations",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "TypeScript",
                    "Framer Motion",
                    "Next.js",
                    "Tailwind",
                    "GSAP",
                  ],
                },
                {
                  title: "Task Manager",
                  description: "Collaborative project management tool",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "React",
                    "Supabase",
                    "Prisma",
                    "PostgreSQL",
                    "Socket.io",
                    "Zustand",
                    "React Query",
                  ],
                },
                {
                  title: "Weather App",
                  description: "Real-time weather tracking application",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "JavaScript",
                    "API",
                    "CSS",
                    "Chart.js",
                    "PWA",
                    "Service Worker",
                  ],
                },
                {
                  title: "Blog Platform",
                  description: "Content management system for writers",
                  image: "/images/project/Macbook_Air_M2_Mockup_5.jpg",
                  tags: [
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "Blade",
                    "Bootstrap",
                    "Eloquent",
                    "Redis",
                    "Cloudinary",
                  ],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden grayscale hover:grayscale-0"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white text-black hover:bg-gray-100 cursor-pointer rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="bg-white text-black hover:bg-gray-100 cursor-pointer rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 pb-6">
                    <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover:text-zinc-900">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-zinc-200/70 font-medium text-zinc-900 hover:bg-zinc-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-14">
              <Button
                size={"lg"}
                className="rounded-full text-3xl py-8 px-24 font-normal"
              >
                MORE
              </Button>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="min-h-screen pt-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xl lg:text-4xl font-bold text-zinc-800 mb-4 uppercase">
                Let’s Clear Things Up
              </h2>
              <p className="text-zinc-700 text-sm lg:text-lg">
                Here are a few quick answers that might be helpful.
              </p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-t border-primary py-5"
              >
                <AccordionTrigger className="text-zinc-700 text-3xl font-[550]">
                  Do you accept freelance projects?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 pb-10">
                  Yes, I accept{" "}
                  <span className="font-extrabold text-blue-800">
                    freelance projects
                  </span>{" "}
                  depending on my availability. You can contact me through the{" "}
                  <span className="font-extrabold text-blue-800">
                    contact page
                  </span>{" "}
                  or <span className="font-extrabold text-blue-800">email</span>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-t border-primary py-5"
              >
                <AccordionTrigger className="text-zinc-700 text-3xl font-[550]">
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 pb-10">
                  I offer website design and development services, as well as
                  modern web app development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-t border-primary py-5"
              >
                <AccordionTrigger className="text-zinc-700 text-3xl font-[550]">
                  How much does it cost to build a website?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 pb-10">
                  The{" "}
                  <span className="font-extrabold text-blue-800">
                    cost depends on
                  </span>{" "}
                  the{" "}
                  <span className="font-extrabold text-blue-800">
                    complexity of the features, design requirements, deadline,
                    and the technologies used.
                  </span>{" "}
                  Feel free to reach out for a more accurate estimate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border-t border-primary py-5"
              >
                <AccordionTrigger className="text-zinc-700 text-3xl font-[550]">
                  How long does it take to complete a website?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-700 pb-10">
                  Project timelines vary depending on complexity and scope. A{" "}
                  <span className="font-extrabold text-blue-800">
                    simple website
                  </span>{" "}
                  might take{" "}
                  <span className="font-extrabold text-blue-800">
                    2-4 weeks
                  </span>
                  , while a{" "}
                  <span className="font-extrabold text-blue-800">
                    complex application{" "}
                  </span>
                  could take{" "}
                  <span className="font-extrabold text-blue-800">
                    2-3 months
                  </span>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* tech stack */}
        <div className="bg-zinc-900 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between">
            <div className="flex flex-col w-1/2">
              <p className="text-white text-5xl uppercase font-semibold">
                Let`s make sure to keep in touch.🚀
              </p>
              <div className="border border-white rounded-full w-fit px-4 py-2 mt-10 hover:bg-white/20 cursor-pointer transition-all duration-300">
                <p className="text-white text-3xl">ranggaf758@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="uppercase font-semibold text-right text-white text-5xl">
                menu
              </p>
              <div className="flex flex-col items-end mt-5 space-y-3">
                <p className="text-white text-3xl hover:underline transition-all cursor-pointer">
                  HOME
                </p>
                <div className="text-white text-3xl hover:underline transition-all cursor-pointer">
                  SKILL
                </div>
                <div className="text-white text-3xl hover:underline transition-all cursor-pointer">
                  PROJECTS
                </div>
                <div className="text-white text-3xl hover:underline transition-all cursor-pointer">
                  CONTACT
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollContext>
    </>
  );
}
