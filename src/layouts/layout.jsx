import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar.jsx";
import Footer from "@/components/footer.jsx";

export default function MainLayout() {
  return (
    <div className='flex py-6 px-8 gap-8 noise'>
      <Sidebar />
      <div className='flex-1'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
