import React from 'react'

const KitchenAbout = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Soul2Soul Kitchen</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Soul2Soul Kitchen is where culinary excellence meets soulful dining. Our journey began with a simple mission: to create a space where food becomes an experience that nourishes both body and soul.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Philosophy</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe in the power of food to bring people together. Every dish we serve is crafted with passion, using the finest ingredients sourced from local suppliers. Our menu reflects our commitment to both tradition and innovation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">The Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              Step into our kitchen and discover a world of flavors that tell stories of tradition, culture, and innovation. Our chefs combine classic techniques with modern creativity to deliver an unforgettable dining experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Team</h2>
            <p className="text-gray-300 leading-relaxed">
              Behind every great meal is a team of passionate individuals. Our chefs, servers, and staff work together to create an atmosphere where every guest feels like family. We take pride in our team's dedication to excellence and hospitality.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default KitchenAbout 