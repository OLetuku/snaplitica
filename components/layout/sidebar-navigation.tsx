"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  Camera,
  CreditCard,
  HelpCircle,
  Home,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  QrCode,
  Settings,
  Sparkles,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface SidebarNavigationProps {
  userType: "organizer" | "photographer" | "attendee"
  children: React.ReactNode
}

export function SidebarNavigation({ userType, children }: SidebarNavigationProps) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#0b0b0b]">
        <SnapliticaSidebar userType={userType} pathname={pathname} />
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-[#1a1a1a] bg-[#0b0b0b]/80 px-6 backdrop-blur-md">
            <SidebarTrigger className="text-[#d1d1d1] hover:text-white" />
            <div className="ml-auto flex items-center gap-4">
              {userType === "organizer" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#2a2a2a] bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white hover:shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
              )}
              <ModeToggle />
              <Avatar>
                <AvatarImage src="/user-avatar.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

interface SnapliticaSidebarProps {
  userType: "organizer" | "photographer" | "attendee"
  pathname: string
}

function SnapliticaSidebar({ userType, pathname }: SnapliticaSidebarProps) {
  return (
    <Sidebar className="border-r border-[#1a1a1a] bg-[#0b0b0b]" variant="sidebar" collapsible="icon">
      <SidebarHeader className="border-b border-[#1a1a1a] pb-6">
        <Link href="/" className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-white">Snaplitica</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {userType === "organizer" && <OrganizerNavigation pathname={pathname} />}
        {userType === "photographer" && <PhotographerNavigation pathname={pathname} />}
        {userType === "attendee" && <AttendeeNavigation pathname={pathname} />}
      </SidebarContent>
      <SidebarFooter className="border-t border-[#1a1a1a]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link
                href="/settings"
                className={cn("text-[#d1d1d1] hover:text-white", pathname === "/settings" && "bg-[#1a1a1a] text-white")}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Help">
              <Link
                href="/help"
                className={cn("text-[#d1d1d1] hover:text-white", pathname === "/help" && "bg-[#1a1a1a] text-white")}
              >
                <HelpCircle className="h-4 w-4" />
                <span>Help Center</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarSeparator />
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <button className="w-full text-left text-[#d1d1d1] hover:text-white">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

function OrganizerNavigation({ pathname }: { pathname: string }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#d1d1d1]">Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Overview" isActive={pathname === "/dashboard"}>
                <Link
                  href="/dashboard"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/dashboard" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Events" isActive={pathname === "/events"}>
                <Link
                  href="/events"
                  className={cn("text-[#d1d1d1] hover:text-white", pathname === "/events" && "bg-[#1a1a1a] text-white")}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Analytics" isActive={pathname === "/analytics"}>
                <Link
                  href="/analytics"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/analytics" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#d1d1d1]">Event Management</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Sponsors" isActive={pathname === "/sponsors"}>
                <Link
                  href="/sponsors"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/sponsors" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <Users className="h-4 w-4" />
                  <span>Sponsors</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Galleries" isActive={pathname === "/galleries"}>
                <Link
                  href="/galleries"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/galleries" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <ImageIcon className="h-4 w-4" />
                  <span>Galleries</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="QR Codes" isActive={pathname === "/qr-codes"}>
                <Link
                  href="/qr-codes"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/qr-codes" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <QrCode className="h-4 w-4" />
                  <span>QR Codes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Photographers" isActive={pathname === "/photographers"}>
                <Link
                  href="/photographers"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/photographers" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <Camera className="h-4 w-4" />
                  <span>Photographers</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#d1d1d1]">Account</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Billing" isActive={pathname === "/billing"}>
                <Link
                  href="/billing"
                  className={cn(
                    "text-[#d1d1d1] hover:text-white",
                    pathname === "/billing" && "bg-[#1a1a1a] text-white",
                  )}
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Billing</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

function PhotographerNavigation({ pathname }: { pathname: string }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#d1d1d1]">Photographer Portal</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Assignments" isActive={pathname === "/assignments"}>
              <Link
                href="/assignments"
                className={cn(
                  "text-[#d1d1d1] hover:text-white",
                  pathname === "/assignments" && "bg-[#1a1a1a] text-white",
                )}
              >
                <Calendar className="h-4 w-4" />
                <span>Assignments</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Upload" isActive={pathname === "/upload"}>
              <Link
                href="/upload"
                className={cn("text-[#d1d1d1] hover:text-white", pathname === "/upload" && "bg-[#1a1a1a] text-white")}
              >
                <ImageIcon className="h-4 w-4" />
                <span>Upload Photos</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function AttendeeNavigation({ pathname }: { pathname: string }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#d1d1d1]">Event Portal</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Home" isActive={pathname === "/home"}>
              <Link
                href="/home"
                className={cn("text-[#d1d1d1] hover:text-white", pathname === "/home" && "bg-[#1a1a1a] text-white")}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Gallery" isActive={pathname === "/gallery"}>
              <Link
                href="/gallery"
                className={cn("text-[#d1d1d1] hover:text-white", pathname === "/gallery" && "bg-[#1a1a1a] text-white")}
              >
                <ImageIcon className="h-4 w-4" />
                <span>Photo Gallery</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="My Photos" isActive={pathname === "/my-photos"}>
              <Link
                href="/my-photos"
                className={cn(
                  "text-[#d1d1d1] hover:text-white",
                  pathname === "/my-photos" && "bg-[#1a1a1a] text-white",
                )}
              >
                <Camera className="h-4 w-4" />
                <span>My Photos</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
