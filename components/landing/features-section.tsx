import type React from "react"
import { Camera, ImageIcon, QrCode, Share2, Sparkles, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#d1d1d1] backdrop-blur-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            <span>Powerful Features</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Everything You Need for Successful Event Photography
          </h2>
          <p className="text-[#d1d1d1] md:text-lg">
            Our platform combines cutting-edge technology with user-friendly interfaces to create a seamless experience
            for organizers, photographers, and attendees.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Camera className="h-6 w-6" />}
            title="Real-time Photo Sharing"
            description="Upload and share photos instantly during your event, allowing attendees to view and download in real-time."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Facial Recognition"
            description="Automatically tag attendees in photos using our advanced facial recognition technology."
          />
          <FeatureCard
            icon={<Share2 className="h-6 w-6" />}
            title="Sponsor Analytics"
            description="Track engagement with sponsored content and provide detailed analytics to your sponsors."
          />
          <FeatureCard
            icon={<QrCode className="h-6 w-6" />}
            title="Custom QR Codes"
            description="Generate branded QR codes for different event areas to streamline the photo sharing process."
          />
          <FeatureCard
            icon={<ImageIcon className="h-6 w-6" />}
            title="Continued Event Engagement"
            description="We send images and social media reels to attendees even after the event as a way to promote products or events long after the event has ended."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Branded Experience"
            description="Customize the entire photo sharing experience with your event branding and sponsor logos."
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a2a2a] text-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-[#d1d1d1]">{description}</p>
    </div>
  )
}
