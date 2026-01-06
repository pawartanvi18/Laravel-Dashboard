import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { status: "Completed", count: 18 },
  { status: "In Progress", count: 14 },
  { status: "Pending", count: 10 },
]

export function TasksByStatusChart() {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">
          Tasks by Status
        </h2>

        {/* 👇 RESPONSIVE HEIGHT CONTAINER */}
        <div className="w-full h-[260px] sm:h-[300px]">
          <ChartContainer
            config={{
              count: {
                label: "Tasks",
                color: "hsl(var(--primary))",
              },
            }}
            className="h-full w-full"
          >
            <BarChart data={data}>
              <XAxis dataKey="status" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

      </CardContent>
    </Card>
  )
}
