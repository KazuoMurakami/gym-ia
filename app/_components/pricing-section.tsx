import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 29,90',
    features: [
      'Treinos personalizados',
      'Monitoramento de frequência',
      'Dicas diárias',
      'Acesso ao app móvel',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 59,90',
    features: [
      'Tudo do plano Básico',
      'Geração de treinos por IA',
      'Chat com personal trainer',
      'Análise avançada de progresso',
    ],
  },
  {
    name: 'Elite',
    price: 'R$ 99,90',
    features: [
      'Tudo do plano Pro',
      'Sessões semanais com personal',
      'Plano nutricional personalizado',
      'Acesso prioritário a novas funcionalidades',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Escolha o Plano Ideal para Você
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal">/mês</span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Escolher Plano</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
