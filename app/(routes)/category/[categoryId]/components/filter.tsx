'use client'
import qs from 'query-string'

import { cn } from '@/lib/utils'
import { Color, Size } from '@/types'
import { Button } from '@/components/ui/button'

import { useRouter, useSearchParams } from 'next/navigation'

type FilterProps = {
  name: string
  valueKey: string
  data: (Size | Color)[]
}
export const Filter = ({ valueKey, name, data }: FilterProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())

    const query = {
      ...current,
      [valueKey]: id,
    }

    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    )

    router.push(url)
  }

  return (
    <div className="mb-3">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                'border py-1 px-2 rounded',
                selectedValue === filter.id && 'bg-blackMine text-primaryMine',
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
