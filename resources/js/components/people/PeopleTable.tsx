import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const people = [
  {
    name: "Tanvi Pawar",
    role: "Admin",
    email: "tanvi@mail.com",
    status: "Active",
  },
  {
    name: "Aarav Mehta",
    role: "Developer",
    email: "aarav@mail.com",
    status: "Active",
  },
  {
    name: "Riya Sharma",
    role: "Designer",
    email: "riya@mail.com",
    status: "Inactive",
  },
  {
    name: "Kunal Verma",
    role: "Manager",
    email: "kunal@mail.com",
    status: "Active",
  },
]

export function PeopleTable() {
  return (
    <div className="space-y-4">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">People</h2>
        <Input
          placeholder="Search people..."
          className="max-w-sm"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {people.map((person) => (
              <TableRow key={person.email}>
                <TableCell className="font-medium">
                  {person.name}
                </TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      person.status === "Active"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {person.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination (UI only) */}
      <div className="flex items-center justify-end gap-2">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
