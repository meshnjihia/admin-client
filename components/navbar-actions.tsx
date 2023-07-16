'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from "lucide-react"

export const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if (!isMounted) {
        return null
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex h-full items-center rounded-full px-4 py-2">
                <ShoppingBagIcon className="h-4 w-4 text-white " />
                <span className="ml-2 text-sm font-medium text-green-500">0</span>
            </Button>
        </div>
    )
}