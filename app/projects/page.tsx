"use client";
import { Separator } from "@/components/ui/separator";
import ScrollContext from "@/components/scroll-context";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { projects } from "@/assets/project";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <ScrollContext>
      <Navbar />
      <div className="relative flex items-center justify-center h-96">
        <Link href={"/"}>
          <div className="absolute top-0 left-10 bg-transparent border border-zinc-800 rounded-full p-5">
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
        <p className="font-heading font-semibold text-zinc-800 text-8xl">
          Projects
        </p>
      </div>
      <Separator className="w-full bg-zinc-500 py-[1px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-32 my-20">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group bg-white/60 border-zinc-200 hover:border-zinc-400 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden grayscale hover:grayscale-0"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 p-3 rounded-t-xl"
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
    </ScrollContext>
  );
}
