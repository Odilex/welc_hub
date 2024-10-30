<<<<<<< HEAD:welcomehub-frontend/sportIq/src/components/Dashboard.tsx
/*'use client'

import { useState, useEffect } from "react"
import { Bell, Home, MapPin, Settings, Sun, Wallet2, Calendar, Bus, Coffee, Beer, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle  from "@/components/ui/card"
import  Input  from "@/components/ui/input"
import  Separator  from "@/components/ui/separator"
import  useToast  from "@/components/ui/use-toast"
=======
import { useState, useEffect } from "react"
import { Bell, Home, MapPin, Settings, Sun, Wallet2, Calendar, Bus, Coffee, Beer, Cloud } from "lucide-react"
import Button from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Input from "@/components/ui/input"
import Separator from "@/components/ui/separator"
import useToast from "@/components/ui/use-toast"
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/components/Dashboard.tsx

export default function Component() {
  const [activeSection, setActiveSection] = useState("Dashboard")
  const [weather, setWeather] = useState({ temp: 22, condition: "Partly cloudy" })
  const [location, setLocation] = useState(null)
  const [walletBalance, setWalletBalance] = useState(1000)
  const { toast } = useToast()

  useEffect(() => {
    setLocation({ lat: -1.9441, lon: 30.0619 })

    const fetchWeather = async () => {
      setWeather({ temp: Math.floor(Math.random() * 15) + 20, condition: Math.random() > 0.5 ? "Sunny" : "Rainy" })
    }
    fetchWeather()
  }, [])

  const sidebarItems = [
    { name: "Dashboard", icon: Home },
    { name: "Wallet", icon: Wallet2 },
    { name: "Accommodations", icon: MapPin },
    { name: "Events", icon: Calendar },
    { name: "Transport", icon: Bus },
    { name: "Weather", icon: Sun },
  ]

  const getDrinkRecommendation = () => {
    return weather.condition === "Sunny"
      ? "On this sunny day, visit Inzora Rooftop Cafe for refreshing drinks with a view!"
      : "It's rainy today. How about warming up with coffee at Question Coffee Cafe?"
  }

  const getWalletAdvice = () => {
    return walletBalance < 500
      ? "Balance is low. Consider budget-friendly options."
      : walletBalance < 2000
      ? "Moderate balance. Enjoy but keep an eye on spending."
      : "Balance is healthy! Feel free to enjoy premium experiences."
  }

  const sectionData = {
    Dashboard: {
      title: "Welcome, Michael!",
      subtitle: "What would you like to explore in Rwanda today?",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{walletBalance} RWF</p>
              <p className="text-sm text-gray-600">Available balance</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Kigali Jazz Festival</p>
              <p className="text-sm text-gray-600">2023-07-15</p>
              <p className="text-sm text-gray-600">Kigali Convention Center</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{weather.temp}°C</p>
              <p className="text-sm text-gray-600">{weather.condition}</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    Wallet: {
      title: "Wallet",
      subtitle: "Manage your finances",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your recent transactions will appear here.</p>
          </CardContent>
        </Card>
      ),
    },
    Accommodations: {
      title: "Accommodations",
      subtitle: "Find your perfect stay",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Saved Accommodations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gray-200 rounded-lg">
              <p className="text-center pt-40">Map placeholder</p>
            </div>
          </CardContent>
        </Card>
      ),
    },
    Events: {
      title: "Events",
      subtitle: "Discover what's happening",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Event listings will appear here.</p>
          </CardContent>
        </Card>
      ),
    },
    Transport: {
      title: "Transport",
      subtitle: "Plan your journey",
      content: (
        <Card>
          <CardHeader>
            <CardTitle>Transport Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Available transport options will be listed here.</p>
          </CardContent>
        </Card>
      ),
    },
    Weather: {
      title: "Weather",
      subtitle: "Stay informed about the climate",
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Weather</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">{weather.temp}°C</p>
                  <p className="text-xl">{weather.condition}</p>
                </div>
                {weather.condition === "Sunny" ? (
                  <Sun className="h-16 w-16 text-yellow-500" />
                ) : (
                  <Cloud className="h-16 w-16 text-gray-500" />
                )}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
<<<<<<< HEAD:welcomehub-frontend/sportIq/src/components/Dashboard.tsx
                <iframe
                  //src={`https://map.worldweatheronline.com/?lat=${location?.lat}&lon=${location?.lon}&zoom=10`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
=======
                {location && (
                  <iframe
                    src={`https://map.worldweatheronline.com/?lat=${location.lat}&lon=${location.lon}&zoom=10`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/components/Dashboard.tsx
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{getDrinkRecommendation()}</p>
              <p>{getWalletAdvice()}</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
  }

  return (
    <div className="flex h-screen bg-gray-100">
<<<<<<< HEAD:welcomehub-frontend/sportIq/src/components/Dashboard.tsx
      {/* Left Sidebar }
=======
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/components/Dashboard.tsx
      <aside className="w-64 bg-white p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <MapPin className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">SpotIQ</h1>
        </div>
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.name}
              variant={activeSection === item.name ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection(item.name)}
            >
              <item.icon className="mr-2 h-4 w-4" /> {item.name}
            </Button>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="mt-auto">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-sm mb-4">Our travel experts are here to assist you.</p>
            <button className="w-full">Contact Support</button>
          </div>
        </div>
      </aside>

<<<<<<< HEAD:welcomehub-frontend/sportIq/src/components/Dashboard.tsx
      {/* Main Content }
=======
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/components/Dashboard.tsx
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">{sectionData[activeSection].title}</h2>
            <p className="text-gray-600">{sectionData[activeSection].subtitle}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search" className="w-64" />
            <button>Explore</button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
              <span className="sr-only">Theme</span>
            </Button>
            <Button variant="ghost" size="icon">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User profile"
<<<<<<< HEAD:welcomehub-frontend/sportIq/src/components/Dashboard.tsx
                className="w-8 h-8 rounded-full"
              />
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </div>

        {sectionData[activeSection].content}
      </main>
    </div>
  )
}*/
=======
                className="w-8 h-8 rounded
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/components/Dashboard.tsx