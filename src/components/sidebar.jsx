import { Button } from "@/components/ui/button.jsx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bell,
  BookOpen,
  CreditCard,
  LayoutDashboard,
  LogIn,
  Table,
  User2,
  UserPlus,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Separator } from "@/components/ui/separator.jsx";

const links = {
  main: [
    {
      id: uuidv4(),
      label: "Dashboard",
      icon: <LayoutDashboard />,
      to: "/dashboard",
    },
    { id: uuidv4(), label: "Profile", icon: <User2 />, to: "/profile" },
    { id: uuidv4(), label: "Tables", icon: <Table />, to: "/tables" },
    {
      id: uuidv4(),
      label: "Notifications",
      icon: <Bell />,
      to: "/notifications",
    },
    {
      id: uuidv4(),
      label: "Subscriptions",
      icon: <CreditCard />,
      to: "/subscriptions",
    },
  ],
  login: [
    { id: uuidv4(), label: "Sign In", icon: <LogIn />, to: "/signin" },
    { id: uuidv4(), label: "Sign Up", icon: <UserPlus />, to: "/signup" },
  ],
  other: [
    {
      id: uuidv4(),
      label: "Documentation",
      icon: <BookOpen />,
      to: "/documentation",
    },
  ],
};

export default function Sidebar() {
  return (
    <aside className='mt-5'>
      <h2 className='text-lg geist-600 mb-4'>Material Shadcn</h2>
      <ul>
        {links.main.map((link) => (
          <li key={link.id} className=' mb-1'>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "default" : "active",
                    size: "default",
                  }),
                  "w-[200px] justify-start flex items-center gap-2"
                )
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Separator orientation='horizontal' className={"my-3"} />

      <h2 className='text-xs font-semibold text-gray-500 uppercase ml-4 geist-600 mb-2'>
        Auth pages
      </h2>
      <ul>
        {links.login.map((link) => (
          <li key={link.id} className=' mb-1'>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "default" : "active",
                    size: "default",
                  }),
                  "w-[200px] justify-start flex items-center gap-2"
                )
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Separator orientation='horizontal' className={"my-3"} />
      <ul>
        {links.other.map((link) => (
          <li key={link.id} className=' mb-1'>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                cn(
                  buttonVariants({
                    variant: isActive ? "default" : "active",
                    size: "default",
                  }),
                  "w-[200px] justify-start flex items-center gap-2"
                )
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
