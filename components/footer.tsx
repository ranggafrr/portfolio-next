import Link from "next/link";
export default function Footer() {
  return (
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
            <Link href={"/"}>
              <p className="font-heading text-white text-3xl hover:underline transition-all cursor-pointer">
                HOME
              </p>
            </Link>
            <Link href={"/about"}>
              <div className="font-heading font-light text-white text-3xl hover:underline transition-all cursor-pointer">
                ABOUT
              </div>
            </Link>
            <Link href={"/projects"}>
              <div className="font-heading font-light text-white text-3xl hover:underline transition-all cursor-pointer">
                PROJECTS
              </div>
            </Link>
            <Link href={"/contact"}>
              <div className="font-heading font-light text-white text-3xl hover:underline transition-all cursor-pointer">
                CONTACT
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
