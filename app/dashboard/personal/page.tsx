import { DashboardHeader } from '../_components/dashboard-header'
import { DashboardShell } from '../_components/dashboard-shell'

export default function PersonalPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Personal"
        text="Conecte-se com seu personal trainer."
      />
      {/* Adicione o conteúdo específico da página de personal aqui */}
    </DashboardShell>
  )
}
