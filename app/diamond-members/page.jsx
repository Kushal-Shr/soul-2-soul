'use client'

import React from 'react'
import Image from 'next/image'

const DiamondMembersPage = () => {
  const perks = [
    "Personal - Onsite Key Locker",
    "Discount on Food, Drinks and Bottle Service",
    "Invitation to Private Members Events",
    "Free Entry +3 (Excluding Special Events)",
    "Priority Entry - Jump the Line Access",
    "Staff Recognition and Awareness of all Diamond Members",
    "Free Valet (When Available)",
    "Priority Seating (If Available)",
    "Special Members Only - Drinks"
  ]

  return (
    <div className="min-h-screen bg-[#0e0d12] text-white py-20 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-serif text-center text-[#e2b76a] mb-16">
          Diamond Members Perks
        </h1>

        {/* Perks List */}
        <div className="space-y-6">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="flex cursor-pointer items-center gap-4 p-4 md:p-6 bg-black/30 rounded-lg border border-[#e2b76a]/20 backdrop-blur-sm hover:border-[#e2b76a]/40 transition-all duration-300"
            >
              <div className="text-[#e2b76a]">
                <Image 
                  src="/crown.png" 
                  alt="Crown" 
                  width={24} 
                  height={24}
                  className="min-w-[24px]"
                />
              </div>
              <span className="text-lg md:text-xl text-gray-200">{perk}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#e2b76a]">
            $2000 Per Year
          </h2>
          <button className="mt-8 px-8 py-3 bg-[#e2b76a] text-black font-semibold rounded-2xl hover:bg-[#c69c59] transition-all duration-300 text-lg cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiamondMembersPage 