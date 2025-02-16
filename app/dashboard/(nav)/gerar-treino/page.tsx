import { DashboardShell } from '../../_components/dashboard-shell'
import { DashboardHeader } from '../../_components/dashboard-header'

export default function GerarTreinoPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Gerar Treino"
        text="Crie um novo plano de treino personalizado."
      />
      {/* Adicione o conteúdo específico da página de gerar treino aqui */}
    </DashboardShell>
  )
}
