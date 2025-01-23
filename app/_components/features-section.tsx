import {
  Dumbbell,
  Zap,
  UserCircle,
  CalendarIcon,
  Lightbulb,
} from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Treinos Personalizados',
    description:
      'Receba planos de treino adaptados às suas metas e nível de condicionamento.',
  },
  {
    icon: Zap,
    title: 'Geração de Treinos por IA',
    description:
      'Nossa IA cria treinos variados e eficientes baseados no seu progresso.',
  },
  {
    icon: UserCircle,
    title: 'Acompanhamento de Personal',
    description:
      'Tenha acesso a personal trainers qualificados para orientação e motivação.',
  },
  {
    icon: CalendarIcon,
    title: 'Monitoramento de Frequência',
    description:
      'Acompanhe sua assiduidade e mantenha-se motivado com nosso calendário integrado.',
  },
  {
    icon: Lightbulb,
    title: 'Dicas e Educação',
    description:
      'Receba dicas diárias sobre nutrição, recuperação e técnicas de exercícios.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Recursos que Impulsionam Seus Resultados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
