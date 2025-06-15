import React from 'react';
import Image from 'next/image';

const KitchenAbout = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 md:px-0">
      {/* ABOUT US Heading */}
      <h2 className="text-3xl md:text-5xl font-serif text-[#e2b76a] mb-12 font-bold text-center">ABOUT US</h2>

      {/* Logo and Description Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto mb-20">
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mb-8 md:mb-0">
          <Image src="/kitchen-logo.png" alt="Soul Kitchen Logo" width={320} height={120} className="w-[220px] md:w-[320px] h-auto" />
        </div>
        <div className="flex-1 max-w-xl text-center md:text-left">
          <p className="text-lg md:text-xl text-white/90 font-medium">
            <span className="font-bold text-[#e2b76a]">“Soul Kitchen”</span> is a vibe dining soul food restaurant that adds a contemporary, professional touch to classic American Deep Southern cuisine. We offer a sophisticated atmosphere and vibe to elevate your dining experience with music and cocktails. The space offers customers to unwind and take in the soulful rhythms, producing the ideal relationship of cuisine, culture, and ambience.
          </p>
        </div>
      </div>

      {/* SOUL 2 SOUL'S ROOTS Heading */}
      <h2 className="text-3xl md:text-5xl font-serif text-[#e2b76a] mb-12 font-bold text-center">SOUL 2 SOUL'S ROOTS</h2>

      {/* Roots Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto mb-8 md:mb-0">
          <div className="w-[90vw] max-w-xl h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#e2b76a]/30">
            <Image src="/kitchen-about1.jpg" alt="Soul Kitchen Interior" width={700} height={420} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex-1 max-w-xl text-center md:text-left">
          <p className="text-lg md:text-xl text-white/90 font-medium">
            The rich traditions of soul food, a dish closely associated with the Southern United States, is the foundation of <span className="font-bold text-[#e2b76a]">Soul 2 Soul</span>. Soul food is a product of creativity and tradition, with recipes that have been handed down through the ages that celebrate flavors that foster coziness and a sense of community. The restaurant is an evidence to the resilience and inventiveness of individuals who produced this cuisine, bringing customers a real taste of history, culture, and alas food cooked from the <span className="font-bold text-[#e2b76a]">SOUL</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenAbout; 