import { Card, CardContent } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const profile = {
  name: "Tanvi Pawar",
  role: "Admin",
  projects: [
    "Organisation Dashboard",
    "AI Analytics Panel",
  ],
  tasks: [
    "Design dashboard UI",
    "Review analytics charts",
    "Finalize project structure",
  ],
}

export function ProfileDetail() {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        
        {/* Profile Summary */}
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback>
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-xl font-semibold">
              {profile.name}
            </p>
            <Badge variant="secondary">
              {profile.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Assigned Projects */}
        <div>
          <h3 className="font-semibold mb-2">
            Assigned Projects
          </h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {profile.projects.map((project) => (
              <li key={project}>• {project}</li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Assigned Tasks */}
        <div>
          <h3 className="font-semibold mb-2">
            Assigned Tasks
          </h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {profile.tasks.map((task) => (
              <li key={task}>• {task}</li>
            ))}
          </ul>
        </div>

      </CardContent>
    </Card>
  )
}
