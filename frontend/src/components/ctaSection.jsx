import React from "react";
import { ArrowRight } from "lucide-react";
import { BlackCircleButton } from "./Buttons";

const CTASection = () => {
  return (
    <section className="bg-[#111] text-white py-10 px-6">
      <div className="mx-auto">
        {/* CTA Banner */}
        <div className="bg-[#CE7D63] rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h2>
            <p className="text-sm text-black/80 max-w-xl">
              Take the first step towards digital success with NexGen by your side.
              Our team of experts is eager to craft tailored solutions that drive
              growth for your business.
            </p>
          </div>
          <a href="#" className="mt-6 md:mt-0 flex items-center gap-2 bg-black text-white text-sm pl-4 rounded-lg hover:bg-gray-900 transition">
            GET IN TOUCH <BlackCircleButton/>
          </a>
        </div>

        {/* Marquee Strip */}
        <div className="mt-6 bg-[#1a1a1a] border-t border-gray-800 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block py-3">
            {Array(20)
              .fill("FOLLOW US ON SOCIAL MEDIA")
              .map((text, index) => (
                <span key={index} className="mx-6 text-sm text-gray-300">
                  {text} <span className="text-[#CE7D63]">•</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
