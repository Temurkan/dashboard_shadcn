"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SquarePen } from "lucide-react";

export function PopupInfo() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className='w-8 h-8 cursor-pointer' variant='outline'>
          <SquarePen className='w-4! h-4!' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='leading-none font-medium'>Profile Information</h4>
            <p className='text-muted-foreground text-sm'>
              Set the information about yourself.
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>About:</Label>
              <Input
                id='width'
                defaultValue="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                className='col-span-2'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>First name:</Label>
              <Input
                id='width'
                defaultValue='Richard Davis'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>Mobile:</Label>
              <Input
                id='width'
                defaultValue='(44) 123 1234 123'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxWidth'>Email:</Label>
              <Input
                id='maxWidth'
                defaultValue='richarddavis@mail.com'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='height'>Location:</Label>
              <Input
                id='height'
                defaultValue='USA'
                className='col-span-2 h-8'
              />
            </div>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='maxHeight'>Social:</Label>
              <Input
                id='maxHeight'
                defaultValue='F T I'
                className='col-span-2 h-8'
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
