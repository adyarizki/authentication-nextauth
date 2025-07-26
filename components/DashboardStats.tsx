// components/dashboard/DashboardStats.tsx
'use client'

import { Users, UserCheck, UserX } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Siswa",
    value: 120,
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Aktif",
    value: 100,
    icon: <UserCheck className="w-6 h-6 text-green-500" />,
  },
  {
    title: "Tidak Aktif",
    value: 20,
    icon: <UserX className="w-6 h-6 text-red-500" />,
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="p-4 shadow-sm border">
          <CardContent className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-gray-100">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-lg font-semibold">{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
