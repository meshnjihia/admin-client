'use client'
import { useState, useEffect } from 'react'

import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { useCart } from '@/hooks/use-cart'
import { NoResults } from '@/components/ui/no-results'
import { ProductCard } from '@/components/ui/product-card'
import { CartItem } from './components/cart-item'
import { Summary } from './components/summary'
const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <Heading title="Shopping Cart" description="View your cart." />
          <div className="mt-4 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <NoResults description="Your cart is empty." />
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage
