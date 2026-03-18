"use client";
import ScrollContext from "@/components/scroll-context";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowUpRight } from "lucide-react";
import Footer from "@/components/footer";
import SplashScreen from "@/components/splash-screen";
export default function Contact() {
  return (
    <>
    <SplashScreen title="CONTACT"/>
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
          Contact
        </motion.p>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="h-[1.5px] bg-zinc-500 overflow-hidden"
      />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 flex justify-between relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading font-semibold text-4xl lg:text-5xl text-zinc-800 mb-6">
              Let`s Work Together
            </h2>
            <p className="text-zinc-600 text-base mb-8 leading-relaxed">
              I`m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:ranggaf758@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-2xl border border-zinc-200 hover:border-zinc-800 hover:bg-zinc-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-zinc-800 font-medium group-hover:text-zinc-900">
                    ranggaf758@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 ml-auto group-hover:text-zinc-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:ranggaf758@gmail.com"
                className="group flex items-center gap-5 p-5 rounded-2xl border border-zinc-200 hover:border-zinc-800 hover:bg-zinc-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-zinc-800 font-medium">
                    Bandung, Indonesia
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 ml-auto group-hover:text-zinc-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-zinc-800 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ranggafrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 hover:bg-zinc-800 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rangga-firmansyah-8bb941215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 hover:bg-blue-600 hover:text-white p-3 rounded-lg transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white border-zinc-200 shadow-lg">
              <div className="p-8">
                <h3 className="font-heading font-semibold text-2xl text-zinc-800 mb-6">
                  Send Me a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-zinc-800 hover:bg-zinc-900 text-white font-semibold py-6 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
        className="h-[1px] bg-zinc-300"
      />

      <Footer />
    </ScrollContext>
    </>
  );
}
