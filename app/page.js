'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const dishes = [
  {
    name: 'Southern Buttermilk Skillet Cornbread',
    img: '/cornbread.jpg',
  },
  {
    name: 'Delta Dragon Sticky Ribs',
    img: '/dragon-ribs.jpg',
  },
  {
    name: 'Sweet Savory Soulful Fried Chicken Wings & Belgian Waffle',
    img: '/waffle.jpg',
  },
]

const MustHaves = () => {
  const [rotation, setRotation] = useState([0, 0, 0])
  const refs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const handleScroll = () => {
      setRotation(refs.map(ref => {
        if (!ref.current) return 0
        const rect = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const cardCenter = rect.top + rect.height / 2
        const viewportCenter = windowHeight / 2
        const distance = cardCenter - viewportCenter
        return distance / 5
      }))
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="w-full bg-black py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12">
        <div className="flex flex-col items-center mb-2">
          <span className="text-[#e2b76a] text-base md:text-lg font-serif">Favourites</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif">Our Must Haves</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {dishes.map((dish, i) => (
          <div
            key={dish.name}
            ref={refs[i]}
            className="bg-[#18171c] rounded-xl shadow-lg flex flex-col items-center py-8 md:py-10 px-4 transition-transform duration-300"
          >
            <h3 className="text-xl md:text-2xl font-serif text-[#e2b76a] mb-6 text-center h-16 md:h-24 flex items-center">{dish.name}</h3>
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#e2b76a] flex items-center justify-center mb-4 relative"
              style={{ transform: `rotate(${rotation[i]}deg)`, transition: 'transform 0.3s' }}
            >
              <Image 
                src={dish.img} 
                alt={dish.name} 
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const page = () => {
  return (
    <div className="bg-black">
      {/* Cover Section */}
      <main className="relative min-h-[60vh] md:min-h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <Image src="/cover.jpg" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 md:py-12">
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#e2b76a] mb-4 drop-shadow-lg">
            Welcome to Soul 2 Soul
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-white drop-shadow-md mb-6">
            From One Soul to Another.
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/menu" 
              className="inline-block px-6 md:px-8 py-3 bg-[#e2b76a] text-black font-semibold rounded-2xl hover:bg-[#c69c59] transition text-base md:text-lg border-2 border-[#e2b76a]"
            >
              View Menu
            </Link>
            <Link 
              href="/reservation" 
              className="inline-block px-6 md:px-8 py-3 bg-transparent text-[#e2b76a] font-semibold rounded-2xl hover:bg-[#e2b76a] hover:text-black transition text-base md:text-lg border-2 border-[#e2b76a]"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </main>

      {/* Kitchen & Lounge Sections */}
      <section className="w-full mx-auto px-4 md:px-16 pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-black">
        {/* Kitchen Section */}
        <div className="bg-[#18171c] rounded-lg shadow-lg overflow-hidden flex flex-col items-stretch border border-[#e2b76a]/20">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/kitchen-cover.jpg" alt="Kitchen Cover" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center z-20">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#e2b76a]">Soul2Soul Kitchen</h3>
              <p className="text-gray-200 mb-4 text-center w-3/4 text-sm md:text-base">
                Experience culinary excellence and soulful dining. Our kitchen brings together tradition and innovation to create unforgettable flavors.
              </p>
              <Link 
                href="/about/kitchen" 
                className="px-4 md:px-6 py-2 bg-[#e2b76a] text-black rounded-2xl hover:bg-[#c69c59] transition border border-[#e2b76a]"
              >
                About Kitchen
              </Link>
            </div>
          </div>
        </div>
        {/* Lounge Section */}
        <div className="bg-[#18171c] rounded-lg shadow-lg overflow-hidden flex flex-col items-stretch border border-[#e2b76a]/20">
          <div className="relative w-full h-64 md:h-80">
            <Image src="/lounge-cover.jpg" alt="Lounge Cover" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center z-20">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#e2b76a]">Soul2Soul Lounge</h3>
              <p className="text-gray-200 mb-4 text-center w-3/4 text-sm md:text-base">
                Discover a sanctuary for music, art, and culture. Our lounge is the perfect place to relax, connect, and enjoy vibrant entertainment.
              </p>
              <Link 
                href="/about/lounge" 
                className="px-4 md:px-6 py-2 bg-[#e2b76a] text-black rounded-2xl hover:bg-[#c69c59] transition border border-[#e2b76a]"
              >
                About Lounge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Must Haves Section */}
      <MustHaves />

      {/* Info Section */}
      <section className="w-full bg-[#0e0e10] py-8 px-4 md:px-12 border-t border-[#e2b76a]/20">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-0 items-center text-center">
          {/* Soulful Events */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center py-4 md:py-6">
            <span className="text-4xl md:text-5xl mb-4">📅</span>
            <h3 className="text-lg md:text-2xl font-bold text-[#e2b76a] mb-2">Soulful Events</h3>
            <p className="text-sm md:text-lg text-white">
              <span className="text-[#e2b76a]">Breathe</span> in <span className="text-[#e2b76a]">the</span> soulful<br />ambience
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block md:col-span-1 text-3xl text-[#e2b76a]">:</div>
          {/* Dining Area */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center py-4 md:py-6">
            <div className="mb-4 w-16 h-16 relative">
              <Image src="/kitchen-logo.png" alt="Dining Area" fill className="object-contain" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-[#e2b76a] mb-2">Dining Area</h3>
            <p className="text-sm md:text-lg text-white">
              Enjoy <span className="text-[#e2b76a]">the</span> Soul Food
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block md:col-span-1 text-3xl text-[#e2b76a]">:</div>
          {/* Lounge Section */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center py-4 md:py-6">
            <div className="mb-4 w-16 h-16 relative">
              <Image src="/lounge-logo.png" alt="Lounge Section" fill className="object-contain" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-[#e2b76a] mb-2">Lounge Section</h3>
            <p className="text-sm md:text-lg text-white">
              Drinks <span className="text-[#e2b76a]">and</span> Hookah Area
            </p>
          </div>
          {/* Divider */}
          <div className="hidden md:block md:col-span-1 text-3xl text-[#e2b76a]">:</div>
          {/* Dress Code */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center py-4 md:py-6">
            <span className="text-4xl md:text-5xl mb-4">👑</span>
            <h3 className="text-lg md:text-2xl font-bold text-[#e2b76a] mb-2">Dress Code</h3>
            <p className="text-sm md:text-lg text-white">
              Smart <span className="text-[#e2b76a]">Casual</span> & Dressy<br />Attire After 9pm
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
