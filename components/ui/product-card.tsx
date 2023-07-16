'use client'

import { Product } from "@/types"
import Image from "next/image"
import { IconButton } from "@/components/icon-button"
import { Expand, ShoppingCart } from "lucide-react"

type ProductCardProps = {
    data: Product
}

export const ProductCard = ({data}: ProductCardProps) => {
    return (
        <div className="bg-white group cursor-pointer rounded-md border p-3 space-y-4">
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
                            onClick={() => { }}
                            icon={<Expand className="text-white h-4 w-4"/>}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart className="text-white h-4 w-4"/>}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}