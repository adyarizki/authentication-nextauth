'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Menu, Rocket, Shield, Users } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Auth</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          This is an application I created as part of assignment 8, which was to understand the concepts of authentication and session management using NextAuth.js.
Practice using middleware for route protection in Next.js applications.
        </p>
        
      </section>

      {/* Feature Cards */}
      <section id="features" className="grid gap-6 grid-cols-1 md:grid-cols-3 px-6 py-12 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <Rocket className="w-8 h-8 text-blue-600" />
            <CardTitle>Lorem Ipsum</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Morbi nisl neque, venenatis eget urna ut, semper finibus nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae, nec tristique nulla. Etiam auctor tempus felis sit amet fringilla. Fusce gravida felis lacinia dui mattis.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="w-8 h-8 text-blue-600" />
            <CardTitle>Lovelace</CardTitle>
          </CardHeader>
          <CardContent>
            <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolore cumque omnis eos cupiditate odio perspiciatis </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 text-blue-600" />
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Morbi at condimentum nunc. Aenean accumsan, turpis a efficitur ullamcorper, urna dolor tempus arcu, et ultrices felis metus quis justo. Maecenas sed aliquam erat. Fusce sit amet felis dapibus, laoreet ipsum eget.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
