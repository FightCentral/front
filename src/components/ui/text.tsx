import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const textVariants = cva(
  'text-base text-foreground',
  {
    variants: {
      variant: {
        title: 'font-teko text-7xl font-bold tracking-normal',
        subtitle: 'font-semibold text-xl',
        bodyHighlighted: 'font-medium text-xl',
        body: '',
      }
    },
    defaultVariants: {
      variant: "body",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const htmlElement = {
  title: "h1",
  subtitle: "h2",
  bodyHighlighted: "h3",
  body: "span",
} as const;

const Text = React.forwardRef<any, TextProps>(
  ({ className, variant = 'body', asChild = false, ...props }, ref) => {
    const Comp = htmlElement[variant!] || "span";
    return (
      <Comp
        className={cn(textVariants({ variant, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }