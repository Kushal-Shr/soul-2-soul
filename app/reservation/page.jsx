'use client'

import React, { useState } from 'react'
import { FaCalendar, FaClock, FaUsers, FaUser, FaPhone, FaEnvelope, FaUtensils } from 'react-icons/fa'

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '2',
    name: '',
    email: '',
    phone: '',
    occasion: '',
    specialRequests: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.message || 'Failed to submit reservation')
      }

      setSubmitted(true)
    } catch (error) {
      setError(error.message)
      console.error('Submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

  // Available time slots
  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00', '00:30', '01:00', '01:30'
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0e0d12] text-white py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#e2b76a] mb-6">Thank You!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your reservation request has been received. We will contact you shortly to confirm your reservation.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                date: '',
                time: '',
                partySize: '',
                name: '',
                email: '',
                phone: '',
                occasion: '',
                specialRequests: ''
              })
            }}
            className="px-8 py-3 bg-[#e2b76a] text-black rounded-lg hover:bg-[#c69c59] transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e0d12] text-white py-20 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0 bg-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-[#e2b76a] mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-400">Join us for an unforgettable dining experience</p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-sm rounded-xl border border-[#e2b76a]/20 p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-center font-medium">{error}</p>
              <p className="text-red-400/80 text-center text-sm mt-1">
                Please try again or contact us directly at +1 (314) 2609357
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaCalendar className="inline-block mr-2 text-[#e2b76a]" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
              />
            </div>

            {/* Time Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaClock className="inline-block mr-2 text-[#e2b76a]" />
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white appearance-none"
              >
                <option value="">Select a time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Party Size */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaUsers className="inline-block mr-2 text-[#e2b76a]" />
                Party Size
              </label>
              <input
                type="number"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                required
                min={1}
                max={100}
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
              />
            </div>

            {/* Occasion */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaUtensils className="inline-block mr-2 text-[#e2b76a]" />
                Occasion (Optional)
              </label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white appearance-none"
              >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date">Date Night</option>
                <option value="business">Business Dinner</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaUser className="inline-block mr-2 text-[#e2b76a]" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                placeholder="Your full name"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaPhone className="inline-block mr-2 text-[#e2b76a]" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                placeholder="Your phone number"
              />
            </div>

            {/* Email */}
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <FaEnvelope className="inline-block mr-2 text-[#e2b76a]" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white"
                placeholder="Your email address"
              />
            </div>

            {/* Special Requests */}
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-[#e2b76a]/20 rounded-lg focus:outline-none focus:border-[#e2b76a] text-white resize-none"
                placeholder="Any special requests or dietary requirements?"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`w-full cursor-pointer px-8 py-4 bg-[#e2b76a] text-black font-semibold rounded-lg transition-all duration-300 ${
                loading 
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#c69c59]'
              }`}
            >
              {loading ? 'Submitting...' : 'Request Reservation'}
            </button>
          </div>

          {/* Note */}
          <p className="mt-4 text-sm text-gray-400 text-center">
            Note: This is a reservation request. We will contact you to confirm your reservation.
          </p>
        </form>
      </div>
    </div>
  )
}

export default ReservationPage

