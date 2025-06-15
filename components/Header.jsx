'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full pb-10 flex-row items-c justify-between bg-black bg-opacity-90 backdrop-blur">
        {/* top-part */}
        <div className='w-full flex items-center justify-around transition-all duration-300'>
            <Image src="/kitchen-logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
            <Image src="/logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
            <Image src="/lounge-logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
        </div>
        {/* bottom-part */}
        <div className='w-full flex items-center justify-center gap-21'>
            <Link href="/" className="hover:text-gray-300">Home</Link>
            
            {/* About Dropdown */}
            <div className='relative'>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className='flex items-center space-x-1 hover:text-gray-300'
              >
                <span>About</span>
                <FaChevronDown className={`transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className='absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black rounded-lg shadow-lg py-2 w-48 z-50'>
                  <Link href="/about/kitchen" className='block px-4 py-2 hover:bg-gray-800 hover:text-gray-300'>
                    Kitchen
                  </Link>
                  <Link href="/about/lounge" className='block px-4 py-2 hover:bg-gray-800 hover:text-gray-300'>
                    Lounge
                  </Link>
                </div>
              )}
            </div>

            <Link href="/menu" className="hover:text-gray-300">Menu</Link>
            <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
            <Link href="/events" className="hover:text-gray-300">Events</Link>
            <Link href="/reservation" className="hover:text-gray-300">Reservation</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/diamond-members" className="hover:text-gray-300">Diamond Members</Link>
        </div>
    </header>
  )
}

export default Header
