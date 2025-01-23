import { DashboardHeader } from '../_components/dashboard-header'
import { DashboardShell } from '../_components/dashboard-shell'

export default function DicasPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dicas"
        text="Confira dicas e informações úteis para seu treino."
      />
      {/* Adicione o conteúdo específico da página de dicas aqui */}
    </DashboardShell>
  )
}
