import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforme seu corpo, transforme sua vida
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Com gymIA, seu personal trainer digital, alcance seus objetivos
          fitness de forma eficiente e personalizada.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/signup">Comece Agora</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#features">Saiba Mais</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
