'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="md:sticky top-0 z-50 w-full pb-4 md:pb-10 flex-row items-c justify-between bg-black border-b border-[#e2b76a]/20 bg-opacity-90 backdrop-blur">
        {/* top-part */}
        <div className='w-full flex flex-col items-center'>
          <div className='w-full flex items-center justify-around transition-all duration-300'>
            <a href="/about/kitchen">
              <Image 
                src="/kitchen-logo.png" 
                alt="logo" 
                width={150} 
                height={150} 
                className={`transition-all duration-300 ${isScrolled ? 'w-[50px] h-[50px] md:w-[70px] md:h-[70px]' : 'w-[100px] h-[100px] md:w-[150px] md:h-[150px]'}`}
              />
              </a>
              <a href="/home">
              <Image 
                src="/logo.png" 
                alt="logo" 
                width={150} 
                height={100} 
                className={`transition-all duration-300 object-contain ${isScrolled ? 'w-[50px] h-[33px] md:w-[70px] md:h-[47px]' : 'w-[100px] h-[67px] md:w-[150px] md:h-[100px]'}`}
              />
              </a>
              <a href="/about/lounge">
              <Image 
                src="/lounge-logo.png" 
                alt="logo" 
                width={150} 
                height={150} 
                className={`transition-all duration-300 ${isScrolled ? 'w-[50px] h-[50px] md:w-[70px] md:h-[70px]' : 'w-[100px] h-[100px] md:w-[150px] md:h-[150px]'}`}
              />
              </a>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden mt-4 text-[#e2b76a] z-50"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-40 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col items-center justify-center h-full space-y-6 text-[#e2b76a] text-xl pt-20'>
            <Link href="/" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div className='relative group'>
              <button className='hover:text-[#c69c59] transition-colors'>About</button>
              <div className='relative mt-2 py-2 space-y-2'>
                <Link href="/about/kitchen" className='block text-center hover:text-[#c69c59] transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Kitchen</Link>
                <Link href="/about/lounge" className='block text-center hover:text-[#c69c59] transition-colors' onClick={() => setIsMobileMenuOpen(false)}>Lounge</Link>
              </div>
            </div>
            <Link href="/menu" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
            <Link href="/gallery" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/events" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
            <Link href="/reservation" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Reservation</Link>
            <Link href="/contact" className="hover:text-[#c69c59] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/diamond-members" className="px-6 py-2 border-2 border-[#e2b76a] rounded-2xl hover:bg-[#e2b76a] hover:text-black transition-all mt-4" onClick={() => setIsMobileMenuOpen(false)}>Diamond Members</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex w-full items-center justify-center gap-21 text-[#e2b76a]'>
            <Link href="/" className="relative hover:text-[#c69c59] transition-colors after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Home</Link>
            
            {/* About Dropdown */}
            <div className='relative group'>
              <button className='relative hover:text-[#c69c59] transition-colors cursor-pointer after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-[#e2b76a] after:left-0 after:-bottom-2 after:rounded-full after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform'>
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
