import * as React from "react"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'line'
  }

  const inputVariants = cva(
    "flex h-10 w-full rounded-md placeholder-opacity-50 placeholder-white border border-input border-opacity-40 text-white bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-white placeholder-gray",
    {
      variants: {
        variant: {
          line: ''
        }
       
    }}
  )
  
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
