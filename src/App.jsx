import Footer from "@/components/footer.jsx";
import Sidebar from "@/components/sidebar.jsx";
import MainLayout from "@/layouts/layout.jsx";
import SignIn from "@/pages/auth/signin.jsx";
import SignUp from "@/pages/auth/signup.jsx";
import Dashboard from "@/pages/dashboard.jsx";
import Documentation from "@/pages/documentation.jsx";
import Notifications from "@/pages/notifications.jsx";
import Profile from "@/pages/profile.jsx";
import Subscriptions from "@/pages/subscriptions.jsx";
import Tables from "@/pages/tables.jsx";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/documentation' element={<Documentation />} />
      </Route>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}
