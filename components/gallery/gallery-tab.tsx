import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

type GalleryTabProps = {
  image: ImageType
}
export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'inset-0 absolute rounded-md ring-2 ring-offset-2',
              selected ? 'ring-primaryMine' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  )
}
