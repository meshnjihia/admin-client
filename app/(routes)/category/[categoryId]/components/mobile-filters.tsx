'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FilterIcon, XIcon } from 'lucide-react'

import { Filter } from './filter'
import { Color, Size } from '@/types'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/icon-button'

type MobileFilterProps = {
  sizes: Size[]
  colors: Color[]
}
export const MobileFilters = ({ sizes, colors }: MobileFilterProps) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  return (
    <>
      <Button
        className="flex items-center gap-x-2 lg:hidden py-2 px-3"
        onClick={onOpen}
      >
        <FilterIcon className="w-4 h-4" />
        Filters
      </Button>
      <Dialog
        as="div"
        open={open}
        onClose={onClose}
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-blackMine bg-opacity-50" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative w-full h-full ml-auto flex overflow-y-auto flex-col bg-primaryMine/40 py-4 pb-6 shadow-xl max-w-xs transition">
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<XIcon className="w-6 h-6 text-blackMine" />}
                onClick={onClose}
              />
            </div>
            <div className="p-4 text-white">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
