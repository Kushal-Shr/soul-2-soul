'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-[#e2b76a] py-8 md:py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-8'>
          {/* Logos Section */}
          <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Our Brands</h3>
            <div className='flex flex-col items-center space-y-4'>
              <Image
                src="/kitchen-logo.png"
                alt="Kitchen Logo"
                width={120}
                height={40}
                className='object-contain md:w-[150px]'
              />
              <Image
                src="/lounge-logo.png"
                alt="Lounge Logo"
                width={120}
                height={40}
                className='object-contain md:w-[150px]'
              />
            </div>
          </div>

          {/* Map Section */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>Find Us</h3>
            <div className='w-full h-40 md:h-48 relative'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-lg'
              ></iframe>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='text-center flex-col'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <div className='flex flex-col items-center space-y-4'>
              <Link href="/" className='relative inline-block hover:text-[#c69c59] transition-colors after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#e2b76a] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full hover:after:w-full after:transition-all'>Home</Link>
              <Link href="/menu" className='relative inline-block hover:text-[#c69c59] transition-colors after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#e2b76a] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full hover:after:w-full after:transition-all'>Menu</Link>
              
              {/* About Links */}
              <div className='relative group'>
                <button className='relative inline-block hover:text-[#c69c59] transition-colors cursor-pointer after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#e2b76a] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full group-hover:after:w-full after:transition-all'>
                  About
                </button>
                <div className='absolute hidden group-hover:block left-1/2 transform -translate-x-1/2 mt-2 py-2 w-48 z-50 bg-black/95 backdrop-blur-sm rounded-lg border border-[#e2b76a]/20'>
                  <Link href="/about/kitchen" className='block py-2 text-center hover:text-[#c69c59] transition-colors'>
                    Kitchen
                  </Link>
                  <Link href="/about/lounge" className='block py-2 text-center hover:text-[#c69c59] transition-colors'>
                    Lounge
                  </Link>
                </div>
              </div>

              <Link href="/contact" className='relative inline-block hover:text-[#c69c59] transition-colors after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#e2b76a] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full hover:after:w-full after:transition-all'>Contact</Link>
              <Link href="/reservations" className='relative inline-block hover:text-[#c69c59] transition-colors after:content-[""] after:absolute after:w-0 after:h-[2px] after:bg-[#e2b76a] after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:rounded-full hover:after:w-full after:transition-all'>Reservations</Link>
            </div>
          </div>

          {/* Contact & Social Media Section */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-4'>
              <div className='flex items-center justify-center space-x-2'>
                <FaPhone className='text-[#e2b76a]' />
                <a href="tel:+1234567890" className='hover:text-[#c69c59] transition-colors'>+1 (234) 567-890</a>
              </div>
              <div className='space-y-2 text-[#e2b76a]/80'>
                <p className='text-sm md:text-base'>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                <p className='text-sm md:text-base'>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                <p className='text-sm md:text-base'>Sunday: 12:00 PM - 9:00 PM</p>
              </div>
              <div className='flex justify-center space-x-6 mt-4'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-[#e2b76a] hover:text-[#c69c59] transition-colors'>
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-[#e2b76a] hover:text-[#c69c59] transition-colors'>
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-[#e2b76a] hover:text-[#c69c59] transition-colors'>
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#e2b76a]/20 text-center text-[#e2b76a]/80'>
          <p className='text-sm md:text-base'>&copy; {new Date().getFullYear()} Soul2Soul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
