import { SidebarNavigation } from "@/components/layout/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { BarChart, Download, PieChart, TrendingUp, Users } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <SidebarNavigation userType="organizer">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Analytics</h1>
          <p className="text-[#d1d1d1] mt-1">Track event performance and engagement metrics.</p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="tech-conf">
            <SelectTrigger className="w-[200px] border-[#2a2a2a] bg-[#1a1a1a] text-white">
              <SelectValue placeholder="Select event" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
              <SelectItem value="tech-conf">Tech Conference 2025</SelectItem>
              <SelectItem value="product-launch">Product Launch</SelectItem>
              <SelectItem value="annual-gala">Annual Gala</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
          <CardHeader className="pb-2">
            <CardDescription className="text-[#d1d1d1]">Total Attendees</CardDescription>
            <CardTitle className="text-2xl text-white">842</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-[#d1d1d1] flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-400" />
              <span className="text-green-400">12%</span> from last event
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
          <CardHeader className="pb-2">
            <CardDescription className="text-[#d1d1d1]">Photos Uploaded</CardDescription>
            <CardTitle className="text-2xl text-white">1,254</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-[#d1d1d1] flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-400" />
              <span className="text-green-400">8%</span> from last event
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
          <CardHeader className="pb-2">
            <CardDescription className="text-[#d1d1d1]">Photos Downloaded</CardDescription>
            <CardTitle className="text-2xl text-white">3,721</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-[#d1d1d1] flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-400" />
              <span className="text-green-400">24%</span> from last event
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
          <CardHeader className="pb-2">
            <CardDescription className="text-[#d1d1d1]">Social Shares</CardDescription>
            <CardTitle className="text-2xl text-white">967</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-[#d1d1d1] flex items-center">
              <TrendingUp className="mr-1 h-3 w-3 text-green-400" />
              <span className="text-green-400">18%</span> from last event
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList className="bg-[#1a1a1a] border border-[#2a2a2a]">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Overview</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="attendees" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Attendees</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="sponsors" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              <span>Sponsor Analytics</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="text-white">Photo Uploads Over Time</CardTitle>
                <CardDescription className="text-[#d1d1d1]">
                  Hourly breakdown of photo uploads during the event
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <img
                    src="/analytics-chart-1.png"
                    alt="Photo uploads chart"
                    className="h-full w-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="text-white">Gallery Engagement</CardTitle>
                <CardDescription className="text-[#d1d1d1]">Engagement metrics by gallery folder</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  <img
                    src="/analytics-chart-2.png"
                    alt="Gallery engagement chart"
                    className="h-full w-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Social Media Shares</CardTitle>
              <CardDescription className="text-[#d1d1d1]">Breakdown of social media shares by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <img
                  src="/analytics-chart-3.png"
                  alt="Social media shares chart"
                  className="h-full w-full object-contain"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendees" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Attendee Demographics</CardTitle>
              <CardDescription className="text-[#d1d1d1]">
                Breakdown of attendee demographics and engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-80 w-full">
                  <img
                    src="/analytics-chart-4.png"
                    alt="Attendee demographics chart"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-80 w-full">
                  <img
                    src="/analytics-chart-5.png"
                    alt="Attendee engagement chart"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sponsors" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Sponsor Engagement</CardTitle>
              <CardDescription className="text-[#d1d1d1]">Engagement metrics for sponsor content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-80 w-full">
                  <img
                    src="/analytics-chart-6.png"
                    alt="Sponsor engagement chart"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="h-80 w-full">
                  <img src="/analytics-chart-7.png" alt="Sponsor ROI chart" className="h-full w-full object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SidebarNavigation>
  )
}
