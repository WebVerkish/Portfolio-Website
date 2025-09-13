// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { BlackCircleButton } from "./Buttons";

// const CTASection = () => {
//   return (
//     <section className="bg-[#111] text-white py-10 px-6">
//       <div className="mx-auto">
//         {/* CTA Banner */}
//         <div className="bg-[#CE7D63] rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold mb-2">
//               READY TO TRANSFORM YOUR DIGITAL PRESENCE?
//             </h2>
//             <p className="text-sm text-black/80 max-w-xl">
//               Take the first step towards digital success with NexGen by your side.
//               Our team of experts is eager to craft tailored solutions that drive
//               growth for your business.
//             </p>
//           </div>
//           <a href="#" className="mt-6 md:mt-0 flex items-center gap-2 bg-black text-white text-sm pl-4 rounded-lg hover:bg-gray-900 transition">
//             GET IN TOUCH <BlackCircleButton/>
//           </a>
//         </div>

//         {/* Marquee Strip */}
//         <div className="mt-6 bg-[#1a1a1a] border-t border-gray-800 overflow-hidden whitespace-nowrap">
//           <div className="animate-marquee inline-block py-3">
//             {Array(20)
//               .fill("FOLLOW US ON SOCIAL MEDIA")
//               .map((text, index) => (
//                 <span key={index} className="mx-6 text-sm text-gray-300">
//                   {text} <span className="text-[#CE7D63]">•</span>
//                 </span>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


import React, { useEffect, useRef } from "react";
import { BlackCircleButton } from "./Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const ctaRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate CTA box
      gsap.fromTo(
        ".cta-box",
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );

      // Animate heading and text
      gsap.fromTo(
        ".cta-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Animate button
      gsap.fromTo(
        ".cta-btn",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Smooth infinite marquee
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30, // speed adjust karne ke liye
        ease: "linear",
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="bg-[#111] text-white py-10 px-6">
      <div className="mx-auto">
        {/* CTA Banner */}
        <div className="cta-box bg-[#CE7D63] rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="cta-text text-2xl font-bold mb-2">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h2>
            <p className="cta-text text-sm text-black/80 max-w-xl">
              Take the first step towards digital success with NexGen by your side.
              Our team of experts is eager to craft tailored solutions that drive
              growth for your business.
            </p>
          </div>
          <a
            href="#"
            className="cta-btn mt-6 md:mt-0 flex items-center gap-2 bg-black text-white text-sm pl-4 rounded-lg hover:bg-gray-900 transition"
          >
            GET IN TOUCH <BlackCircleButton />
          </a>
        </div>

        {/* Smooth Marquee Strip */}
        <div className="mt-6 bg-[#1a1a1a] border-t border-gray-800 overflow-hidden whitespace-nowrap relative">
          <div
            ref={marqueeRef}
            className="flex w-max py-3"
          >
            {/* Duplicate strips for smooth loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {Array(20)
                  .fill("FOLLOW US ON SOCIAL MEDIA")
                  .map((text, index) => (
                    <span key={index} className="mx-6 text-sm text-gray-300">
                      {text} <span className="text-[#CE7D63] px-4">•</span>
                    </span>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

