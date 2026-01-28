'use client';

import Image from 'next/image';

export default function Programs() {
  const programs = [
    { id: 1, image: '/images/programs/program-1.png', alt: 'Program 1' },
    { id: 2, image: '/images/programs/program-2.png', alt: 'Program 2' },
    { id: 3, image: '/images/programs/program-3.png', alt: 'Program 3' },
    { id: 4, image: '/images/programs/program-4.png', alt: 'Program 4' },
  ];

  return (
    <section id="programs" className="py-20 relative overflow-hidden programs-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/donations-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85"></div>
        {/* Top fade to blend with previous white section */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/30 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 bottom-0 w-[46.56vw] max-w-[886px] bg-black/85 rounded-l-[999px] z-[-1] hidden lg:block programs-decorative"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Unified Section Header */}
        <div className="text-center mb-12 max-w-[660px] mx-auto lg:text-left lg:mx-0">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wide block mb-2">
            Our Programs
          </span>
          <div className="inline-block mb-4 lg:mb-4">
            <div className="w-16 h-1 bg-white/30 mx-auto mb-2 lg:mx-0"></div>
            <div className="w-10 h-1 bg-white/50 mx-auto lg:mx-0"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Towards Social Development
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 program-card"
            >
              <div className="relative mb-6 program-image-container overflow-hidden rounded-xl">
                <div className="relative w-full" style={{ aspectRatio: '282/188' }}>
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .programs-section {
          position: relative;
          z-index: 1;
        }
        
        .programs-decorative {
          left: auto;
        }
        
        @media screen and (max-width: 991px) {
          .programs-decorative {
            top: 20%;
          }
        }
        
        @media screen and (max-width: 479px) {
          .programs-decorative {
            top: 35%;
          }
        }
        
        .program-card {
          transition: border-color 0.4s ease;
        }
        
        .program-card:hover {
          border-color: var(--primary-color, #2563eb);
        }
        
        .program-image-container {
          margin-bottom: clamp(20px, 1.84vw, 35px);
        }
      `}</style>
    </section>
  );
}

