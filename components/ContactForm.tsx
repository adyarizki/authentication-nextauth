'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', form)
    // Di sini kamu bisa kirim ke API / Notifikasi / Supabase / Email dsb
  }

  return (
    
    <div className="min-h-screen bg-gray-50">
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Auth</h1>
        <div className="hidden md:flex gap-4 ">
          
          <Link href="./" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="./contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
        <Link href="/signin">
            <Button className="bg-blue-600 text-white hover:bg-blue-500" >
            Sign in
            </Button>
        </Link>
        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
      <Card className="w-full max-w-lg shadow-lg mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-blue-700">Contact & Advice</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Input Your Name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Input Your Email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your suggestions or questions here..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
              Kirim
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
