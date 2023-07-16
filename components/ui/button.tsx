import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'w-auto rounded-full hover:bg-[#192323] border-transparent px-5 py-3  bg-[#d08b15] disabled:cursor-not-allowed disabled:opacity-50 text-white  transition',
          className,
        )}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
