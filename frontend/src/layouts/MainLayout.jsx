import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#111] text-slate-50 max-w-[1920px] mx-auto p-[50px]">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
