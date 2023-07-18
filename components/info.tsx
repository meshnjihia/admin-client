'use client'
import { MouseEventHandler } from 'react'
import { ShoppingCartIcon } from 'lucide-react'

import { Product } from '@/types'
import { useCart } from '@/hooks/use-cart'
import { Button } from '@/components/ui/button'
import { Currency } from '@/components/ui/currency'

type InfoProps = {
  data: Product
}
export const Info = ({ data }: InfoProps) => {
  const cart = useCart()
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    cart.addItem(data)
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900">{data.name}</h3>
      <div className="mt-3 flex item-end justify-between">
        <p className="text-primaryMine text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-blackMine">Size:</h3>
          <div>
            [ {data?.size?.value} ]
            <span className="text-primaryMine text-xs font-light ml-2 lowercase">
              {data?.size?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-blackMine">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-blackMine"
            style={{ background: data?.color?.value }}
          >
            <span className="text-primaryMine text-xs font-light ml-8 lowercase">
              {data?.color?.name}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-4">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2 px-4 py-2">
          Add to cart
          <ShoppingCartIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
