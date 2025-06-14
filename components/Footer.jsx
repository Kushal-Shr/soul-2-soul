'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaChevronDown } from 'react-icons/fa'

const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <footer className='w-full bg-black text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logos Section */}
          <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Our Brands</h3>
            <div className='flex flex-col items-center space-y-4'>
              <Image
                src="/kitchen-logo.png"
                alt="Kitchen Logo"
                width={150}
                height={50}
                className='object-contain'
              />
              <Image
                src="/lounge-logo.png"
                alt="Lounge Logo"
                width={150}
                height={50}
                className='object-contain'
              />
            </div>
          </div>

          {/* Map Section */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>Find Us</h3>
            <div className='w-full h-48 relative'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="140%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-lg'
              ></iframe>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <div className='space-y-2'>
              <Link href="/" className='block hover:text-gray-300'>Home</Link>
              <Link href="/menu" className='block hover:text-gray-300'>Menu</Link>
              
              {/* About Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className='w-full flex items-center justify-center space-x-2 hover:text-gray-300'
                >
                  <span>About</span>
                  <FaChevronDown className={`transform transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutOpen && (
                  <div className='absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 rounded-lg shadow-lg py-2 w-48'>
                    <Link href="/about/kitchen" className='block px-4 py-2 hover:bg-gray-800 hover:text-gray-300'>
                      Kitchen
                    </Link>
                    <Link href="/about/lounge" className='block px-4 py-2 hover:bg-gray-800 hover:text-gray-300'>
                      Lounge
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/contact" className='block hover:text-gray-300'>Contact</Link>
              <Link href="/reservations" className='block hover:text-gray-300'>Reservations</Link>
            </div>
          </div>

          {/* Contact & Social Media Section */}
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-4'>
              <div className='flex items-center justify-center space-x-2'>
                <FaPhone className='text-gray-400' />
                <a href="tel:+1234567890" className='hover:text-gray-300'>+1 (234) 567-890</a>
              </div>
              <div className='space-y-2'>
                <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                <p>Sunday: 12:00 PM - 9:00 PM</p>
              </div>
              <div className='flex justify-center space-x-4 mt-4'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-12 pt-8 border-t border-gray-800 text-center'>
          <p>&copy; {new Date().getFullYear()} Soul2Soul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
