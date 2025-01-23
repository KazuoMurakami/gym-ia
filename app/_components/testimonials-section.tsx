import Image from 'next/image'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Empresário',
    content:
      'O gymIA revolucionou minha rotina de exercícios. Agora consigo manter minha forma mesmo com uma agenda lotada!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Ana Rodrigues',
    role: 'Atleta Amadora',
    content:
      'Os treinos personalizados e o acompanhamento do personal me ajudaram a melhorar meu desempenho nas corridas de rua.',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Estudante',
    content:
      'As dicas diárias e o monitoramento de frequência me mantêm motivado. Já perdi 10kg desde que comecei a usar o app!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Nossos Usuários Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || '/placeholder.svg'}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
