import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Link from 'next/link'
import { Facebook, Apple } from 'lucide-react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement signup logic here
    console.log('Signup attempt with:', { email, password, confirmPassword })
  }

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(59, 130, 246, 0.2)"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effect_page-0001-P3SY3tpxNAUyAaQ0ORmMq36W4fKJ30.png"
            alt="SpotIQ Logo"
            className="h-12 w-12 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Create your SpotIQ account</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-500">Or</span>
        </div>
        <div className="mt-4 space-y-2">
          <Button
            variant="primary"
            className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign up with Google
          </Button>
          <Button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Sign up with Facebook
          </Button>
          <Button
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
          >
            <Apple className="w-5 h-5 mr-2" />
            Sign up with Apple
          </Button>
        </div>
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login">
            <a className="text-blue-500 hover:underline">Sign in</a>
          </Link>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <Link href="/terms">
            <a className="hover:underline">Terms of use</a>
          </Link>
          {' • '}
          <Link href="/privacy">
            <a className="hover:underline">Privacy policy</a>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}