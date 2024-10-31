import * as React from "react"
 
import { cn } from "@/lib/utils"
import styles from '@/app/index.module.css'
import { Text } from "./text";
 
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
    errorMessage?: string;
  }
 
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "outline-none flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm \
              file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground \
              placeholder:text-muted-foreground placeholder:text-base \
              disabled:cursor-not-allowed disabled:opacity-50 \
            ",
            styles.textInput,
            isError && styles.textInputError,
            className
          )}
          ref={ref}
          {...props}
        />
        {isError && <Text className='text-destructive italic text-sm'>{errorMessage}</Text>}
      </div>
    )
  }
)
Input.displayName = "Input"
 
export { Input }