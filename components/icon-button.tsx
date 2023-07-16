import { cn } from "@/lib/utils"

import { MouseEventHandler } from "react"

type IconButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
    className?: string
}

export const IconButton = ({onClick, className, icon: Icon}: IconButtonProps) => {
    return (
        <button
        onClick={onClick}
            className= {cn('rounded-md flex items-center justify-center bg-[#d08b15] border-transparent shadow-md p-2 hover:scale-110 transition', className)}
        >
            {Icon}
        </button>
    )
}