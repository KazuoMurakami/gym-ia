import type { Metadata } from 'next'

import { DashboardHeader } from './_components/dashboard-header'
import { DashboardShell } from './_components/dashboard-shell'
import { Overview } from './_components/overview'
import { RecentActivities } from './_components/recent-activities'
import NewTreino from './_components/new-treino'

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
        <NewTreino />
      </DashboardHeader>
      <div className="grid gap-4 ">
        <Overview />
      </div>
      <RecentActivities />
    </DashboardShell>
  )
}
