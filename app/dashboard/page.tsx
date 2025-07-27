'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import DashboardStats from '@/components/DashboardStats'
import StudentChart from '@/components/studentChart'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') return <div className="text-center mt-10 text-gray-500">Loading...</div>

  if (!session) {
    router.push('/signin')
    return null
  }

  return (
    <section className="min-h-screen w-full px-4 py-6 md:px-8 bg-gray-50">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="w-full mt-8 bg-white rounded-xl shadow-md p-6 md:p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Selamat Datang <strong>👋{session.user?.name}</strong></h2>
          <p className="text-gray-600">
            Login sebagai: <span className="font-medium text-blue-600">{session.user?.email}</span>
          </p>

          <Button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            Sign Out
          </Button>
        </div>
        <DashboardStats />
        <StudentChart />

        {/* Welcome Section */}
        
      </div>
    </section>
  )
}
