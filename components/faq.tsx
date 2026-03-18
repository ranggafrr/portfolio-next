"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
export default function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 lg:px-8 py-10 lg:py-20"
    >
      <div className="text-center mb-10 lg:mb-16">
        <h2 className=" text-3xl lg:text-5xl font-semibold text-zinc-800 mb-4 font-heading">
          Let’s Clear Things Up
        </h2>
        <p className="text-zinc-700 text-base lg:text-lg font-heading">
          Here are a few quick answers that might be helpful.
        </p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="border-t border-primary py-3 lg:py-5"
        >
          <AccordionTrigger className="text-zinc-700 text-lg md:text-2xl lg:text-3xl font-semibold font-heading">
            Do you accept freelance projects?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-700 pb-10 md:text-lg font-heading">
            Yes, I accept{" "}
            <span className="font-semibold text-blue-800">
              freelance projects
            </span>{" "}
            depending on my availability. You can contact me through the{" "}
            <span className="font-semibold text-blue-800">contact page</span> or{" "}
            <span className="font-semibold text-blue-800">email</span>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-t border-primary py-3 lg:py-5"
        >
          <AccordionTrigger className="text-zinc-700 text-lg md:text-2xl lg:text-3xl font-semibold font-heading">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-700 pb-10 md:text-lg font-heading">
            I offer website design and development services, as well as modern
            web app development.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-t border-primary py-3 lg:py-5"
        >
          <AccordionTrigger className="text-zinc-700 text-lg md:text-2xl lg:text-3xl font-semibold font-heading">
            How much does it cost to build a website?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-700 pb-10 md:text-lg font-heading">
            The{" "}
            <span className="font-semibold text-blue-800">cost depends on</span>{" "}
            the{" "}
            <span className="font-semibold text-blue-800">
              complexity of the features, design requirements, deadline, and the
              technologies used.
            </span>{" "}
            Feel free to reach out for a more accurate estimate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border-t border-primary py-3 lg:py-5"
        >
          <AccordionTrigger className="text-zinc-700 text-lg md:text-2xl lg:text-3xl font-semibold font-heading">
            How long does it take to complete a website?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-700 pb-10 md:text-lg font-heading">
            Project timelines vary depending on complexity and scope. A{" "}
            <span className="font-semibold text-blue-800">simple website</span>{" "}
            might take{" "}
            <span className="font-extrabold text-blue-800">2-4 weeks</span>,
            while a{" "}
            <span className="font-extrabold text-blue-800">
              complex application{" "}
            </span>
            could take{" "}
            <span className="font-extrabold text-blue-800">2-3 months</span>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
