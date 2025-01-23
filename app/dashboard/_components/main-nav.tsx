'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
  Dumbbell,
  Zap,
  UserCircle,
  Calendar,
  Lightbulb,
  Menu,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: 'Visão Geral',
      href: '/dashboard',
      icon: Dumbbell,
    },
    {
      name: 'Treino',
      href: '/dashboard/treino',
      icon: Dumbbell,
    },
    {
      name: 'Gerar Treino',
      href: '/dashboard/gerar-treino',
      icon: Zap,
    },
    {
      name: 'Personal',
      href: '/dashboard/personal',
      icon: UserCircle,
    },
    {
      name: 'Frequência',
      href: '/dashboard/frequencia',
      icon: Calendar,
    },
    {
      name: 'Dicas',
      href: '/dashboard/dicas',
      icon: Lightbulb,
    },
  ]

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <div className="hidden md:flex md:flex-1 md:items-center  space-x-4 lg:space-x-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center text-sm font-medium transition-colors hover:text-primary',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-1 justify-end md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <SheetTitle>Menu </SheetTitle>
            <div className="flex flex-col space-y-4 pr-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
