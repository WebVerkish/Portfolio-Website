

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate navbar container
//       gsap.fromTo(
//         navRef.current,
//         { y: -60, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//       );

//       // Animate nav links
//       gsap.fromTo(
//         ".nav-link",
//         { y: -15, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           ease: "power2.out",
//           stagger: 0.12,
//           delay: 0.3,
//         }
//       );

//       // Animate Contact button
//       gsap.fromTo(
//         ".contact-btn",
//         { scale: 0.8, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out", delay: 1 }
//       );
//     }, navRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="flex justify-between items-center bg-[#1a1a1a] px-6 py-4 m-auto rounded-xl uppercase"
//     >
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src="/logo.png"
//           alt="verkish-webworks logo"
//           width={125}
//           height={29}
//           className="w-[125px] h-[60px] object-contain bg-white rounded-lg p-1"
//         />
//       </div>

//       {/* Navigation */}
//       <div className="flex items-center gap-4">
//         <ul className="flex gap-4">
//           {["Home", "Services", "Projects", "About","Contact"].map((item, idx) => {
//             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
//             return (
//               <li key={idx}>
//                 <a
//                   href={path}
//                   className="nav-link px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition block"
//                 >
//                   {item}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>

        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar animation
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Desktop nav links
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
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";

      // Sidebar slide-in from -50px
      gsap.fromTo(
        menuRef.current,
        { x: "-50px" },
        { x: "0px", duration: 0.6, ease: "power3.out" }
      );

      // Remove main content left padding
      if (mainRef.current) {
        gsap.to(mainRef.current, { paddingLeft: 0, duration: 0.3, ease: "power2.out" });
      }
    } else {
      document.body.style.overflow = "auto";

      // Restore main content left padding
      if (mainRef.current) {
        gsap.to(mainRef.current, { paddingLeft: "24px", duration: 0.3, ease: "power2.out" });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="flex justify-between items-center bg-[#1a1a1a] px-6 py-4 m-auto rounded-xl uppercase relative z-50"
      >
        {/* Mobile Hamburger + Logo */}
        <div className="flex items-center w-full md:hidden justify-between relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white z-[60]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="absolute right-0 -translate-x-0">
            <img
              src="/logo.png"
              alt="logo"
              width={125}
              height={29}
              className="w-[120px] h-[55px] object-contain bg-white rounded-lg p-1"
            />
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            width={125}
            height={29}
            className="w-[125px] h-[60px] object-contain bg-white rounded-lg p-1"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item, idx) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <li key={idx}>
                    <a
                      href={path}
                      className="nav-link px-6 py-3 rounded-md bg-[#0d0d0d] text-[16px] font-bold text-[#81807E] hover:text-[#E87C56] transition block"
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 left-[-50px] h-screen w-1/2 min-w-[250px] bg-[#111111] shadow-xl z-[55] flex flex-col"
          >
            <ul className="flex flex-col items-start gap-6 py-16 px-6 h-full overflow-y-auto">
              {["Home", "Services", "Projects", "About", "Contact"].map(
                (item, idx) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <li key={idx} className="w-full">
                      <a
                        href={path}
                        className="nav-link w-full px-6 py-3 rounded-md bg-[#0d0d0d] text-[18px] font-bold text-[#81807E] hover:text-[#E87C56] transition block"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        )}

        {/* Dark Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0  bg-opacity-70 z-[50]"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>

      {/* Main content */}
      <div ref={mainRef} className="px-6 transition-all duration-300">
        {/* Aapka page content */}
      </div>
    </>
  );
};

export default Navbar;
