import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { NotificationDropdown } from "./Notifications"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { usePage } from "@inertiajs/react"


export default function DashboardLayout({ children }: any) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen">

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar
          mobile
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col">

        {/* Header (ALL screens) */}
        <header className="flex items-center justify-between border-b px-4 py-3">

          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>

            <h1 className="font-semibold text-lg">Dashboard</h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <NotificationDropdown />

            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarFallback>TP</AvatarFallback>
            </Avatar>
          </div>

        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 flex-1 bg-muted/30">
          <div className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
