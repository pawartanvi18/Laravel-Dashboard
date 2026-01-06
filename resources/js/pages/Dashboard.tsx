import { StatsCards } from "@/components/dashboard/StatsCards"
import { PeopleTable } from "@/components/people/PeopleTable"
import { RunningProjects } from "@/components/projects/RunningProjects"
import { RunningTasks } from "@/components/tasks/RunningTasks"
import {TasksByStatusChart} from "@/components/analytics/chart"
import { ProfileCards } from "@/components/profile/ProfileCards"
import { ProfileDetail } from "@/components/profile/ProfileDetail"
import DashboardLayout  from "@/components/layout/DashboardLayout"

export default function Dashboard() {
  return (
    <DashboardLayout>
    <div className="p-6 space-y-10">
      
      {/* Top */}
        {/* Stats Cards */}
        <StatsCards />

      {/* Middle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TasksByStatusChart />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RunningProjects />
        <RunningTasks />
      </div>
    </div>
          
    </DashboardLayout>
  )
}

