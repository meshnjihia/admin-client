'use client'
import Image from "next/image"
import { MouseEventHandler } from "react"
import { useRouter } from 'next/navigation'
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import { useCart } from "@/hooks/use-cart"
import { Currency } from "@/components/ui/currency"
import { IconButton } from "@/components/icon-button"
import { usePreviewModal } from "@/hooks/use-preview-modal"

type ProductCardProps = {
    data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
    const router = useRouter()

    const cart = useCart()
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        previewModal.onOpen(data)
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        cart.addItem(data)
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-md border p-3 space-y-4">
            {/* image and actions */}
            <div className="relative aspect-square rounded-md bg-gray-100">
                <Image
                    src={data?.images?.[0]?.url}
                    alt="Product Item"
                    fill
                    className="rounded-md aspect-square object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5 px-6">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand className="text-white h-4 w-4"/>}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart className="text-white h-4 w-4"/>}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className='font-semibold text-blackMine'>
                    {data.name}
                </p>
                <p className='text-sm text-primaryMine'>
                    {data.category?.name}
                </p>
            </div>
            {/* price */}
            <div className='flex items-center justify-between text-xs text-blackMine'>
                <Currency value={data?.price}/>
            </div>
        </div>
    )
}