'use client'
import {useState, useEffect} from 'react'

import { formatter } from "@/lib/utils"

type CurrencyProps = {
    value: string | number
}

export const Currency = ({ value }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if (!isMounted) {
        return null
    }
    
    return (
        <div className='font-semibold'>
            {formatter.format(Number(value))}
        </div>
    )
}