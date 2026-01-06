import { Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Home, Users, FolderKanban, Bell, X, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar({
  collapsed,
  onToggle,
  mobile,
  open,
  onClose,
}: any) {
  const content = (
    <aside
      className={cn(
        "h-full bg-background border-r p-4",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between mb-6">
        {!collapsed && <h2 className="font-semibold">Dashboard</h2>}

        {/* Collapse / Close button */}
        {mobile ? (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={onToggle}>
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Nav */}
      <nav className="space-y-2">
        <SidebarLink href="/" icon={Home} label="Home" collapsed={collapsed} />
        <SidebarLink href="/people" icon={Users} label="People" collapsed={collapsed} />
        <SidebarLink href="/projects" icon={FolderKanban} label="Project" collapsed={collapsed} />
        <SidebarLink href="/notifications" icon={Bell} label="Notification" collapsed={collapsed} />
      </nav>
    </aside>
  )

  /* Mobile overlay */
  if (mobile) {
    return open ? (
      <div className="fixed inset-0 z-50 flex">
        <div className="w-64">{content}</div>
        <div className="flex-1 bg-black/40" onClick={onClose} />
      </div>
    ) : null
  }

  return content
}

function SidebarLink({ href, icon: Icon, label, collapsed }: any) {
  return (
    <Button
      asChild
      variant="ghost"
      className="w-full justify-start gap-3"
    >
      <Link href={href}>
        <Icon className="h-4 w-4" />
        {!collapsed && label}
      </Link>
    </Button>
  )
}
