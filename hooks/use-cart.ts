import { create } from 'zustand'

import { Product } from '@/types'

type CartStore = {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create()
