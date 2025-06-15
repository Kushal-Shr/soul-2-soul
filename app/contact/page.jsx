'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPhone, FaMessage } from 'react-icons/fa6'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#0e0d12] text-white py-20 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('/diamond-pattern.png')] opacity-5 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-[#e2b76a] mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">Get in touch with Soul2Soul</p>
        </div>

        {/* Contact Info and Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#e2b76a]/20">
            <h2 className="text-2xl md:text-3xl font-serif text-[#e2b76a] mb-6">Location & Hours</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-[#e2b76a] mb-2">Address</h3>
                <p className="text-gray-300">5917 Delmar Blvd</p>
                <p className="text-gray-300">St. Louis, MO 63112</p>
              </div>

              <div>
                <h3 className="text-xl text-[#e2b76a] mb-2">Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">Brunch Hours: 12:00 PM - 5:00 PM</p>
                  <p className="text-gray-300">Dinner Hours: 5:00 PM - 9:00 PM</p>
                  <p className="text-gray-300">Lounge Hours: 9:00 PM - 1:30 AM</p>
                  <p className="text-gray-300">Monday - Closed</p>
                  <p className="text-gray-300">Tuesday - Sunday: 5:00 PM - 1:30 AM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-[#e2b76a] mb-2">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-[#e2b76a]" />
                    <p className="text-gray-300">+1 (314) 2609357, +1 (314) 2609386</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMessage className="text-[#e2b76a]" />
                    <p className="text-gray-300">info@s2sstl.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 h-[200px] rounded-xl overflow-hidden border border-[#e2b76a]/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.8861793540147!2d-90.29514792374034!3d38.65516667171707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a13366ba79%3A0x7b4e1e64a886a634!2s5917%20Delmar%20Blvd%2C%20St.%20Louis%2C%20MO%2063112!5e0!3m2!1sen!2sus!4v1699486183432!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>

              {/* Social Media Links */}
              <div className="text-center pt-4">
                <h3 className="text-xl text-[#e2b76a] mb-4">Follow Us</h3>
                <div className="flex justify-center gap-8">
                  <a href="https://www.facebook.com/profile.php?id=61566440025358" className="text-[#e2b76a] hover:text-[#c69c59] transition-colors">
                    <FaInstagram size={24} className='cursor-pointer' />
                  </a>
                  <a href="https://www.instagram.com/soul2soul_stl/" className="text-[#e2b76a] hover:text-[#c69c59] transition-colors">
                    <FaFacebook size={24} className='cursor-pointer' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-[#e2b76a]/20">
            <h2 className="text-2xl md:text-3xl font-serif text-[#e2b76a] mb-6">Send us a Message</h2>
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                Thank you for contacting us! We will get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full cursor-pointer px-6 py-3 bg-[#e2b76a] text-black font-semibold rounded-lg transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c69c59]'}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 