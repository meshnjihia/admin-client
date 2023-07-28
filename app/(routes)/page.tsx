import { Billboard } from '@/components/billboard'
import { getProducts } from '@/actions/get-products'
import { Container } from '@/components/ui/container'
import { getBillboard } from '@/actions/get-billboard'
import { ProductList } from '@/components/product-list'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard('6dea391e-15c1-47ed-831d-19ddb828ef3a')
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
