'use client'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type MainNavProps = {
  data: Category[]
}


export const MainNav = ({ data }: MainNavProps) => {
    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
  return <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
    {routes.map((route) => (
      <Link
        key={route.href}
        href={route.href}
        className={cn('font-medium text-sm transition-colors hover:text-black',
          route.active ? 'text-[#192323]' : 'text-[#d08b15]'
        )}
      >
        {route.label}
      </Link>
    ))}
  </nav>
}
