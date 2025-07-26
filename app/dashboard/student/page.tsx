import StudentTable from "@/components/StudentTable"

export default function StudentsPage() {
  return (
    <section className="min-h-screen w-full px-4 py-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <StudentTable />
      </div>
    </section>
  )
}
