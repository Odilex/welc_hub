import React, { useState, useEffect, useRef } from 'react'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight, Sun, Moon, Search, MapPin, Ticket, Hotel, Car, Star, Gift, ChevronDown, ShoppingCart, MessageCircle, X } from 'lucide-react'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Link from 'next/link'
import useChat from '@/components/hooks/useChat'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight, Sun, Moon, Search, MapPin, Ticket, Hotel, Car, Star, Gift, ChevronDown, ShoppingCart, MessageCircle, X } from 'lucide-react'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Link from 'next/link'
import useChat from '@/components/hooks/useChat'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowRight, Sun, Moon, Search, MapPin, Ticket, Hotel, Car, Star, Gift, ChevronDown, ShoppingCart, MessageCircle, X } from 'lucide-react'
import Button from '@/components/ui/button';
import input from '@/components/ui/input';
import Link from 'next/link';
import  useChat  from '@/components/hooks/useChat';



// Custom hook for intersection observer
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLElement | null>(null)
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

  return [ref, isVisible] as const
}

const NavLink = ({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) => {
  return (
    <Link href={href}>
      <a className={`block py-2 px-4 ${mobile ? 'text-left' : 'hover:text-blue-300'}`}>
        {children}
      </a>
    </Link>
  )
}

// Animated section component
const AnimatedSection = ({ children, className, id }: { children: React.ReactNode; className: string; id?: string }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}

// AI Chat Component
const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Customer Support</h3>
            <Button
  onClick={() => setIsOpen(false)}
  variant="ghost"
  size="icon"
  className="text-white hover:bg-blue-600"
>
  <X size={24} />
</Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`${m.role === 'user'reac ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {m.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1"
              />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [bookingMenuOpen, setBookingMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 0)
    if (latest > 0) {
      setBookingMenuOpen(false)
    }
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleBookingMenu = () => {
    setBookingMenuOpen(!bookingMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bookingMenuOpen && !(event.target as Element).closest('#booking-menu')) {
        setBookingMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [bookingMenuOpen])

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`} style={{backgroundImage: "url('https://images.unsplash.com/photo-1517690623533-ca77a9a4b402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center"}}>
      {/* Header */}
      <header className={`fixed w-full z-10 transition-all duration-300 ${hasScrolled ? 'bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effect_page-0001-P3SY3tpxNAUyAaQ0ORmMq36W4fKJ30.png"
              alt="SpotIQ Logo"
              className="h-10 w-10 mr-2"
            />
            <h1 className="text-3xl font-bold text-white">SpotIQ</h1>
          </div>
          <button onClick={toggleMobileMenu} className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          {mobileMenuOpen && (
            <div className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg">
              <nav className="flex flex-col p-4">
                <NavLink href="#dashboard" mobile>Dashboard</NavLink>
                <NavLink href="#store" mobile>Store</NavLink>
                <NavLink href="#map" mobile>Map</NavLink>
                <div className="relative group">
                  <NavLink href="#booking" mobile>
                    <span className="flex items-center">
                      Booking
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </span>
                  </NavLink>
                  <div className="ml-4 mt-2">
                    <NavLink href="#apartment" mobile>Apartment</NavLink>
                    <NavLink href="#events" mobile>Events</NavLink>
                    <NavLink href="#transportation" mobile>Transportation</NavLink>
                  </div>
                </div>
                <NavLink href="#contact" mobile>Contact Us</NavLink>
              </nav>
            </div>
          )}
          <nav className="hidden md:flex space-x-6 text-lg">
            <a href="#dashboard" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>Dashboard</a>
            <a href="#store" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>Store</a>
            <a href="#map" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>Map</a>
            <div className="relative" id="booking-menu">
              <a
                href="#booking"
                className={`${darkMode ? 'text-white' : 'text-black'} hover:text-blue-300 flex items-center cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault()
                  toggleBookingMenu()
                }}
              >
                Booking
                <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              {bookingMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                  <a href="#apartment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Apartment</a>
                  <a href="#events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Events</a>
                  <a href="#transportation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">Transportation</a>
                </div>
              )}
            </div>
            <a href="#contact" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-blue-300`}>Contact Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>
            <Link href="/login">
              <button className="bg-white text-blue-500 hover:bg-gray-100 text-lg">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-blue-500 text-white hover:bg-blue-600 text-lg">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center pt-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1612442861897-f07c9a04eb52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white relative z-10 px-4">
          <h2 className="text-6xl font-bold mb-4 text-center">Discover Rwanda with SpotIQ</h2>
          <p className="text-2xl mb-8 text-center">Your intelligent travel companion for unforgettable Rwandan adventures</p>
          <div className="flex w-full max-w-md items-center space-x-2">
            <input type="text" placeholder="Where in Rwanda do you want to explore?" className="bg-white text-gray-800 text-lg" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-lg">
              <Search className="mr-2 h-5 w-5" /> Search
            </button>
          </div>
          <motion.div 
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-10 h-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10+", label: "National Parks", icon: <MapPin className="w-10 h-10 text-blue-500" /> },
            { number: "1000+", label: "Happy Travelers", icon: <Star className="w-10 h-10 text-yellow-500" /> },
            { number: "50+", label: "Local Guides", icon: <Gift className="w-10 h-10 text-green-500" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale:  0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.icon}
                <h3 className="text-4xl font-bold my-2">{stat.number}</h3>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection id="map" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Explore Rwanda</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020869.9819371326!2d28.735261676562495!3d-1.9435098000000028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7f9b3bf9b5bb5392!2sRwanda!5e0!3m2!1sen!2sus!4v1698015303990!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="mt-4 text-center text-xl">Discover the beauty of Rwanda's diverse landscapes and vibrant culture.</p>
        </div>
      </AnimatedSection>

      {/* Online Store Section */}
      <AnimatedSection id="store" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Rwanda's Finest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rwandan Coffee", image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", price: "$15.99" },
              { name: "Handwoven Basket", image: "https://images.unsplash.com/photo-1632770989610-e5a3b0a8a1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", price: "$29.99" },
              { name: "Rwandan Tea", image:  "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", price: "$12.99" },
            ].map((product, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-xl`}>Price: {product.price}</p>
                  <button className="bg-blue-500 text-white hover:bg-blue-600 text-lg w-full">
                    Add to Cart <ShoppingCart className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Event Tickets", icon: <Ticket className="w-14 h-14 text-blue-500" />, description: "Book tickets for local events and cultural experiences in Rwanda." },
              { title: "Stay Accommodation", icon: <Hotel className="w-14 h-14 text-blue-500" />, description: "Find comfortable and authentic accommodations across Rwanda." },
              { title: "Transportation Services", icon: <Car className="w-14 h-14 text-blue-500" />, description: "Arrange reliable transportation for your Rwandan adventure." },
            ].map((service, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-lg text-center`}>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">About SpotIQ</h2>
            <p className="mb-4 text-xl">At SpotIQ, we're passionate about showcasing the beauty and culture of Rwanda. Our intelligent travel platform curates the best experiences, accommodations, and transportation options to ensure your Rwandan journey is truly unforgettable.</p>
            <p className="mb-4 text-xl">Whether you're seeking gorilla trekking adventures, cultural immersion, or relaxation by Lake Kivu, we've got you covered. Let SpotIQ be your guide to the Land of a Thousand Hills.</p>
            <button className="bg-blue-500 text-white hover:bg-blue-600 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Rwanda Landscape" className="rounded-lg shadow-lg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/effect_page-0001-P3SY3tpxNAUyAaQ0ORmMq36W4fKJ30.png"
                alt="SpotIQ Logo"
                className="h-20 w-20"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Rwanda?</h2>
          <p className="mb-8 text-xl">Sign up now and get exclusive offers on your first booking!</p>
          <button className="bg-white text-blue-500 hover:bg-gray-100 text-lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SpotIQ</h3>
              <p className="text-lg">Your intelligent travel companion for unforgettable adventures in Rwanda.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
              <ul className="space-y-2 text-lg">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Dashboard</a></li>
                <li><a href="#" className="hover:text-blue-400">Store</a></li>
                <li><a href="#" className="hover:text-blue-400">Map</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Contact Us</h4>
              <p className="text-lg">KG 9 Ave, Kigali, Rwanda</p>
              <p className="text-lg">Phone: +250 123 456 789</p>
              <p className="text-lg">Email: info@spotiq.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-blue-400"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></a>
                <a href="#" className="hover:text-blue-400"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-lg">&copy; 2023 SpotIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Component */}
      <AIChat />
    </div>
  )
}
