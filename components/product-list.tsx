import { Product } from "@/types"
import { NoResults } from "@/components/ui/no-results"
import { ProductCard } from "@/components/ui/product-card"

type ProductListProps = {
    title: string
    items: Product[]
}
export const ProductList = ({title, items}: ProductListProps) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 && <NoResults description="No results found!"/>}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}