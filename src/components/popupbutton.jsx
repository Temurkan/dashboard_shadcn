"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Ellipsis,
  MessageCircleMore,
  Settings,
  Smartphone,
  SquarePen,
} from "lucide-react";

export function PopupButton() {
  return (
    <Popover>
      <PopoverTrigger className='text-sm hidden items-center bg-black/10 cursor-pointer max-lg:flex'>
        <Button className='w-8 h-8 cursor-pointer bg-white/10' variant='ghost'>
          <Ellipsis className='w-4! h-4!' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='bg-[#1C1917] text-white'>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Button
              className='text-sm flex items-center bg-white/10 cursor-pointer'
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
        </div>
      </PopoverContent>
    </Popover>
  );
}
