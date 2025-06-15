'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import HTMLFlipBook from 'react-pageflip'

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('signature')

  const menuTabs = [
    { 
      id: 'signature', 
      label: 'Signature Cocktails', 
      type: 'flipbook',
      images: [
        '/Signature-Cocktail-1.png',
        '/Signature-Cocktail-2.png',
        '/Signature-Cocktail-3.png'
      ]
    },
    { 
      id: 'classic', 
      label: 'Classic Cocktails', 
      type: 'flipbook',
      images: [
        '/Classic-cocktail-1.png',
        '/Classic-cocktail-2.png',
        '/Classic-cocktail-3.png'
      ]
    },
    { 
      id: 'tapas', 
      label: 'Soul Tapas', 
      type: 'flipbook',
      images: [
        '/Soul-Tapas-1.png',
        '/Soul-Tapas-2.png',
        '/Soul-Tapas-3.png'
      ]
    },
    { 
      id: 'late', 
      label: 'Late Night Menu', 
      type: 'image', 
      file: '/Late-Night-Menu.png' 
    },
    { 
      id: 'hookah', 
      label: 'Hookah', 
      type: 'image', 
      file: '/Hookah.jpg' 
    },
  ]

  const renderContent = (tab) => {
    switch (tab.type) {
      case 'flipbook':
        return (
          <div className="flex justify-center">
            <HTMLFlipBook
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1000}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="menu-book"
              flippingTime={1000}
              drawShadow={true}
            >
              {tab.images.map((img, index) => (
                <div key={index} className="w-full h-full relative">
                  <Image 
                    src={img} 
                    alt={`Page ${index + 1}`} 
                    fill 
                    className="object-contain" 
                    priority
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        )
      
      case 'pdf':
        return (
          <div className="relative w-full h-[800px] rounded-lg overflow-hidden">
            <object
              data={tab.file}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-[#e2b76a]">
                  Unable to display PDF. <a href={tab.file} target="_blank" rel="noopener noreferrer" className="underline">Click here to open</a>
                </p>
              </div>
            </object>
          </div>
        )

      case 'image':
        return (
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={tab.file}
              alt={tab.label}
              fill
              className="object-contain"
              priority
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0d12] text-white py-20 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 z-0 bg-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-[#e2b76a] mb-4">Our Menus</h1>
          <p className="text-xl text-gray-400">Explore our carefully curated selections</p>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-[#e2b76a] text-black' 
                  : 'bg-black/30 text-[#e2b76a] hover:bg-[#e2b76a]/20'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Display */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-[#e2b76a]/20 p-4 md:p-8">
          {menuTabs.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
            >
              {renderContent(tab)}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .menu-book {
          background: none;
          touch-action: none;
        }
        .page {
          background: #000;
          border: 1px solid rgba(226, 183, 106, 0.2);
          overflow: hidden;
        }
        .--left {
          border-right: none;
          box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);
        }
        .--right {
          border-left: none;
          box-shadow: inset 7px 0 30px -7px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}

export default MenuPage
