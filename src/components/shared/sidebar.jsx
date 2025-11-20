import { Button } from "@/components/ui/button.jsx"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Bell,
  BookOpen,
  CreditCard,
  LayoutDashboard,
  LogIn,
  Table,
  User2,
  UserPlus,
} from "lucide-react"
import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Separator } from "@/components/ui/separator.jsx"

const links = {
  main: [
    {
      id: uuidv4(),
      label: "Dashboard",
      icon: <LayoutDashboard />,
      href: "/",
    },
    { id: uuidv4(), label: "Profile", icon: <User2 />, href: "/profile" },
    { id: uuidv4(), label: "Tables", icon: <Table />, href: "/tables" },
    {
      id: uuidv4(),
      label: "Notifications",
      icon: <Bell />,
      href: "/notifications",
    },
    {
      id: uuidv4(),
      label: "Subscriptions",
      icon: <CreditCard />,
      href: "/subscriptions",
    },
  ],
  login: [
    { id: uuidv4(), label: "Sign In", icon: <LogIn />, href: "/signin" },
    { id: uuidv4(), label: "Sign Up", icon: <UserPlus />, href: "/signup" },
  ],
  other: [
    {
      id: uuidv4(),
      label: "Documentation",
      icon: <BookOpen />,
      href: "/documentation",
    },
  ],
}

export default function Sidebar() {
  const location = useLocation()

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(href)
  }
  return (
    <aside className='mt-5'>
      <h2 className='text-lg mb-4'>Material Shadcn</h2>
      <ul className='mt-4 [&>li]:mt-1 w-52'>
        {links.main.map((link) => (
          <li className='' key={link.id}>
            <Link to={link.href}>
              <Button
                variant={`${isActive(link.href) ? "gradientNav" : "ghost"}`}
                className='py-3 pl-6 px-[18px] w-full justify-start'
              >
                <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                <span className='text-sm text-start'>{link.label}</span>
              </Button>
            </Link>
          </li>
        ))}

        <Separator className='my-3' />
        {links.login.map((link) => (
          <li className='' key={link.id}>
            <Link to={link.href}>
              <Button
                variant={`${isActive(link.href) ? "gradientNav" : "ghost"}`}
                className='py-3 pl-6 px-[18px] w-full justify-start'
              >
                <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                <span className='text-sm text-start'>{link.label}</span>
              </Button>
            </Link>
          </li>
        ))}
        <Separator className='my-3' />
        {links.other.map((link) => (
          <li key={link.id}>
            <Link to={link.href}>
              <Button
                variant={`${isActive(link.href) ? "gradientNav" : "ghost"}`}
                className='py-3 pl-6 px-[18px] w-full justify-start'
              >
                <span className='[&>svg]:w-4 [&>svg]:h-4'> {link.icon}</span>
                <span className='text-sm text-start'>{link.label}</span>
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
