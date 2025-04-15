import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0b0b0b]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 h-[500px] w-full bg-gradient-to-br from-[#1a1a1a]/20 via-[#2a2a2a]/10 to-transparent opacity-60"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#d1d1d1] backdrop-blur-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              <span>Revolutionizing event photography</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl/none">
              Capture, Share, and Analyze Your Event Photos in Real-Time
            </h1>
            <p className="mb-8 text-lg text-[#d1d1d1] md:text-xl">
              Snaplitica helps event organizers create memorable experiences with real-time photo sharing, facial
              recognition, and sponsor analytics.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
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

          {/* Professional Events Image */}
          <div className="relative mx-auto mt-8 max-w-[500px] md:mt-0">
            <div className="overflow-hidden rounded-xl border border-[#2a2a2a] shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <img
                src="/professional-event.png"
                alt="Professional event photography"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-10 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-white">Live Event</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/30 p-6 backdrop-blur-md md:grid-cols-3 md:gap-8 md:p-8 hidden">
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">500+</div>
            <div className="mt-1 text-[#d1d1d1]">Events Powered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">1M+</div>
            <div className="mt-1 text-[#d1d1d1]">Photos Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white md:text-4xl">98%</div>
            <div className="mt-1 text-[#d1d1d1]">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
