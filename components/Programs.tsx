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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 bottom-0 w-[46.56vw] max-w-[886px] bg-black/85 rounded-l-[999px] z-[-1] hidden lg:block programs-decorative"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 max-w-[660px] mx-auto lg:text-left lg:mx-0">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide block mb-2">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Towards Social Development
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-[20px] p-6 pb-0 border-[3px] border-transparent transition-all duration-[400ms] hover:border-primary program-card"
            >
              <div className="relative mb-8 program-image-container">
                <div className="relative w-full" style={{ aspectRatio: '282/188' }}>
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover rounded-2xl"
                  />
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

