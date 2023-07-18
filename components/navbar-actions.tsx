'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ShoppingBagIcon, PlusIcon } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'

export const NavbarActions = () => {
  const cart = useCart()

  const router = useRouter()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/cart')} className="flex items-center justify-center h-full rounded-full px-6 py-2">
        <div className="relative flex items-center">
          <PlusIcon className="w-4 h-4" />
          <ShoppingBagIcon className="h-6 w-6 text-white " />
          {cart.items.length > 0 && (
            <span className="absolute top-0 right-0 -mt-1.5 -mr-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold">
              {cart.items.length}
            </span>
          )}
        </div>
      </Button>
    </div>
  )
}
