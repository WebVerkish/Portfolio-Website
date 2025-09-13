// import React, { useState } from "react";
// import { Plus, Minus, ArrowRight } from "lucide-react";
// import { FilledOrangeSmallButton } from "../Buttons";

// const faqs = [
//   {
//     question: "How long does it take to complete a web development project?",
//     answer:
//       "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
//   },
//   {
//     question: "Can you handle large-scale mobile app development projects?",
//     answer:
//       "Yes, we have experience in building and scaling enterprise-level mobile applications that meet performance and security standards.",
//   },
//   {
//     question: "Can you integrate third-party APIs into our mobile app?",
//     answer:
//       "Absolutely. We specialize in integrating REST APIs, GraphQL, and other third-party services to extend app functionality.",
//   },
//   {
//     question: "How do you ensure cross-platform compatibility for mobile apps?",
//     answer:
//       "We use modern frameworks like React Native and Flutter, ensuring your app works smoothly across iOS and Android platforms.",
//   },
//   {
//     question: "What is your approach to user experience (UX) design?",
//     answer:
//       "We follow a user-centric design approach, conducting research, wireframing, prototyping, and usability testing for the best results.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#111] text-white py-16 px-6">
//       <div className="mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8 bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex  h-full">
//           <h2 className="text-2xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
//           <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
//             VIEW ALL <ArrowRight size={16} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left - FAQs */}
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1a1a1a] rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition"
//               >
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <p className="text-sm font-medium">{faq.question}</p>
//                   <span className="p-2 bg-[#111] rounded-full border border-gray-700">
//                     {openIndex === index ? (
//                       <Minus size={16} className="text-gray-300" />
//                     ) : (
//                       <Plus size={16} className="text-gray-300" />
//                     )}
//                   </span>
//                 </div>
//                 {openIndex === index && (
//                   <p className="mt-3 text-gray-400 text-sm">{faq.answer}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right - Form */}
//           <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
//             <h3 className="text-lg font-semibold mb-6">ASK YOUR QUESTION</h3>
//             <form className="space-y-4">
//               <label htmlFor="name" className="capitalize">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter your name"
//                 className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
//               />
//               <label htmlFor="email" className="capitalize">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
//               />
//               <label htmlFor="your_question" className="capitalize">Your Question</label>
//               <textarea
//                 placeholder="Enter Your Question Here ....."
//                 rows="4"
//                 id="your_question"
//                 className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
//               ></textarea>
//               <FilledOrangeSmallButton text="SEND YOUR MESSAGE"/>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { FilledOrangeSmallButton } from "../Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer:
      "Yes, we have experience in building and scaling enterprise-level mobile applications that meet performance and security standards.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Absolutely. We specialize in integrating REST APIs, GraphQL, and other third-party services to extend app functionality.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer:
      "We use modern frameworks like React Native and Flutter, ensuring your app works smoothly across iOS and Android platforms.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "We follow a user-centric design approach, conducting research, wireframing, prototyping, and usability testing for the best results.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqRefs = useRef([]);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }

    // Animate each FAQ card
    faqRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      }
    });

    // Animate right side form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#111] text-white py-16 px-6">
      <div className="mx-auto">
        {/* Header */}
        <div
          ref={headingRef}
          className="flex justify-between items-center mb-8 bg-[#1a1a1a] p-4 rounded-lg shadow-lg h-full"
        >
          <h2 className="text-2xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition">
            VIEW ALL <ArrowRight size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (faqRefs.current[index] = el)}
                className="bg-[#1a1a1a] rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-sm font-medium">{faq.question}</p>
                  <span className="p-2 bg-[#111] rounded-full border border-gray-700">
                    {openIndex === index ? (
                      <Minus size={16} className="text-gray-300" />
                    ) : (
                      <Plus size={16} className="text-gray-300" />
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-400 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div
            ref={formRef}
            className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800"
          >
            <h3 className="text-lg font-semibold mb-6">ASK YOUR QUESTION</h3>
            <form className="space-y-4">
              <label htmlFor="name" className="capitalize">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
              />
              <label htmlFor="email" className="capitalize">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
              />
              <label htmlFor="your_question" className="capitalize">
                Your Question
              </label>
              <textarea
                placeholder="Enter Your Question Here ....."
                rows="4"
                id="your_question"
                className="w-full p-3 rounded-lg bg-[#111] border border-gray-700 text-sm focus:outline-none focus:border-gray-500"
              ></textarea>
              <FilledOrangeSmallButton text="SEND YOUR MESSAGE" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
