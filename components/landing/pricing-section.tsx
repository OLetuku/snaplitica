"use client"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function PricingSection() {
  return (
    <section className="py-20 md:py-32" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a]/50 px-3 py-1 text-sm text-[#d1d1d1] backdrop-blur-sm">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            <span>One-Time Pricing</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Flexible, One-Time Pricing
          </h2>
          <p className="text-[#d1d1d1] md:text-lg">
            Tailored to your event size. No subscriptions – just a one-time payment per event.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <PricingCard
            title="Standard Event"
            description="Ideal for weddings, private events, and intimate corporate gatherings"
            price="R25,000"
            features={[
              "Up to 1,000 images captured and processed",
              "Customized mini-event page (with event branding)",
              "Photo tagging (manual with attendee names or faces)",
              "1-month cloud storage",
              "Custom QR codes for photo access",
              "Basic sponsor branding",
              "Light ROI report",
              "Email support",
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />

          <PricingCard
            title="Premium Function"
            description="Best for corporate functions, awards, and brand activations"
            price="R35,000"
            features={[
              "Up to 2,500 images",
              "Fully branded event microsite",
              "AI-powered facial recognition tagging",
              "3-month cloud storage",
              "Multiple QR zones for area-based galleries",
              "Detailed sponsor analytics",
              "Mid-level ROI report",
              "Priority support",
            ]}
            buttonText="Get Started"
            buttonVariant="default"
            popular
          />

          <PricingCard
            title="Festival/Expo"
            description="Designed for multi-day or large-scale events"
            price="R60,000"
            features={[
              "Unlimited images",
              "Advanced microsite with sponsor zones, agendas, and galleries",
              "Facial recognition & auto-tagging",
              "6-month storage",
              "Unlimited QR zones",
              "Full sponsor engagement suite",
              "ROI report with heatmaps, click-through data",
              "Dedicated EventEcho manager",
              "On-site support (if available)",
            ]}
            buttonText="Contact Sales"
            buttonVariant="outline"
          />
        </div>

        {/* Free tier */}
        <div className="mt-16 rounded-xl border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="mb-2 inline-flex items-center rounded-full bg-[#2a2a2a] px-3 py-1 text-sm font-medium text-white">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                FREE Tier
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">FREE with Mammrlla.com Coverage</h3>
              <p className="text-[#d1d1d1]">
                Exclusively available if you book photography/video coverage through Mammrlla.com – Snaplitica is
                bundled at no extra cost.
              </p>
            </div>
            <Button className="shrink-0 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Learn More
            </Button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-4">
              <p className="text-sm text-[#d1d1d1]">Tier based on the scale of booked coverage</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-4">
              <p className="text-sm text-[#d1d1d1]">Includes all relevant Snaplitica features at that tier</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-4">
              <p className="text-sm text-[#d1d1d1]">Same quality and experience – now bundled</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-4">
              <p className="text-sm text-[#d1d1d1]">Limited to available dates and coverage team capacity</p>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold text-white">Add-on Services</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6">
              <h4 className="mb-2 font-semibold text-white">Extended Storage</h4>
              <p className="mb-4 text-2xl font-bold text-white">R2,000</p>
              <p className="text-sm text-[#d1d1d1]">Per extra month of cloud storage</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6">
              <h4 className="mb-2 font-semibold text-white">Extra ROI Reports</h4>
              <p className="mb-4 text-2xl font-bold text-white">R4,500</p>
              <p className="text-sm text-[#d1d1d1]">Deep-dive or comparative analysis</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6">
              <h4 className="mb-2 font-semibold text-white">Data Handling Setup</h4>
              <p className="mb-4 text-2xl font-bold text-white">Custom</p>
              <p className="text-sm text-[#d1d1d1]">Subject to attendee consent</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6">
              <h4 className="mb-2 font-semibold text-white">White-label Solution</h4>
              <p className="mb-4 text-2xl font-bold text-white">Custom</p>
              <p className="text-sm text-[#d1d1d1]">For agencies and event companies</p>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6">
              <h4 className="mb-2 font-semibold text-white">Scheduled Content</h4>
              <p className="mb-4 text-2xl font-bold text-white">R2,000</p>
              <p className="text-sm text-[#d1d1d1]">Schedule photos/content for 6-12 months after the event</p>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-bold text-white">Terms & Conditions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-6">
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">One-Time Event License:</strong> Each payment grants access to the
                    Snaplitica platform for a single event only. Pricing is per event, based on tier.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Storage Duration:</strong> Images are stored based on tier (1 to 6
                    months). Extended storage can be arranged.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Facial Recognition & Tagging:</strong> Enabled only if attendees give
                    digital consent at the event via QR opt-in or registration forms.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Data Privacy:</strong> Snaplitica collects attendee data only when
                    consent is given. All handling is POPIA and GDPR-aligned.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Support:</strong> Email or priority support is included based on
                    plan. On-site support available only at Festival tier or via special arrangement.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a]/50 p-6">
              <ul className="space-y-3">
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Free Tier via Mammrlla.com:</strong> Offer only valid with confirmed
                    booking of full coverage services. Subject to availability.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Cancellations & Refunds:</strong> Cancellations within 7 days of the
                    event incur a 50% fee. No refunds on completed events.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Custom Branding & ROI Reports:</strong> Turnaround for customized
                    elements is 5–7 business days. Additional requests may incur design/setup fees.
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Sponsorship Analytics:</strong> Provided based on engagement tracked
                    through the platform (QR usage, downloads, click-throughs).
                  </span>
                </li>
                <li className="flex items-start text-sm text-[#d1d1d1]">
                  <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>
                    <strong className="text-white">Platform Access:</strong> Event microsite remains live during the
                    storage period. After expiration, access will be disabled unless extended.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular?: boolean
}

function PricingCard({
  title,
  description,
  price,
  features,
  buttonText,
  buttonVariant,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-[#2a2a2a] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] transition-all duration-300",
        popular && "shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      )}
    >
      {popular && (
        <div className="absolute right-0 top-0 z-10 rounded-bl-lg bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] px-3 py-1 text-xs font-medium text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Popular
        </div>
      )}
      <CardHeader className="pb-8 pt-6">
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-[#d1d1d1]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-[#d1d1d1]"> one-time</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#d1d1d1]">
              <Check className="mr-2 h-4 w-4 text-white" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full",
            buttonVariant === "default"
              ? "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              : "border-[#2a2a2a] bg-[#1a1a1a]/50 text-white backdrop-blur-sm hover:bg-[#2a2a2a] hover:text-white",
          )}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
