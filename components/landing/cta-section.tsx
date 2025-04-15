import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[900px] rounded-2xl border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 text-center shadow-[0_0_30px_rgba(255,255,255,0.05)] md:p-12">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#d1d1d1] backdrop-blur-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            <span>Ready to get started?</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Transform Your Event Photography Experience Today
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-[#d1d1d1] md:text-lg">
            Join thousands of event organizers who are creating memorable experiences with Snaplitica's real-time photo
            sharing platform.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-[#2a2a2a] bg-[#1a1a1a]/50 text-white backdrop-blur-sm hover:bg-[#2a2a2a] hover:text-white sm:w-auto"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
