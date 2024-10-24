import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import styles from '@/app/index.module.css'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "shadow-lg hover:shadow-none text-background",
        outline: 'shadow-lg hover:shadow-none text-foreground',
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg hover:shadow-none active:bg-[#920707]",
        ghost: "hover:bg-accent active:bg-accent/60",
        link: "relative \
          after:absolute after:left-0 after:right-0 after:-translate-y-2 after:mx-auto after:bottom-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 after:origin-center \
          hover:after:w-4/5 active:after:bg-secondary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }),
        variant === 'default' && styles.defaultButton,
        variant === 'outline' && styles.outlinedButton,
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
