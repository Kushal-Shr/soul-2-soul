'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full pb-10 flex-row items-c justify-between bg-black border-b border-[#e2b76a]/20 bg-opacity-90 backdrop-blur">
        {/* top-part */}
        <div className='w-full flex items-center justify-around transition-all duration-300'>
            <Image src="/kitchen-logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
            <Image src="/logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
            <Image src="/lounge-logo.png" alt="logo" width={isScrolled ? 70 : 150} height={isScrolled ? 70 : 150} className="transition-all duration-300" />
        </div>
        {/* bottom-part */}
        <div className='w-full flex items-center justify-center gap-21 text-[#e2b76a]'>
            <Link href="/" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Home</Link>
            
            {/* About Dropdown */}
            <div className='relative group'>
              <button
                className='relative hover:text-[#c69c59] transition-colors cursor-pointer after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform'
              >
                About
              </button>
              <div className='absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 mt-2 py-2 w-48 z-50'>
                <Link href="/about/kitchen" className='block py-2 text-center hover:text-[#c69c59] transition-colors'>
                  Kitchen
                </Link>
                <Link href="/about/lounge" className='block py-2 text-center hover:text-[#c69c59] transition-colors'>
                  Lounge
                </Link>
              </div>
            </div>

            <Link href="/menu" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Menu</Link>
            <Link href="/gallery" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Gallery</Link>
            <Link href="/events" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Events</Link>
            <Link href="/reservation" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Reservation</Link>
            <Link href="/contact" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Contact</Link>
            <Link 
              href="/diamond-members" 
              className="px-6 py-2 border-2 border-[#e2b76a] rounded-2xl hover:bg-[#e2b76a] hover:text-black transition-all"
            >
              Diamond Members
            </Link>
        </div>
    </header>
  )
}

export default Header
