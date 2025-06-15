import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaTimesCircle, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const allowed = [
  'Smart Casual & Dressy Attire Encouraged',
  'Collared shirts, tailored pants, dark jeans (no rips), polos, or dress tees',
  'Sleek dresses, stylish sets, skirts, or upscale jumpsuits',
  'Clean designer sneakers, dress shoes, boots, heels, or loafers',
];
const notAllowed = [
  'Athletic wear (jerseys, sweatpants, gym shorts, tank tops)',
  'Baggy, ripped, or distressed clothing',
  'Flip-flops, slides, or construction boots',
  'Hats, hoodies, or sunglasses inside (unless part of the look)',
];
const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '5pm - 1:30am' },
  { day: 'Wednesday', time: '5pm - 1:30am' },
  { day: 'Thursday', time: '5pm - 1:30am' },
  { day: 'Friday', time: '5pm - 1:30am' },
  { day: 'Saturday', time: '5pm - 1:30am' },
  { day: 'Sunday', time: '5pm - 1:30am' },
];

const LoungeAbout = () => {
  return (
    <div className="min-h-screen bg-[#10101a] text-white pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 pt-16 px-4 md:px-8">
        {/* Images */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#e2b76a]/30">
            <Image src="/lounge-about1.jpg" alt="Soul Lounge Bar" width={500} height={350} className="object-cover w-full h-64" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-[#e2b76a]/30">
            <Image src="/lounge-about2.jpg" alt="People at Soul Lounge" width={500} height={350} className="object-cover w-full h-64" />
          </div>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col items-start md:items-start">
          <span className="uppercase tracking-widest text-[#e2b76a] text-sm font-semibold mb-2">* About Soul Lounge</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            ELEVATE YOUR <span className="text-yellow-400">NIGHT</span> WITH SOUL.
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-xl">
            Welcome To Soul Lounge, A Lively Haven Where Elegant Relaxation And Soulful Sensations Meet. Savor Exquisitely Prepared Cocktails, Smooth Hookah, And The Ideal Atmosphere To Unwind, Reconnect, And Light Up Your Evening. The Soul Lounge Is The Spot For Amazing Nights, Whether You're Here To Have Fun Or Just To Chill.
          </p>
        </div>
      </div>

      {/* Dress Code Section */}
      <div className="max-w-5xl mx-auto mt-20 bg-[#18171c] rounded-2xl border border-[#e2b76a]/30 p-8 md:p-14 shadow-lg">
        <div className="text-center mb-8">
          <span className="inline-block text-4xl mb-2">💼</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e2b76a] font-serif mb-2">Dress Code: Grown & Sexy</h2>
          <p className="text-lg text-[#e2b76a]">(Applies After 9pm)</p>
        </div>
        <p className="text-center text-gray-200 text-xl mb-10 max-w-3xl mx-auto">
          We take pride in creating an upscale, mature vibe — and it starts with how we show up. Our Grown & Sexy dress code is designed to keep the energy classy, confident, and always on point.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What to Wear */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">What to Wear</h3>
            <ul className="space-y-3 text-lg text-gray-100">
              {allowed.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#e2b76a] text-xl">◆</span> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Not Allowed */}
          <div className="flex flex-col items-center">
            <div className="bg-red-500 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <FaTimesCircle className="text-white text-5xl" />
            </div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">Not Allowed</h3>
            <ul className="space-y-3 text-lg text-gray-100">
              {notAllowed.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#e2b76a] text-xl">◆</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-[#e2b76a] mt-10 text-lg font-semibold">
          Dress code enforcement begins at 9PM sharp.<br />
          We reserve the right to refuse entry to anyone not matching the vibe. Dress grown. Stay sexy.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl md:text-3xl font-serif text-[#e2b76a] mb-4">Find your soul at Soul Lounge.</h3>
        <p className="text-lg text-gray-300 mb-6">Show up today and experience the perfect blend of class, comfort, and soulful vibes.</p>
        <a href="/reservation" className="inline-block px-8 py-4 bg-[#e2b76a] text-black font-semibold rounded-2xl hover:bg-[#c69c59] transition text-lg border-2 border-[#e2b76a]">Reserve Your Night</a>
      </div>
    </div>
  );
};

export default LoungeAbout; 