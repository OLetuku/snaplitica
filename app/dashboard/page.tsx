import { SidebarNavigation } from "@/components/layout/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <SidebarNavigation userType="organizer">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="text-[#d1d1d1] mt-1">Welcome back to your Snaplitica dashboard.</p>
        </div>
        <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-shadow">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a] backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Active Events</CardTitle>
            <CardDescription className="text-[#d1d1d1]">Your currently running events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">3</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a] backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Total Photos</CardTitle>
            <CardDescription className="text-[#d1d1d1]">Photos uploaded this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">1,254</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a] backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Attendees</CardTitle>
            <CardDescription className="text-[#d1d1d1]">Total registered attendees</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">842</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold text-white mt-8 mb-4">Recent Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a] backdrop-blur-sm overflow-hidden"
          >
            <div className="h-40 bg-[#2a2a2a]">
              <img src={`/event-${i}.png`} alt={`Event ${i}`} className="w-full h-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-white">Tech Conference {i}</CardTitle>
              <CardDescription className="text-[#d1d1d1]">April {10 + i}, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-[#d1d1d1]">
                <div>245 Photos</div>
                <div>89 Attendees</div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SidebarNavigation>
  )
}
