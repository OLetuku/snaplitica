import { SidebarNavigation } from "@/components/layout/sidebar-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ImageIcon, QrCode, Upload, Users } from "lucide-react"

export default function CreateEventPage() {
  return (
    <SidebarNavigation userType="organizer">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Create New Event</h1>
        <p className="text-[#d1d1d1] mt-1">Set up your event details and configure photo sharing options.</p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-[#1a1a1a] border border-[#2a2a2a]">
          <TabsTrigger value="basic" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Basic Info</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="sponsors" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Sponsors</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="gallery" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              <span>Gallery</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="qr" className="data-[state=active]:bg-[#2a2a2a] data-[state=active]:text-white">
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4" />
              <span>QR Codes</span>
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Basic Information</CardTitle>
              <CardDescription className="text-[#d1d1d1]">Enter the basic details about your event.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="event-name" className="text-[#d1d1d1]">
                    Event Name
                  </Label>
                  <Input
                    id="event-name"
                    placeholder="Enter event name"
                    className="border-[#2a2a2a] bg-[#1a1a1a] text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-date" className="text-[#d1d1d1]">
                    Event Date
                  </Label>
                  <Input id="event-date" type="date" className="border-[#2a2a2a] bg-[#1a1a1a] text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location" className="text-[#d1d1d1]">
                  Location
                </Label>
                <Input
                  id="event-location"
                  placeholder="Enter event location"
                  className="border-[#2a2a2a] bg-[#1a1a1a] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description" className="text-[#d1d1d1]">
                  Description
                </Label>
                <Textarea
                  id="event-description"
                  placeholder="Enter event description"
                  className="min-h-32 border-[#2a2a2a] bg-[#1a1a1a] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[#d1d1d1]">Event Logo</Label>
                <div className="border-2 border-dashed border-[#2a2a2a] rounded-lg p-6 text-center hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 text-[#d1d1d1] mb-2" />
                    <p className="text-[#d1d1d1] mb-2">Drag and drop your logo here</p>
                    <Button
                      variant="outline"
                      className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  Save & Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sponsors" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Sponsor Integration</CardTitle>
              <CardDescription className="text-[#d1d1d1]">
                Add sponsor information and configure branding options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">Add Sponsors</h3>
                      <p className="text-sm text-[#d1d1d1]">
                        Add your event sponsors and configure their visibility in the photo galleries.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                    >
                      Add Sponsor
                    </Button>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">TechCorp</h4>
                            <p className="text-xs text-[#d1d1d1]">Platinum Sponsor</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">InnovateCo</h4>
                            <p className="text-xs text-[#d1d1d1]">Gold Sponsor</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <h3 className="text-lg font-medium text-white">Sponsor Analytics</h3>
                  <p className="text-sm text-[#d1d1d1] mb-4">
                    Configure tracking pixels and analytics for your sponsors.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pixel-id" className="text-[#d1d1d1]">
                        Retargeting Pixel ID
                      </Label>
                      <Input
                        id="pixel-id"
                        placeholder="Enter pixel ID"
                        className="border-[#2a2a2a] bg-[#1a1a1a] text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="analytics-code" className="text-[#d1d1d1]">
                        Analytics Tracking Code
                      </Label>
                      <Textarea
                        id="analytics-code"
                        placeholder="Paste tracking code here"
                        className="min-h-20 border-[#2a2a2a] bg-[#1a1a1a] text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                    Save & Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">Gallery Setup</CardTitle>
              <CardDescription className="text-[#d1d1d1]">
                Create themed folders and configure gallery settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">Gallery Folders</h3>
                      <p className="text-sm text-[#d1d1d1]">Create themed folders for organizing event photos.</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                    >
                      Add Folder
                    </Button>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">Main Stage</h4>
                            <p className="text-xs text-[#d1d1d1]">Public · 0 photos</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                            <ImageIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">VIP Area</h4>
                            <p className="text-xs text-[#d1d1d1]">Restricted · 0 photos</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <h3 className="text-lg font-medium text-white">Watermark Settings</h3>
                  <p className="text-sm text-[#d1d1d1] mb-4">Configure watermarks and branding for photos.</p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="watermark-image" className="text-[#d1d1d1]">
                        Watermark Image
                      </Label>
                      <div className="border-2 border-dashed border-[#2a2a2a] rounded-lg p-4 text-center hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center">
                          <Upload className="h-6 w-6 text-[#d1d1d1] mb-2" />
                          <p className="text-[#d1d1d1] text-sm mb-2">Upload watermark image</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                          >
                            Browse Files
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="watermark-opacity" className="text-[#d1d1d1]">
                        Watermark Opacity
                      </Label>
                      <Input
                        id="watermark-opacity"
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="30"
                        className="border-[#2a2a2a] bg-[#1a1a1a] text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                    Save & Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qr" className="mt-6">
          <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="text-white">QR Code Generation</CardTitle>
              <CardDescription className="text-[#d1d1d1]">
                Create custom QR codes for different event areas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">QR Codes</h3>
                      <p className="text-sm text-[#d1d1d1]">Generate QR codes for different areas of your event.</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                    >
                      Add QR Code
                    </Button>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex flex-col items-center">
                        <div className="mb-3 h-32 w-32 bg-white p-2 rounded-lg">
                          <img src="/qr-code-1.png" alt="QR Code" className="h-full w-full" />
                        </div>
                        <h4 className="font-medium text-white">Main Entrance</h4>
                        <p className="text-xs text-[#d1d1d1] mb-3">Links to: Main Gallery</p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                          >
                            Download
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex flex-col items-center">
                        <div className="mb-3 h-32 w-32 bg-white p-2 rounded-lg">
                          <img src="/qr-code-2.png" alt="QR Code" className="h-full w-full" />
                        </div>
                        <h4 className="font-medium text-white">VIP Area</h4>
                        <p className="text-xs text-[#d1d1d1] mb-3">Links to: VIP Gallery</p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                          >
                            Download
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#d1d1d1] hover:bg-[#2a2a2a] hover:text-white"
                          >
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#2a2a2a] p-4">
                  <h3 className="text-lg font-medium text-white">Printable Materials</h3>
                  <p className="text-sm text-[#d1d1d1] mb-4">
                    Download printable materials with QR codes for your event.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                          <QrCode className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Table Tents</h4>
                          <p className="text-xs text-[#d1d1d1]">Printable table tents with QR codes</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 w-full border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                      >
                        Download PDF
                      </Button>
                    </div>

                    <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-md bg-[#2a2a2a] flex items-center justify-center">
                          <QrCode className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Posters</h4>
                          <p className="text-xs text-[#d1d1d1]">Printable posters with QR codes</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 w-full border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                      >
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                    Save & Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </SidebarNavigation>
  )
}
