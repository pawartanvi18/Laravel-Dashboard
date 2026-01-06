import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "Organisation Dashboard",
    owner: "Tanvi Pawar",
    status: "Running",
  },
  {
    name: "AI Analytics Panel",
    owner: "Aarav Mehta",
    status: "Running",
  },
  {
    name: "Employee Portal",
    owner: "Riya Sharma",
    status: "Running",
  },
]

export function RunningProjects() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Running Projects</h2>
          <Badge>Active</Badge>
        </div>

        {/* Project List */}
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex items-center justify-between rounded-md border p-3 hover:bg-muted transition"
            >
              <div>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">
                  Owner: {project.owner}
                </p>
              </div>

              <Badge variant="default">
                {project.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
