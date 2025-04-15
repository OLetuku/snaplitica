import { Sparkles } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 hidden">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#d1d1d1] backdrop-blur-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Trusted by Event Professionals
          </h2>
          <p className="text-[#d1d1d1] md:text-lg">
            See how Snaplitica has transformed the event photography experience for organizers around the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Snaplitica revolutionized our conference photography. The real-time sharing and facial recognition features were a huge hit with attendees."
            author="Sarah Johnson"
            role="Event Director, TechConf"
            avatarUrl="/testimonial-1.png"
          />
          <TestimonialCard
            quote="The sponsor analytics provided by Snaplitica gave us concrete ROI data that made it easy to secure sponsors for our next event."
            author="Michael Chen"
            role="Marketing Manager, Global Summit"
            avatarUrl="/testimonial-2.png"
          />
          <TestimonialCard
            quote="As a photographer, the Snaplitica platform streamlined my workflow and allowed me to deliver photos to clients faster than ever before."
            author="Jessica Williams"
            role="Professional Event Photographer"
            avatarUrl="/testimonial-3.png"
          />
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-[#d1d1d1]">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-auto">
                <img src={`/client-logo-${i}.png`} alt={`Client Logo ${i}`} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl: string
}

function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <div className="mb-4 text-lg text-[#d1d1d1]">"{quote}"</div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img src={avatarUrl || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="font-medium text-white">{author}</div>
          <div className="text-sm text-[#d1d1d1]">{role}</div>
        </div>
      </div>
    </div>
  )
}
