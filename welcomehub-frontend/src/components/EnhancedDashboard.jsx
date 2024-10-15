import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Plane, Bed, Car, Umbrella, Calendar, Sun, Moon, Languages, Search, Settings, Bell, User, ChartLine, List, Type, Star, Bot, Send, X } from 'lucide-react'

const performanceData = [
  { month: 'JAN', value: 100 },
  { month: 'FEB', value: 70 },
  { month: 'MAR', value: 90 },
  { month: 'APR', value: 70 },
  { month: 'MAY', value: 85 },
  { month: 'JUN', value: 60 },
  { month: 'JUL', value: 75 },
  { month: 'AUG', value: 60 },
  { month: 'SEP', value: 90 },
  { month: 'OCT', value: 80 },
  { month: 'NOV', value: 110 },
  { month: 'DEC', value: 100 },
]

const popularDestinations = [
  { name: 'London', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Rome', image: '/placeholder.svg?height=200&width=300' },
  { name: 'New York', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Paris', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Barcelona', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Amsterdam', image: '/placeholder.svg?height=200&width=300' },
]

const EnhancedDashboard = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    travelers: 2,
  })
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const handleSearchChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search params:', searchParams)
    // Implement search functionality here
  }

  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: 'user', content: chatInput }])
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setChatMessages(prev => [...prev, { type: 'ai', content: `I'm sorry, I don't have a real answer. I'm a simulated AI response.` }])
      }, 1000)
      setChatInput('')
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 flex flex-col shadow-lg`}
        >
          <div className="flex items-center mb-8">
            <Plane className="text-2xl mr-2 text-blue-500" />
            <h1 className="text-2xl font-bold">Travel App</h1>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              {[
                { icon: <ChartLine />, label: 'Dashboard', value: 'dashboard' },
                { icon: <Plane />, label: 'Flights', value: 'flights' },
                { icon: <Bed />, label: 'Stays', value: 'stays' },
                { icon: <Car />, label: 'Cars', value: 'cars' },
                { icon: <Umbrella />, label: 'Things to do', value: 'activities' },
                { icon: <List />, label: 'Bookings', value: 'bookings' },
                { icon: <User />, label: 'User Profile', value: 'profile' },
                { icon: <Type />, label: 'Typography', value: 'typography' },
              ].map((item) => (
                <li key={item.value}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(item.value)}
                    className={`w-full text-left py-2 px-4 rounded flex items-center ${activeTab === item.value ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Top navigation */}
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}
          >
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-500 hover:text-gray-700 mr-4"
              >
                <Search />
              </motion.button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.form
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className={`bg-transparent border-b focus:outline-none ${darkMode ? 'text-white border-gray-600' : 'text-gray-800 border-gray-300'}`}
                    />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 text-gray-600'}`}
              >
                {darkMode ? <Sun /> : <Moon />}
              </motion.button>
              <Bell className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" />
              <Languages className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" />
              <Settings className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User />
              </div>
            </div>
          </motion.header>

          {/* Dashboard content */}
          <div className="flex-grow p-8 overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {activeTab === 'dashboard' && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <StatCard icon={<Plane />} title="Total Bookings" value="763,215" darkMode={darkMode} />
                      <StatCard icon={<Star />} title="Total Revenue" value="$3,500" darkMode={darkMode} />
                      <StatCard icon={<Umbrella />} title="Active Trips" value="12,100" darkMode={darkMode} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                        <h3 className="text-xl font-semibold mb-4">Performance</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                        <h3 className="text-xl font-semibold mb-4">Bookings by Type</h3>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={[
                            { name: 'Flights', value: 400 },
                            { name: 'Hotels', value: 300 },
                            { name: 'Cars', value: 200 },
                            { name: 'Activities', value: 100 },
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#10b981" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                )}

                {(activeTab === 'flights' || activeTab === 'stays' || activeTab === 'cars' || activeTab === 'activities') && (
                  <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className="text-xl font-semibold mb-4">Search {activeTab}</h3>
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                          <label className="block mb-1">Destination</label>
                          <input
                            type="text"
                            name="destination"
                            value={searchParams.destination}
                            onChange={handleSearchChange}
                            className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                            placeholder="Where are you going?"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                          <label className="block mb-1">Check-in</label>
                          <input
                            type="date"
                            name="checkIn"
                            value={searchParams.checkIn}
                            onChange={handleSearchChange}
                            className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                          <label className="block mb-1">Check-out</label>
                          <input
                            type="date"
                            name="checkOut"
                            value={searchParams.checkOut}
                            onChange={handleSearchChange}
                            className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                      >
                        Search
                      </motion.button>
                    </form>
                  </div>
                )}

                {activeTab === 'bookings' && (
                  <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className="text-xl font-semibold mb-4">Your Bookings</h3>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left p-2">Type</th>
                          <th className="text-left p-2">Destination</th>
                          <th className="text-left p-2">Date</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2">Flight</td>
                          <td className="p-2">New York</td>
                          <td className="p-2">2023-07-15</td>
                          <td className="p-2">Confirmed</td>
                        </tr>
                        <tr>
                          <td className="p-2">Hotel</td>
                          <td  className="p-2">Paris</td>
                          <td className="p-2">2023-08-01</td>
                          <td className="p-2">Pending</td>
                        </tr>
                        <tr>
                          <td className="p-2">Car</td>
                          <td className="p-2">Los Angeles</td>
                          <td className="p-2">2023-09-10</td>
                          <td className="p-2">Confirmed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'profile' && (
                  <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className="text-xl font-semibold mb-4">User Profile</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1">Name</label>
                        <input type="text" defaultValue="John Doe" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`} />
                      </div>
                      <div>
                        <label className="block mb-1">Email</label>
                        <input type="email" defaultValue="john@example.com" className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`} />
                      </div>
                      <div>
                        <label className="block mb-1">Preferred Language</label>
                        <select className={`w-full p-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                      >
                        Update Profile
                      </motion.button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* AI Chat Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed bottom-4 right-4 ${chatOpen ? 'w-80' : 'w-auto'}`}
      >
        {!chatOpen && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatOpen(true)}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <Bot className="text-2xl" />
          </motion.button>
        )}
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-lg shadow-xl ${darkMode ? 'text-gray-800' : ''}`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">AI Travel Assistant</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X />
              </motion.button>
            </div>
            <div className="h-80 overflow-y-auto p-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {msg.content}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="border-t p-4">
              <div className="flex">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                >
                  <Send />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

const StatCard = ({ icon, title, value, darkMode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className="text-3xl text-blue-500">
        {icon}
      </div>
    </div>
  </motion.div>
)

export default EnhancedDashboard