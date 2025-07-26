// components/dashboard/StudentChart.tsx
'use client'

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts'
import { Card, CardContent } from '@/components/ui/card'

const data = [
  { name: 'Jan', siswa: 10 },
  { name: 'Feb', siswa: 20 },
  { name: 'Mar', siswa: 15 },
  { name: 'Apr', siswa: 18 },
  { name: 'Mei', siswa: 25 },
  { name: 'Jun', siswa: 30 },
]

export default function StudentChart() {
  return (
    <Card className="mt-6 p-4">
      <CardContent>
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Jumlah Siswa per Bulan</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="siswa" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
