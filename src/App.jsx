import profile from "./assets/profile.png";
import cv from "./assets/sidowwwscv.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/40 blur-[100px] sm:h-[700px] sm:w-[700px] md:h-[900px] md:w-[900px]"></div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/30 blur-[80px] sm:h-[350px] sm:w-[350px]"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-10 md:pt-12">
          <div className="text-center">
            <h2
              data-aos="zoom-in"
              className="italic text-3xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Hello i am Sidowwws
            </h2>
            <h1
              data-aos="fade-up"
              className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text font-serif text-5xl italic text-transparent sm:text-6xl md:text-8xl lg:text-9xl"
            >
              Fullstack dev
            </h1>
          </div>

          <div className="relative mt-2 flex w-full flex-1 items-end justify-center sm:mt-4">
            <span
              data-aos="fade-right"
              className="absolute left-[1%] top-[26%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:left-[8%] sm:top-[32%] sm:px-4 sm:py-2 sm:text-sm md:left-[14%] md:top-[36%]"
            >
              UI/UX Designer
            </span>

            <span
              data-aos="fade-left"
              className="absolute right-[1%] top-[38%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:right-[6%] sm:top-[44%] sm:px-4 sm:py-2 sm:text-sm md:right-[12%] md:top-[46%]"
            >
              Problem Solving
            </span>

            <span
              data-aos="fade-right"
              className="absolute left-[2%] top-[66%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:left-[10%] sm:px-4 sm:py-2 sm:text-sm md:left-[16%]"
            >
              Development
            </span>

            <span
              data-aos="fade-left"
              className="absolute right-[2%] top-[62%] z-20 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:right-[8%] sm:top-[62%] sm:px-4 sm:py-2 sm:text-sm md:right-[14%]"
            >
              Team Work
            </span>

            <div className="relative h-[60vh] w-full max-w-md overflow-hidden sm:max-w-lg md:max-w-2xl">
              <img
                data-aos="zoom-in"
                src={profile}
                alt="Nahid - Product Designer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="relative z-20 mt-6 flex w-full justify-center px-2 sm:mt-8 sm:px-0">
            <div className="flex w-full max-w-md flex-row">
              <a
                href="https://wa.me/628989209979" target="_blank"
                className="flex flex-1 items-center justify-center bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-xs sm:text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:opacity-90"
              >
                Contact me
              </a>

              <a
                href={cv}
                className="flex flex-1 items-center justify-center bg-white px-3 py-3 text-xs sm:text-base font-semibold text-black transition hover:bg-gray-200"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
