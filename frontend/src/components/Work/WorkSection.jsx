import React from "react";
import { ArrowUpRight } from "lucide-react";
import zenith from "../../../public/images/Zenith.png"
import ecommerce from "../../../public/images/ecommerce.png"
import { BlackCircleButton, CircleOutlinedButton, FilledOrangeSmallButton } from "../Buttons";

const works = [
  {
    title: "ZENITH FITNESS APP",
    category: "Mobile App Development",
    time: "6 months",
    desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    image: zenith, // replace with your image
    technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
    team: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
  },
  {
    title: "A-AURA ECOMMERCE",
    category: "Web Design & Development",
    time: "3 months",
    desc: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    image: ecommerce, // replace with your image
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    team: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
    ],
  },
];

const WorksSection = () => {
  return (
    <section className="bg-[#111] text-white py-8 px-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex  h-full">
          <h2 className="text-2xl font-bold ">OUR WORKS</h2>
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
            <BlackCircleButton/>
            ALL WORKS 
          </button>
        </div>

        {/* Work Cards */}
        <div className="flex flex-col gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-gray-700 transition overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side - Info */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">{work.title}</h3>
                      <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition">
                        <BlackCircleButton text="Detailes"/>
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-2 mr-4 bg-[#1f1f1f] inline-block text-gray-300 text-xs px-3 py-1 rounded-lg border border-gray-700">
                      <span className="font-medium">Category:</span> {work.category}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 bg-[#1f1f1f] inline-block text-gray-300 text-xs px-3 py-1 rounded-lg border border-gray-700 ">
                      <span className="font-medium">Time Taken:</span> {work.time}
                    </p>
                    <p className="text-gray-400 text-sm">{work.desc}</p>
                  </div>
                </div>

                {/* Right Side - Image + Tech + Team */}
                <div className="bg-[#111] p-6 flex flex-col gap-4">
                  {/* Image */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#1f1f1f] text-gray-300 text-xs px-3 py-1 rounded-lg border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team Members */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">TEAM MEMBERS</h4>
                    <div className="flex -space-x-3">
                      {work.team.map((member, i) => (
                        <img
                          key={i}
                          src={member}
                          alt="team"
                          className="w-10 h-10 rounded-full border-2 border-[#111] object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                    <FilledOrangeSmallButton text="BOOK A CALL"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
