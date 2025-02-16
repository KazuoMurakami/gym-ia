import { DashboardHeader } from '../../_components/dashboard-header'
import { DashboardShell } from '../../_components/dashboard-shell'

export default function TreinoPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Treino"
        text="Visualize e gerencie seus treinos atuais."
      />
      {/* Adicione o conteúdo específico da página de treino aqui */}
    </DashboardShell>
  )
}
