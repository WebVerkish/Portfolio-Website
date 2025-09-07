import React from "react";
import { ArrowRight } from "lucide-react";
import { BlackCircleButton } from "../Buttons";

const testimonials = [
  {
    title: "NEXGEN TURNED OUR BUSINESS AROUND!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Sarah Thompson",
    role: "CEO of BlueBloom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "NEXGEN TURNED OUR BUSINESS AROUND!",
    text: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Wade Warren",
    role: "Art Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "WORKING WITH NEXGEN WAS A PLEASURE.",
    text: "Their web design team created a stunning website that perfectly captured our brand’s essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Lisa Williams",
    role: "CEO of HealthTech",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
    text: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
    name: "Jennifer Lee",
    role: "COO of Foodie Haven",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#111] text-white py-8 px-6 border border-2 border-[#1A1A1A] rounded-lg">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex  h-full">
          <h2 className="text-2xl font-bold">TESTIMONIALS</h2>
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
            <BlackCircleButton/>
            ALL TESTIMONIALS
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition flex flex-col justify-between"
            >
              {/* Quote */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>

              {/* Profile */}
              <div className="mt-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#111]"
                  />
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
                <button className="p-2 bg-[#1f1f1f] rounded-full border border-gray-700 hover:border-gray-500 transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
