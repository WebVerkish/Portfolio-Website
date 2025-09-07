import React from "react";
import { ArrowUpRight } from "lucide-react"; // icon package
import { BlackCircleButton } from "../Buttons";

const features = [
  {
    title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
    description:
      "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
  },
  {
    title: "PROVEN TRACK RECORD OF SUCCESS",
    description:
      "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
  },
  {
    title: "DEDICATED TEAM OF PROFESSIONALS",
    description:
      "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
  },
];

export default function ReasonsSection() {
  return (
    <section className="  text-white p-4 border border-2 border-[#1A1A1A] rounded-lg">
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full text-2xl md:text-3xl font-bold  mb-10">
          REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-md flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>

              {/* Learn More Button */}
              <BlackCircleButton text="Learn More"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
