'use client'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const students = [
  {
    id: 1,
    name: 'Budi Santoso',
    email: 'budi@example.com',
    major: 'Teknik Informatika',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    email: 'siti@example.com',
    major: 'Sistem Informasi',
  },
  {
    id: 3,
    name: 'Joko Anwar',
    email: 'joko@example.com',
    major: 'Manajemen',
  },
]

export default function StudentTable() {
  return (
    <Card>
      <CardContent className="overflow-x-auto p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Daftar Siswa</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Jurusan</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button size="icon" variant="outline">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
