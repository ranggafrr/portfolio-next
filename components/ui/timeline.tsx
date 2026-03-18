"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans px-0 md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            key={index}
            className="flex justify-start pt-5 md:pt-10 md:gap-10"
          >
            {/* Timeline Dot */}
            <div className="sticky top-40 flex flex-col items-center self-start z-10 h-fit">
              <div className="h-10 w-10 rounded-full bg-white border-2 border-zinc-300 flex items-center justify-center shadow-sm">
                <div className="h-4 w-4 rounded-full bg-zinc-800" />
              </div>
            </div>

            {/* Content */}
            <div className="pl-5 lg:pl-8 pb-8 w-full">
              {/* Date */}
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-heading">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-semibold text-zinc-800 mb-4 font-heading">
                {item.title}
              </h3>

              {/* Content */}
              <div className="text-zinc-600 leading-relaxed text-sm md:text-base">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[20px] md:left-[20px] top-0 w-[1px] bg-zinc-800 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
