import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { DashboardHeader } from './_components/dashboard-header'
import { DashboardShell } from './_components/dashboard-shell'
import { Overview } from './_components/overview'
import { RecentActivities } from './_components/recent-activities'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Visão geral da sua atividade na academia',
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Bem-vindo ao seu painel de controle da academia."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Treino
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 ">
        <Overview />
      </div>
      <RecentActivities />
    </DashboardShell>
  )
}
