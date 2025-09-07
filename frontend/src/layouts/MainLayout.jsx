import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-[#111] text-slate-50 max-w-[1920px] mx-auto p-[50px]">
      <Navbar />
      <Outlet />
      <footer style={{ marginTop: 40 }}>© 2025 My App</footer>
    </div>
  );
}
