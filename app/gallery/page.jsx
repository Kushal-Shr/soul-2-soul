'use client';
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/lounge4.jpg', category: 'Ambiance' },
    { src: '/lounge5.jpg', category: 'Ambiance' },
    { src: '/lounge6.jpg', category: 'Ambiance' },
    { src: '/ambiance1.jpeg', category: 'Ambiance' },
    { src: '/ambiance2.jpg', category: 'Ambiance' },
    { src: '/ambiance3.jpg', category: 'Ambiance' },
    { src: '/lounge1.jpg', category: 'Lounge' },
    { src: '/lounge2.jpg', category: 'Lounge' },
    { src: '/lounge8.jpg', category: 'Ambiance' },
    { src: '/drink1.jpeg', category: 'Drinks' },
    { src: '/drink2.jpeg', category: 'Drinks' },
    { src: '/lounge7.jpg', category: 'Ambiance' },
    { src: '/food1.jpeg', category: 'Food' },
    { src: '/food2.jpg', category: 'Food' },
    { src: '/food3.jpeg', category: 'Food' },
    { src: '/lounge3.jpg', category: 'Lounge' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Ambiance', 'Kitchen', 'Lounge', 'Drinks', 'Food'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-[#e2b76a] py-24">
      {/* Gallery Header */}
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
          Our Gallery
        </h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Experience the essence of Soul2Soul through our carefully curated moments, 
          capturing the perfect blend of culinary excellence and lounge sophistication.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border border-[#e2b76a] transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-[#e2b76a] text-black' 
                  : 'hover:bg-[#e2b76a] hover:text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square group overflow-hidden border border-[#e2b76a]/20 rounded-4xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-4xl transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#e2b76a] text-lg font-serif">{image.category}</p>
                  <p className="text-white text-sm mt-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
