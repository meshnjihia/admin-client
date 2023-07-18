import { create } from 'zustand'
import { PlusIcon } from 'lucide-react'
import { toast } from'react-toastify'
import { persist, createJSONStorage } from 'zustand/middleware'



import { Product } from '@/types'

type CartStore = {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items
      const existingItem = currentItems.find((item) => item.id === data.id)

      if (existingItem) {
        return toast.info('Item already in cart')
      }

      set({ items: [...get().items, data] })
      toast("Item added to cart")
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] })
      toast.success("Item removed from cart")
    },
    removeAll: () => set({items: []}),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)
