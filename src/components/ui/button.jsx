import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center box-border gap-2 whitespace-nowrap rounded-[8px] text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer geist-400",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground bg-gradient-to-b from-[#404040] to-[#292524] border border-gray-900 inset-shadow-2xs inset-shadow-white/30 hover:bg-[#404040] hover:bg-none hover:inset-shadow-none active:bg-[#171717] active:ring-2 ring-gray-300",
        active:
          "text-gray-700 inset-shadow-white/30 hover:bg-gray-100 active:bg-[#171717] ",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 transition-all",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-all",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-all",
        link: "text-primary underline-offset-4 hover:underline transition-all",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
