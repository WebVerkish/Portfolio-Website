import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

export default function MainLayout({ children }) {
  return (
    <div
      className="bg-[#111] text-slate-50 mx-auto 
                px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 
                py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 
                max-w-full lg:max-w-[1920px]"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
