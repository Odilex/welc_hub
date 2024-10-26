'use client'

import { useState } from 'react'
type SelectValue = string; 
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import  label  from "@/components/ui/label"
import Select/*{ Select, SelectContent, SelectItem, SelectTrigger, SelectValue }*/ from "@/components/ui/select"
import { SelectTrigger } from '@/components/ui/select';

export default function SportIQAuth() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const Login: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>(''); // State for selected value

    // Define handleValueChange function
    const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value); // Update state with the selected value
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { email, password, firstName, lastName, dateOfBirth, gender, isSignUp })
  }

  const handleGoogleAuth = () => {
    console.log('Google authentication initiated')
  }

  const handleAppleAuth = () => {
    console.log('Apple authentication initiated')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">SportIQ</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            /*variant="ghost"*/
            className="w-full flex items-center justify-center"
            onClick={handleGoogleAuth}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            Continue with Google
          </button>
          <button
            type="button"
            /*variant="outline"*/
            className="w-full flex items-center justify-center"
            onClick={handleAppleAuth}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.5-2.08-.52-3.2 0-1.39.68-2.12.57-3.01-.41C3.97 16.33 4.68 9.11 9.01 8.81c1.21-.09 2.15.54 3.24.59 1.21-.12 2.18-.73 3.46-.61 1.51.15 2.73.77 3.51 1.99-3.04 1.79-2.5 5.81.72 6.93-.71 1.72-1.66 3.38-2.89 4.57zM12.03 8.39c-.11-2.32 1.91-4.31 4.17-4.39.18 2.47-2.19 4.49-4.17 4.39z"
              />
            </svg>
            Continue with Apple
          </button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {isSignUp && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="gender">Gender</label>
                <select onChange={handleValueChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <electContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignUp && (
            <button variant="link" className="p-0 h-auto">
              Forgot password?
            </button>
          )}
          <button type="submit" className="w-full">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p className="text-center mt-6">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
              variant="link" className="p-0 h-auto" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </motion.div>
    </div>
  )
}}