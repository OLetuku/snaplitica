import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#0b0b0b]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold text-white">Snaplitica</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-[#d1d1d1] transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#pricing" className="text-[#d1d1d1] transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-[#d1d1d1] transition-colors hover:text-white">
              Testimonials
            </Link>
            <Link href="#contact" className="text-[#d1d1d1] transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden text-[#d1d1d1] transition-colors hover:text-white md:inline-block">
              Log in
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        {/* Testimonials section hidden as requested */}
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
