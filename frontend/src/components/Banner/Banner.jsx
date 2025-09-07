import React from "react";
import { ArrowRight } from "lucide-react";
import { CircleArrowIcon } from "../Icons";
import { BlackCircleButton, CircleOutlinedButton } from "../buttons";

export default function Banner() {
  return (
    <>
      <section className="bg-[#111] text-white py-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left Content */}
          <div className="md:col-span-2 bg-[#1a1a1a] p-8 rounded-lg shadow-lg min-h-12/12">
            <div className="flex align-bottom">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                DIGITAL SOLUTIONS <br />
                <span className="text-white">THAT DRIVE SUCCESS</span>
              </h1>
              {/* <button className="h-min flex items-center gap-2 bg-transparent border border-orange-400 text-[#CE7D63] px-4 py-2 rounded-full hover:bg-orange-400 hover:text-black transition">
                START A PROJECT <ArrowRight size={18} />
              </button> */}
              <CircleOutlinedButton />
            </div>

            <p className="text-gray-400 mt-16 text-sm mb-20 max-w-[70%]">
              At NexGen, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>

            {/* Services */}
            <div className="overflow-hidden relative w-full bg-transparent mt-6">
              <div className="flex bg-[#111] align-items: center; align-middle gap-4 animate-marquee text-sm tracking-wider text-gray-300 whitespace-nowrap">
                <span className="p-4 rounded-lg shadow-lg">MARKETING</span>
                <div className="text-shadow-orange-200">•</div>
                <span className="p-4 rounded-lg shadow-lg">WEBSITE DESIGN</span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">BRANDING</span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">
                  WEBSITE DEVELOPMENT
                </span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">
                  MOBILE APP DEVELOPMENT
                </span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">DIGITAL</span>
                <div className="text-[#CE7D63]">•</div>
                {/* Repeat for smooth loop */}
                <span className="p-4 rounded-lg shadow-lg">MARKETING</span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">WEBSITE DESIGN</span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">BRANDING</span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">
                  WEBSITE DEVELOPMENT
                </span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">
                  MOBILE APP DEVELOPMENT
                </span>
                <div className="text-[#CE7D63]">•</div>
                <span className="p-4 rounded-lg shadow-lg">DIGITAL</span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          {/* <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <img
              src="/banner.png"
              alt="Project Screenshot"
              className="rounded-lg mb-4 w-100"
            />
            <button className="w-10 h-10 flex items-center justify-center bg-orange-400 text-black rounded-full hover:bg-orange-500 transition">
              <ArrowRight
                size={20}
                className="w-10 h-10 flex items-center justify-center bg-orange-400 text-black rounded-full hover:bg-orange-500 transition"
              />
            </button>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">ESTATEIN REAL ESTATE</h3>
                <p className="text-sm text-gray-400">Web Development.</p>
              </div>
            </div>
          </div> */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
            {/* Image wrapper */}
            <div className="relative">
              <img
                src="/banner.png"
                alt="Project Screenshot"
                className="rounded-lg w-full h-[300px] object-cover"
              />
              {/* Overlay Button */}
              <button className="-rotate-20 cursor-pointer absolute -top-7 -right-1 w-30 h-30 flex items-center justify-center bg-orange-400 text-black rounded-full shadow-lg hover:bg-orange-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="134"
                  viewBox="0 0 118 134"
                  fill="none"
                >
                  <rect
                    x="30"
                    y="16"
                    width="88"
                    height="88"
                    rx="44"
                    fill="#CE7D63"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64.625 39.375L92.75 39.375C93.2473 39.375 93.7242 39.5725 94.0758 39.9242C94.4275 40.2758 94.625 40.7527 94.625 41.25V69.375C94.625 70.4105 93.7855 71.25 92.75 71.25C91.7145 71.25 90.875 70.4105 90.875 69.375V45.7767L56.5758 80.0758C55.8436 80.8081 54.6564 80.8081 53.9242 80.0758C53.1919 79.3436 53.1919 78.1564 53.9242 77.4242L88.2233 43.125L64.625 43.125C63.5895 43.125 62.75 42.2855 62.75 41.25C62.75 40.2145 63.5895 39.375 64.625 39.375Z"
                    fill="#0F0F0F"
                  />
                  <path
                    d="M106.767 126.65C90.1795 134.62 71.2294 136.169 53.5681 130.999C35.9067 125.828 20.784 114.304 11.1141 98.6469C1.44421 82.9896 -2.0885 64.3073 1.19675 46.2003C4.48199 28.0932 14.3527 11.8428 28.9067 0.58055L30.9405 3.20877C17.0357 13.9686 7.60528 29.4942 4.46658 46.7935C1.32788 64.0929 4.70301 81.9418 13.9415 96.9006C23.1801 111.86 37.6282 122.87 54.5018 127.81C71.3753 132.749 89.4801 131.269 105.327 123.655L106.767 126.65Z"
                    fill="#CE7D63"
                  />
                </svg>
              </button>
            </div>

            {/* Text Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">ESTATEIN REAL ESTATE</h3>
              <p className="text-sm text-gray-400">Web Development.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10 border border-2 border-[#1A1A1A] p-4 rounded-lg">
          <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
            <p className="text-[#CE7D63] text-6xl font-bold">200+</p>
            <p className="text-sm text-gray-400">CLIENTS</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
            <p className="text-[#CE7D63] text-6xl font-bold">280+</p>
            <p className="text-sm text-gray-400">PROJECTS</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
            <p className="text-[#CE7D63] text-6xl font-bold">100%</p>
            <p className="text-sm text-gray-400">HAPPY CLIENTS</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
            <p className="text-[#CE7D63] text-6xl font-bold">420K</p>
            <p className="text-sm text-gray-400">FOLLOWER</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg text-center">
            <p className="text-[#CE7D63] text-6xl font-bold">10+</p>
            <p className="text-sm text-gray-400">Years Of Experience</p>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg text-center flex flex-col justify-center">
            <span className="flex items-center justify-center gap-2">
              <BlackCircleButton />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
