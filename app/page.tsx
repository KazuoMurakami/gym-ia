import Link from 'next/link'
import { CTASection } from './_components/cta-section'
import { FeaturesSection } from './_components/features-section'
import { HeroSection } from './_components/hero-section'
import { PricingSection } from './_components/pricing-section'
import { TestimonialsSection } from './_components/testimonials-section'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; 2023 gymIA. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link href="/termos" className="hover:underline">
              Termos de Serviço
            </Link>
            <Link href="/privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
