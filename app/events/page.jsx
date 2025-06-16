'use client';
import Image from 'next/image';
import { useState } from 'react';

const Events = () => {
  const [activeDay, setActiveDay] = useState('tuesday');

  const events = {
    tuesday: {
      title: 'Timeless Tuesday',
      subtitle: 'Every Tuesday',
      description: 'The best of 90s and 2000s Hip-Hop and R&B',
      image: '/event-tuesday.jpeg',
      features: ['Free Hookah', 'Best Damn DJ', '90s & 2000s Hits'],
      time: '9PM - Late',
    },
    wednesday: {
      title: 'Old School Wednesday',
      subtitle: 'Every Wednesday',
      description: 'Throwback to the classics that defined an era',
      image: '/event-wednesday.png',
      features: ['Classic Hits', 'Retro Vibes', 'Soul Classics'],
      time: '9PM - 1:30AM',
    },
    thursday: {
      title: 'R&B Night',
      subtitle: 'Every Thursday',
      description: 'Smooth R&B vibes all night long',
      image: '/event-thursday.jpeg',
      features: ['Soul Music', 'Romantic Atmosphere', 'Live Performances'],
      time: '9PM - Late',
    },
    friday: {
      title: 'Afro Beats',
      subtitle: 'Every Friday',
      description: 'Experience the rhythm of Africa',
      image: '/event-friday.jpg',
      features: ['African Hits', 'Global Sounds', 'Cultural Fusion'],
      time: '9PM - Late',
    },
    saturday: {
      title: 'Soul2Soul Saturdays',
      subtitle: 'Every Saturday',
      description: 'R&B, Afrobeat, Hip-Hop & Food',
      image: '/event-saturday.jpeg',
      features: ['Featured DJs', 'Premium Drinks', 'VIP Experience'],
      time: '9PM - 1:30AM',
    },
    sunday: {
      title: 'Sunset Sunday',
      subtitle: 'Every Sunday',
      description: 'The perfect end to your weekend',
      image: '/event-sunday.jpeg',
      features: ['Soul Kitchen', 'Sunset Vibes', 'Modern Hip-Hop'],
      time: '5PM - 7PM',
    },
  };

  return (
    <div className="min-h-screen bg-black text-[#e2b76a] py-24">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif mb-6">
          Choose Your Vibe
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-white/80">
          Every night brings a unique experience at Soul2Soul. 
          Select your perfect evening from our carefully curated events.
        </p>
      </div>

      {/* Day Selection */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(events).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full border-2 transition-all cursor-pointer duration-300
                ${activeDay === day 
                  ? 'border-[#e2b76a] bg-[#e2b76a] text-black' 
                  : 'border-[#e2b76a] hover:bg-[#e2b76a] hover:text-black'}`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Event Display */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-[#e2b76a]">
              <Image
                src={events[activeDay].image}
                alt={events[activeDay].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif">
                  {events[activeDay].title}
                </h2>
                <p className="text-2xl text-white/80">
                  {events[activeDay].subtitle}
                </p>
                <p className="text-xl text-white/60">
                  {events[activeDay].description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e2b76a] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-2xl">{events[activeDay].time}</span>
                </div>

                <div className="space-y-4">
                  {events[activeDay].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#e2b76a]"></div>
                      <span className="text-xl text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full cursor-pointer md:w-auto px-8 py-4 bg-[#e2b76a] text-black rounded-full text-xl font-semibold hover:bg-[#e2b76a]/90 transition-colors duration-300">
                Make Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
