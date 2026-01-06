import { Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout  from "@/components/layout/DashboardLayout"

export default function Notifications() {
  return (
    <Card>
      <CardContent className="p-10 flex flex-col items-center text-center gap-3 text-muted-foreground">
        <Bell className="h-8 w-8" />
        <p className="font-medium">No notifications yet</p>
      </CardContent>
    </Card>
  )
}
Notifications.layout = (page: any) => <DashboardLayout>{page}</DashboardLayout>
