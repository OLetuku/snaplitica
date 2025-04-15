import { SidebarNavigation } from "@/components/layout/sidebar-navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export default function UploadPage() {
  return (
    <SidebarNavigation userType="photographer">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Upload Photos</h1>
          <p className="text-[#d1d1d1] mt-1">Upload event photos to assigned galleries.</p>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#2a2a2a] backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Upload to Gallery</CardTitle>
          <CardDescription className="text-[#d1d1d1]">Select a folder and upload your photos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#d1d1d1]">Event</label>
            <Select>
              <SelectTrigger className="border-[#2a2a2a] bg-[#1a1a1a] text-white">
                <SelectValue placeholder="Select event" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
                <SelectItem value="event1">Tech Conference 2025</SelectItem>
                <SelectItem value="event2">Product Launch</SelectItem>
                <SelectItem value="event3">Annual Gala</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#d1d1d1]">Gallery Folder</label>
            <Select>
              <SelectTrigger className="border-[#2a2a2a] bg-[#1a1a1a] text-white">
                <SelectValue placeholder="Select folder" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white">
                <SelectItem value="folder1">Main Stage</SelectItem>
                <SelectItem value="folder2">VIP Area</SelectItem>
                <SelectItem value="folder3">Networking Zone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-2 border-dashed border-[#2a2a2a] rounded-lg p-12 text-center hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center">
              <Upload className="h-10 w-10 text-[#d1d1d1] mb-4" />
              <h3 className="text-lg font-semibold text-white">Drag photos here</h3>
              <p className="text-[#d1d1d1] mt-1 mb-4">or click to browse files</p>
              <Button className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-shadow">
                Select Files
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <div className="text-[#d1d1d1]">0 files selected</div>
            <Button disabled className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white opacity-50">
              Upload Photos
            </Button>
          </div>
        </CardContent>
      </Card>
    </SidebarNavigation>
  )
}
