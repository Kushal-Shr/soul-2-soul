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
    <div className="min-h-screen bg-[#0e0d12] text-white py-10 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="w-full h-[200px] md:h-[300px] relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image 
              src="/crown.png" 
              alt="Crown" 
              width={60} 
              height={60}
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#e2b76a] mb-4 md:mb-6"
            />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-center text-[#e2b76a] mb-2 md:mb-4 bg-gradient-to-b from-[#e2b76a] to-[#8b6d3f] bg-clip-text text-transparent">
              Diamond Members
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-400">
              Exclusive Benefits & Privileges
            </p>
          </div>
        </div>

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-12 md:mt-16 pb-20">
          <div className="bg-[#e2b76a]/5 border border-[#e2b76a]/20 rounded-2xl p-6 sm:p-8 md:p-10 text-center backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#e2b76a] mb-6 md:mb-8">
              $2000 Per Year
            </div>
            <button className="w-full sm:w-auto px-8 py-3 bg-[#e2b76a] text-black font-semibold rounded-2xl hover:bg-[#c69c59] transition-all duration-300 text-lg sm:text-xl">
              Apply Now
            </button>
            <p className="mt-4 text-sm sm:text-base text-gray-400">
              Limited memberships available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiamondMembersPage 