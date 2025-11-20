import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/dashboard"
import Profile from "@/pages/profile"
import MainLayout from "@/layouts/main-layout"
import Tables from "@/pages/tables"
import SignIn from "@/pages/auth/signin"
import SignUp from "@/pages/auth/signup"
import Subscriptions from "@/pages/subscriptions"
import Notifications from "@/pages/notifications"
import Documentation from "@/pages/documentation"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "tables", element: <Tables /> },
      { path: "notifications", element: <Notifications /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "documentation", element: <Documentation /> },
    ],
  },
  {
    path: "/",
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
])

export default router
