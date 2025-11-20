import { PopupButton } from "@/components/popupbutton.jsx"
import { PopupInfo } from "@/components/popupinfo.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Separator } from "@/components/ui/separator.jsx"
import { Switch } from "@/components/ui/switch.jsx"

import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Settings,
  Smartphone,
  SquarePen,
  Twitter,
} from "lucide-react"

export default function Profile() {
  return (
    <div className='p-6 w-full'>
      <div className='bg-white w-full p-6 rounded-2xl '>
        <div>
          <h2 className='text-xl'>Profile</h2>
          <p className='text-sm text-gray-600'>
            Manage your account settings and personal information
          </p>
        </div>
        <Separator className='mt-4 mb-6' />
        <div className='flex justify-between items-center bg-[#1C1917] rounded-lg text-white p-8'>
          <div className='flex gap-4'>
            <img
              className='border-2 rounded-full border-white/20'
              src='/avatars/davis.png'
              alt=''
            />
            <div>
              <h3 className='text-2xl'>Richard Davis</h3>
              <p>CEO / Co-Founder</p>
            </div>
          </div>
          <div className='flex gap-3 max-lg:hidden font-roboto'>
            <Button
              className='text-sm flex items-center bg-white/10 cursor-pointer font-normal'
              variant='ghost'
            >
              <Smartphone />
              App
            </Button>
            <Button
              className='text-sm flex items-center bg-white/10 cursor-pointer'
              variant='ghost'
            >
              <MessageCircleMore />
              Message
            </Button>
            <Button
              className='text-sm flex items-center bg-white/10 cursor-pointer'
              variant='ghost'
            >
              <Settings />
              Settings
            </Button>
          </div>
          <PopupButton />
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 text-lg'>
          <div className='p-6 border border-gray-200 rounded-lg space-y-4'>
            <h4 className='font-semibold'>Platform Settings</h4>
            <p className='text-sm uppercase'>Account</p>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600 font-normal'>
                Email me when someone follows me
              </p>
              <Switch defaultChecked />
            </span>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600'>
                Email me when someone answers on my post
              </p>
              <Switch />
            </span>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600'>
                Email me when someone mentions me
              </p>
              <Switch defaultChecked />
            </span>
            <p className='text-sm uppercase'>Application</p>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600'>New launches and projects</p>
              <Switch />
            </span>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600'>Monthly product updates</p>
              <Switch defaultChecked />
            </span>
            <span className='flex justify-between'>
              <p className='text-sm text-gray-600'>Subscribe to newsletter</p>
              <Switch />
            </span>
          </div>
          <div className='p-6 border border-gray-200 rounded-lg'>
            <span className='flex justify-between items-center'>
              <h4 className='font-semibold'>Profile Information</h4>
              <PopupInfo>
                <SquarePen className='w-4! h-4!' />
              </PopupInfo>
            </span>
            <p className='text-sm text-gray-600 my-6'>
              Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <div className='space-y-4'>
              <div className='text-sm'>
                <p>First name:</p>
                <p className='text-gray-600'>Richard Davis</p>
              </div>
              <div className='text-sm'>
                <p>Mobile:</p>
                <p className='text-gray-600'>(44) 123 1234 123</p>
              </div>
              <div className='text-sm'>
                <p>Email:</p>
                <p className='text-gray-600'>richarddavis@mail.com</p>
              </div>
              <div className='text-sm'>
                <p>Location:</p>
                <p className='text-gray-600'>USA</p>
              </div>
              <div className='text-sm'>
                <p className='mb-1'>Social:</p>
                <span className='flex gap-3'>
                  <Button variant='outline' className='w-6 h-6 cursor-pointer'>
                    <Facebook className='w-4! h-4! text-blue-500' />
                  </Button>
                  <Button variant='outline' className='w-6 h-6 cursor-pointer'>
                    <Twitter className='w-4! h-4! text-blue-400' />
                  </Button>
                  <Button variant='outline' className='w-6 h-6 cursor-pointer'>
                    <Instagram className='w-4! h-4! text-pink-500' />
                  </Button>
                </span>
              </div>
            </div>
          </div>
          <div className='p-6 border border-gray-200 rounded-lg'>
            <span className='flex justify-between items-center'>
              <h4 className='font-semibold'>Platform Settings</h4>
              <Button variant='outline' className='w-8 h-8 cursor-pointer'>
                <SquarePen className='w-4! h-4!' />
              </Button>
            </span>
            <div>
              <span className='flex gap-3 justify-between items-center mt-6'>
                <span className='flex gap-3 items-center'>
                  <img
                    className='w-10 h-10'
                    src='/avatars/alex.svg'
                    alt='alex'
                  />
                  <span className='text-sm '>
                    <p>Alexander</p>
                    <p className='text-gray-600'>Awesome work, can you ...</p>
                  </span>
                </span>
                <Button
                  className='border border-gray-200 text-gray-700 cursor-pointer'
                  variant='secondary'
                >
                  Reply
                </Button>
              </span>
              <span className='flex gap-3 justify-between items-center mt-6'>
                <span className='flex gap-3 items-center'>
                  <img
                    className='w-10 h-10'
                    src='/avatars/ivanna.svg'
                    alt='ivanna'
                  />
                  <span className='text-sm '>
                    <p>Ivanna</p>
                    <p className='text-gray-600'>About file I can....</p>
                  </span>
                </span>
                <Button
                  className='border border-gray-200 text-gray-700 cursor-pointer'
                  variant='secondary'
                >
                  Reply
                </Button>
              </span>
              <span className='flex gap-3 justify-between items-center mt-6'>
                <span className='flex gap-3 items-center'>
                  <img
                    className='w-10 h-10'
                    src='/avatars/peter.svg'
                    alt='peterson'
                  />
                  <span className='text-sm'>
                    <p>Peterson</p>
                    <p className='text-gray-600'>Have a great afternoon</p>
                  </span>
                </span>
                <Button
                  className='border border-gray-200 text-gray-700 cursor-pointer'
                  variant='secondary'
                >
                  Reply
                </Button>
              </span>
              <span className='flex gap-3 items-center mt-6 justify-between'>
                <span className='flex gap-3 items-center'>
                  <img
                    className='w-10 h-10'
                    src='/avatars/john.svg'
                    alt='bruce'
                  />
                  <span className='text-sm '>
                    <p>Bruce Mars</p>
                    <p className='text-gray-600'>
                      Hi! I need more information..
                    </p>
                  </span>
                </span>
                <Button
                  className='border border-gray-200 text-gray-700 cursor-pointer'
                  variant='secondary'
                >
                  Reply
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
