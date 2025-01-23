import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar seu Corpo e sua Vida?
        </h2>
        <p className="text-xl mb-8">
          Junte-se a milhares de pessoas que já estão alcançando seus objetivos
          com o gymIA.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/signup">Comece sua Jornada Agora</Link>
        </Button>
      </div>
    </section>
  )
}
