import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sun, Moon, Search, MapPin, Calendar, Ticket, Hotel, Car, Star, Gift, ChevronDown, Menu, X, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, isVisible]
}

const NavLink = ({ href, children, mobile, onClick }) => {
  return (
    <Link href={href}>
      <a onClick={onClick} className={`block py-2 px-4 ${mobile ? 'text-left' : 'hover:text-blue-500'}`}>
        {children}
      </a>
    </Link>
  )
}

// Animated section component
const AnimatedSection = ({ children, className }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  //const [darkMode, setDarkMode] = useState(false) //Removed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currency, setCurrency] = useState({ from: 'USD', to: 'RWF' })
  const [amount, setAmount] = useState('')
  const [convertedAmount, setConvertedAmount] = useState('')

  //const toggleDarkMode = () => { //Removed
  //  setDarkMode(!darkMode)
  //  if (!darkMode) {
  //    document.documentElement.classList.add('dark')
  //  } else {
  //    document.documentElement.classList.remove('dark')
  //  }
  //}

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search functionality here
  }

  const handleCurrencyConvert = () => {
    // Implement actual currency conversion logic here
    const converted = parseFloat(amount) * 1000 // Dummy conversion
    setConvertedAmount(converted.toFixed(2))
  }

  return (
    <div className={`min-h-screen`}> {/*Removed darkMode conditional*/}
      {/* Header */}
      <header className="fixed w-full z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effect_page-0001-P3SY3tpxNAUyAaQ0ORmMq36W4fKJ30.png"
              alt="SpotIQ Logo"
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-2xl font-bold">SpotIQ</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#catalog" className="text-gray-600 hover:text-blue-500">Catalog</a>
            <a href="#updates" className="text-gray-600 hover:text-blue-500">Updates</a>
            <a href="#features" className="text-gray-600 hover:text-blue-500">Features</a>
            <a href="#support" className="text-gray-600 hover:text-blue-500">Support</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Input type="text" placeholder="Search" className="w-40" />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center pt-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"}}> 
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white relative z-10 px-4">
          <h2 className="text-5xl font-bold mb-4 text-center">Discover Rwanda with SpotIQ</h2>
          <p className="text-xl mb-8 text-center">Your intelligent travel companion for unforgettable Rwandan adventures</p>
          <form onSubmit={handleSearch} className="flex w-full max-w-md items-center space-x-2">
            <Input 
              type="text" 
              placeholder="Where in Rwanda do you want to explore?" 
              className="bg-white text-gray-800" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </form>
          <motion.div 
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </div>
      </section>


      {/* Exchange Section */}
      <AnimatedSection id="exchange" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Currency Exchange</h2>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-center">Get the best exchange rates for your trip to Rwanda</p>
            <div className="flex justify-between items-center mb-4">
              <Input 
                type="number" 
                placeholder="Amount" 
                className="w-1/2 mr-2" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select 
                className="w-1/2 p-2 border rounded"
                value={currency.from}
                onChange={(e) => setCurrency({ ...currency, from: e.target.value })}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="flex justify-between items-center mb-4">
              <Input 
                type="number" 
                placeholder="Converted Amount" 
                className="w-1/2 mr-2" 
                value={convertedAmount}
                readOnly 
              />
              <select 
                className="w-1/2 p-2 border rounded"
                value={currency.to}
                onChange={(e) => setCurrency({ ...currency, to: e.target.value })}
              >
                <option value="RWF">RWF</option>
              </select>
            </div>
            <Button 
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleCurrencyConvert}
            >
              Convert
            </Button>
          </div>
        </div>
      </AnimatedSection>

    </div>
  )
}