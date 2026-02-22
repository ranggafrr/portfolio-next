"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollContext from "@/components/scroll-context";
import TextType from "@/components/TextType";
import SplashScreen from "@/components/splash-screen";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import Noise from "@/components/Noise";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects } from "@/assets/project";
export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollContext>
        <Navbar />
        <div className="relative flex flex-col xl:flex-row justify-between lg:justify-center xl:justify-between items-center min-h-screen w-full px-5 lg:px-20 xl:px-40 overflow-hidden">
          {/* Bagian Teks Konten */}
          <div className="z-10 flex flex-col w-full min-[390px]:h-80 min-[390px]:justify-end min-[1366px]:h-auto min-[1366px]:justify-start xl:w-1/2 mt-32 lg:mt-0 lg:mb-64 xl:mb-0">
            <p className="text-2xl md:text-4xl lg:text-6xl xl:text-4xl text-zinc-800">
              Hello I&apos;m{" "}
              <span className="font-bold">Rangga Firmansyah</span>
            </p>

            <div className="inline-flex items-center gap-x-2 mt-3">
              <div className="border-b w-32 md:w-56 h-0.5 bg-zinc-800" />
              <TextType
                text={["Frontend Developer", "Freelancer", "Vibe Coder"]}
                className="text-zinc-800 w-full text-lg md:text-3xl lg:text-4xl xl:text-2xl font-medium"
              />
            </div>

            <p className="text-base md:text-xl lg:text-2xl xl:text-xl max-w-md mt-4 text-zinc-700">
              Every pixel, every line of code — designed to make the web a
              better place.
            </p>

            <Button className="bg-zinc-800 text-white w-32 lg:w-40 h-10 md:h-12 mt-8 rounded-full font-medium lg:text-lg">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Container Gambar */}
          <div className="absolute inset-0 xl:left-auto xl:right-0 xl:w-1/2 h-screen flex justify-end items-end pointer-events-none">
            <div className="relative w-full h-[60%] xl:h-[85%] flex items-end justify-end">
              {/* ^ Atur lg:h-[85%] sesuai keinginan, misalnya 70% atau 80% agar tidak terlalu tinggi ke atas */}
              <Image
                src="/images/me.svg"
                alt="rangga firmansyah"
                priority
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom grayscale-50"
              />
            </div>
          </div>
        </div>
        {/* about me stack */}
        <div className="relative bg-zinc-900 overflow-hidden h-full py-8 lg:py-14">
          <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={2}
            patternAlpha={15}
          />
          <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-5 lg:px-8 gap-x-10">
            <div className="relative w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-wide">
                WHO AM I?
              </h2>
              <div className="hidden lg:block absolute bottom-0">
                <Image
                  src={"/images/icon-code.jpg"}
                  width={5000}
                  height={5000}
                  alt="about me rangga firmansyah"
                  className="w-[400px] h-[400px]"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
              <p className="space-y-4 text-white leading-relaxed text-base lg:text-lg font-[Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif]">
                <span className="block">
                  Hello! I’m Rangga Firmansyah, a Frontend Developer with over 4
                  years of experience in building modern, responsive, and
                  user-focused web applications. I specialize in crafting clean,
                  scalable interfaces using technologies like{" "}
                  <span className="text-blue-700 border-b-3 border-blue-700">
                    React
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-700 border-b-3 border-blue-700">
                    Next.js
                  </span>
                  .
                </span>
                <span className="block">
                  My journey in web development is driven by a strong curiosity
                  and a commitment to continuous improvement. Over the years,
                  I’ve worked on various projects ranging from internal
                  dashboards to public-facing platforms, focusing on
                  performance, accessibility, and maintainable code. I’m
                  comfortable collaborating across teams and translating
                  business requirements into intuitive digital experiences.
                </span>
                <span className="block">
                  Beyond frontend development, I also have experience working
                  with backend technologies such as{" "}
                  <span className="border-b-3">Laravel</span>,{" "}
                  <span className="border-b-3">PHP</span>,{" "}
                  <span className="border-b-3">MySQL</span>, and integrating
                  APIs, which allows me to understand products from an
                  end-to-end perspective. This full-picture mindset helps me
                  build interfaces that are not only visually appealing but also
                  technically reliable.
                </span>
                <span className="block">
                  I enjoy learning new technologies, refining my skills, and
                  solving real-world problems through thoughtful design and
                  engineering. I’m always open to new challenges,
                  collaborations, and opportunities to create meaningful digital
                  products.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Project */}
        <div className="min-h-screen md:min-h-auto py-8 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="mb-8 lg:mb-16 w-full md:w-3/4">
              <h2 className="text-2xl/8 lg:text-4xl/12 font-bold text-zinc-800 mb-4">
                HERE A GLIMPSE OF SOME EXCITING PROJECTS I`VE DONE 🚀
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-5">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden grayscale hover:grayscale-0"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 p-3 rounded-t-xl"
                    />
                  </div>
                  <div className="relative px-5 pb-6 h-56">
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
                          className="text-xs bg-transparent font-medium text-zinc-800 border-zinc-300 px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-2 hover:border-b-2 border-zinc-800 pb-2"
                      >
                        <p className="text-zinc-800 ">View Project</p>{" "}
                        <div className="rounded-full border border-zinc-800 p-1">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-14">
              <Button
                size={"lg"}
                className="rounded-full text-2xl lg:text-3xl py-7 lg:py-8  px-16 lg:px-24 font-normal"
              >
                MORE
              </Button>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-20">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-zinc-800 mb-4 uppercase">
              Let’s Clear Things Up
            </h2>
            <p className="text-zinc-700 text-base lg:text-lg">
              Here are a few quick answers that might be helpful.
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="border-t border-primary py-3 lg:py-5"
            >
              <AccordionTrigger className="text-zinc-700 text-md md:text-2xl lg:text-3xl font-[550]">
                Do you accept freelance projects?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-10 md:text-lg">
                Yes, I accept{" "}
                <span className="font-extrabold text-blue-800">
                  freelance projects
                </span>{" "}
                depending on my availability. You can contact me through the{" "}
                <span className="font-extrabold text-blue-800">
                  contact page
                </span>{" "}
                or <span className="font-extrabold text-blue-800">email</span>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-t border-primary py-3 lg:py-5"
            >
              <AccordionTrigger className="text-zinc-700 text-md md:text-2xl lg:text-3xl font-[550]">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-10 md:text-lg">
                I offer website design and development services, as well as
                modern web app development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-t border-primary py-3 lg:py-5"
            >
              <AccordionTrigger className="text-zinc-700 text-md md:text-2xl lg:text-3xl font-[550]">
                How much does it cost to build a website?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-10 md:text-lg">
                The{" "}
                <span className="font-extrabold text-blue-800">
                  cost depends on
                </span>{" "}
                the{" "}
                <span className="font-extrabold text-blue-800">
                  complexity of the features, design requirements, deadline, and
                  the technologies used.
                </span>{" "}
                Feel free to reach out for a more accurate estimate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-t border-primary py-3 lg:py-5"
            >
              <AccordionTrigger className="text-zinc-700 text-md md:text-2xl lg:text-3xl font-[550]">
                How long does it take to complete a website?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-700 pb-10 md:text-lg">
                Project timelines vary depending on complexity and scope. A{" "}
                <span className="font-extrabold text-blue-800">
                  simple website
                </span>{" "}
                might take{" "}
                <span className="font-extrabold text-blue-800">2-4 weeks</span>,
                while a{" "}
                <span className="font-extrabold text-blue-800">
                  complex application{" "}
                </span>
                could take{" "}
                <span className="font-extrabold text-blue-800">2-3 months</span>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* footer */}
        <div className="bg-zinc-900 py-10 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-1/2">
              <p className="text-white text-3xl lg:text-5xl uppercase font-semibold">
                Let`s make sure to keep in touch.🚀
              </p>
              <div className="border border-white rounded-full w-fit px-4 py-2 mt-10 hover:bg-white/20 cursor-pointer transition-all duration-300">
                <p className="text-white text-xl lg:text-3xl">
                  ranggaf758@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 w-full md:w-1/2">
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
