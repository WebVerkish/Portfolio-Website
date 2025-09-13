// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import rulerImage from "../../../public/images/ruler-cross-pen.png"
// import smartphone from "../../../public/images/Smartphone 2.png"
// import code from "../../../public/images/Code Circle.png"
// import Widget from "../../../public/images/Widget 6.png"
// import { BlackCircleButton } from "../Buttons";


// const services = [
//   {
//     title: "WEB DESIGN",
//     desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
//     price: "STARTS FROM $1,500",
//     icon: rulerImage,
//   },
//   {
//     title: "MOBILE APP DEVELOPMENT",
//     desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
//     price: "STARTS FROM $2,500",
//     icon: smartphone,
//   },
//   {
//     title: "WEB DEVELOPMENT",
//     desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
//     price: "STARTS FROM $1,800",
//     icon: code,
//   },
//   {
//     title: "DIGITAL MARKETING",
//     desc: "In the digital age, marketing is a critical aspect of your business’s success. Our Digital Marketing service employs data-driven strategies to enhance your brand’s visibility.",
//     price: "STARTS FROM $1,200",
//     icon: Widget,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="bg-[#111] text-white p-4 border border-2 border-[#1A1A1A] rounded-lg mt-16">
//       <div className="mx-auto">
//         <h2 className="text-2xl font-bold mb-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">OUR SERVICES</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl p-4 border border-2 rounded-lg border-gray-800" >
//                     <img src={service.icon} alt={service.title} />
//                   </span>
//                   <h3 className="text-lg font-semibold">{service.title}</h3>
//                 </div>
//                 <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition">
//                   <BlackCircleButton text="BOOK A CALL"/> 
//                 </button>
//               </div>
//               <p className="text-gray-400 text-sm mb-8 mt-8">{service.desc}</p>
//               <p className="font-medium mb-8">{service.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rulerImage from "../../../public/images/ruler-cross-pen.png";
import smartphone from "../../../public/images/Smartphone 2.png";
import code from "../../../public/images/Code Circle.png";
import Widget from "../../../public/images/Widget 6.png";
import { BlackCircleButton } from "../Buttons";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "WEB DESIGN",
    desc: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
    price: "STARTS FROM $1,500",
    icon: rulerImage,
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
    price: "STARTS FROM $2,500",
    icon: smartphone,
  },
  {
    title: "WEB DEVELOPMENT",
    desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    price: "STARTS FROM $1,800",
    icon: code,
  },
  {
    title: "DIGITAL MARKETING",
    desc: "In the digital age, marketing is a critical aspect of your business’s success. Our Digital Marketing service employs data-driven strategies to enhance your brand’s visibility.",
    price: "STARTS FROM $1,200",
    icon: Widget,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".services-heading", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 80%",
        },
      });

      // Cards animation with scrub
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: true, // scrub effect (progress with scroll)
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111] text-white p-4 border border-2 border-[#1A1A1A] rounded-lg mt-16"
    >
      <div className="mx-auto">
        <h2 className="services-heading text-2xl font-bold mb-8 bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-4 border border-2 rounded-lg border-gray-800">
                    <img src={service.icon} alt={service.title} />
                  </span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <BlackCircleButton text="BOOK A CALL" />
              </div>
              <p className="text-gray-400 text-sm mb-8 mt-8">{service.desc}</p>
              <p className="font-medium mb-8">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
