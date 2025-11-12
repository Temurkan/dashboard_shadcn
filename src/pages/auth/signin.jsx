import { LoginForm } from "@/components/login-form.jsx";
import React from "react";

export default function SignIn() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginForm className='w-[453px]' />
    </div>
  );
}
