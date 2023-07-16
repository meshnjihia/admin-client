import { create } from 'zustand'

import { Product } from '@/types'

type PreviewModalStore = {
    data?: Product 
    isOpen: boolean
    onClose: () => void
    onOpen: (data: Product) => void
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onClose: () => set({ isOpen: false }),
    onOpen: (data: Product) => set({ data, isOpen: true }),
}))