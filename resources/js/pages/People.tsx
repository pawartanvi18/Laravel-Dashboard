import DashboardLayout from "@/components/layout/DashboardLayout"
import { ProfileCards } from "@/components/profile/ProfileCards"
import { PeopleTable } from "@/components/people/PeopleTable"

function People() {
  return (
    <div className="space-y-10">
      <ProfileCards />
      <PeopleTable />
    </div>
  )
}

// 👇 THIS LINE is the “layout pattern”
People.layout = (page: any) => <DashboardLayout>{page}</DashboardLayout>

export default People
