import React, { useState, useEffect } from 'react'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')

    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          Vous pouvez accepter tous les cookies ou refuser les cookies non essentiels.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Refuser les cookies non essentiels
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-black text-white rounded hover:opacity-90 transition"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />

      <Navbar />
      <SearchBar />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>

      <Footer />

      <CookieConsent />
    </div>
  )
}

export default App