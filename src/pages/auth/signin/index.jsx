import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox.jsx"
import { Separator } from "@/components/ui/separator.jsx"

export default function SignIn({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-screen w-full px-4",
        className
      )}
      {...props}
    >
      <Card className='w-full max-w-md'>
        <CardHeader className='items-center'>
          <CardTitle className='text-3xl font-bold'>Sign In</CardTitle>
          <CardDescription>
            Welcome back! Please sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
                  className='bg-[#F5F5F4] border border-[#E7E5E4]'
                  id='email'
                  type='email'
                  placeholder='your@mail.com'
                  required
                />
              </Field>
              <Field>
                <div className='flex items-center'>
                  <FieldLabel htmlFor='password'>Password</FieldLabel>
                </div>
                <Input
                  className='bg-[#F5F5F4] border border-[#E7E5E4]'
                  id='password'
                  type='password'
                  placeholder='********'
                  required
                />
              </Field>
              <Field className='justify-between' orientation='horizontal'>
                <span className='flex text-sm text-gray-500 items-center font-roboto'>
                  <Checkbox className='mr-2' />
                  Remember Me
                </span>
                <Button variant='outline'>Forgot Password?</Button>
              </Field>
              <Field>
                <Button
                  className='font-normal'
                  variant='gradient'
                  type='submit'
                >
                  Sign In
                </Button>
                <span className='flex justify-center items-center gap-3'>
                  <Separator className='w-34!' />
                  <p className='text-sm text-gray-500 whitespace-nowrap'>
                    or continue with
                  </p>
                  <Separator className='w-34!' />
                </span>
                <span className='grid grid-cols-2 gap-4'>
                  <Button
                    className='font-roboto font-normal text-gray-700'
                    variant='outline'
                    type='button'
                  >
                    <img src='/google.svg' alt='GitHub' />
                    Google
                  </Button>
                  <Button
                    className='font-roboto font-normal text-gray-700'
                    variant='outline'
                    type='button'
                  >
                    <img className='w-4' src='/github.svg' alt='GitHub' />
                    GitHub
                  </Button>
                </span>
                <FieldDescription className='text-center'>
                  Don&apos;t have an account?{" "}
                  <Link className='text-gray-900' to={"/signup"}>
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
