import type { Metadata } from 'next'
import { MainNav } from './_components/main-nav'
import { UserNav } from './_components/user-nav'

export const metadata: Metadata = {
  title: 'Dashboard do Usuário',
  description: 'Painel de controle do usuário para o aplicativo de academia',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-8">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">{children}</main>
    </div>
  )
}
