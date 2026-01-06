import DashboardLayout  from "@/components/layout/DashboardLayout"
import { RunningProjects } from "@/components/projects/RunningProjects"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Active Projects</p>
          <p className="text-2xl font-bold">4</p>
        </CardContent>
      </Card>
      <RunningProjects />
    </div>
  )
}
  
Projects.layout = (page: any) => <DashboardLayout>{page}</DashboardLayout>

