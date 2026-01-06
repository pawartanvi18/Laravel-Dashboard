import { Card, CardContent } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

const profiles = [
  {
    name: "Tanvi Pawar",
    role: "Admin",
  },
  {
    name: "Aarav Mehta",
    role: "Developer",
  },
  {
    name: "Riya Sharma",
    role: "Designer",
  },
  {
    name: "Kunal Verma",
    role: "Project Manager",
  },
]

export function ProfileCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {profiles.map((profile) => (
        <Card
          key={profile.name}
          className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        >
          <CardContent className="p-6 flex flex-col items-center text-center gap-3">
            
            {/* Avatar */}
            <Avatar className="h-16 w-16">
              <AvatarFallback>
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            {/* Name */}
            <p className="font-semibold text-lg">
              {profile.name}
            </p>

            {/* Role */}
            <p className="text-sm text-muted-foreground">
              {profile.role}
            </p>

          </CardContent>
        </Card>
      ))}
    </div>
  )
}
