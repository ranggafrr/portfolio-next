import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineView() {
  const data = [
    {
      title: "Fullstack Developer at Assyifa Islamic Philanthropy",
      date: "Nov 2021 - Present",
      content: (
        <div>
          <p className="text-zinc-700">
            Develop and maintain internal web applications that support
            operational workflows and digital services both internally and
            externally. I`ve built several platforms, including an{" "}
            <span className="text-blue-700 font-semibold underline">
              internal management systems
            </span>
            , a{" "}
            <span className="text-blue-700 font-semibold underline">
              crowdfunding platform
            </span>{" "}
            for donation campaigns, an{" "}
            <span className="text-blue-700 font-semibold underline">
              online course platform
            </span>
            , and a{" "}
            <span className="text-blue-700 font-semibold underline">
              Point of Sales (POS) system
            </span>{" "}
            .
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
