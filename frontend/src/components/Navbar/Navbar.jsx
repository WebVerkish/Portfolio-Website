// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-[#1a1a1a] px-6 py-4 m-auto rounded-xl uppercase">
//       {/* Logo */}
//       <div className="flex items-center">
//         <span className="text-2xl font-bold text-orange-200">
//           <img
//             src="/logo.png"
//             alt="verkish-webworks logo"
//             width={125}
//             height={29}
//             className="w-[125px] h-[60px] object-contain bg-white rounded-lg p-1"
//           />
//         </span>
//       </div>

//       {/* Navigation */}
//       <div className="flex items-center gap-4">
//         <ul className="flex gap-4">
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               Careers
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition"
//             >
//               Blog
//             </a>
//           </li>
//         </ul>

//         {/* Contact Button */}
//         <button className="uppercase font-medium bg-orange-500 text-black px-6 py-3 rounded-md hover:bg-black hover:text-[#E87C56] transition">
//           Contact Us
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navbar container
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Animate nav links
      gsap.fromTo(
        ".nav-link",
        { y: -15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.3,
        }
      );

      // Animate Contact button
      gsap.fromTo(
        ".contact-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out", delay: 1 }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center bg-[#1a1a1a] px-6 py-4 m-auto rounded-xl uppercase"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="verkish-webworks logo"
          width={125}
          height={29}
          className="w-[125px] h-[60px] object-contain bg-white rounded-lg p-1"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          {["Home", "Services", "Projects", "About", "Careers", "Blog"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="nav-link px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition block"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Contact Button */}
        <button className="contact-btn uppercase font-medium bg-orange-500 text-black px-6 py-3 rounded-md hover:bg-black hover:text-[#E87C56] transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
