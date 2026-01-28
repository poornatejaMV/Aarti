import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-4 md:pt-6 pb-[90px] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-400/30 to-secondary/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-2 inline-block">
              <Image
                src="/images/fun.png"
                alt="Decorative"
                width={60}
                height={30}
                className="mx-auto lg:mx-0 w-10 h-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              The Future Belongs to Skill and{' '}
              <span className="relative">
                AI-Literate Minds
                <Image
                  src="/images/title-line.png"
                  alt=""
                  width={200}
                  height={10}
                  className="absolute -bottom-2 left-0"
                />
              </span>
            </h1>
            <p className="text-lg text-paragraph mb-4 max-w-xl mx-auto lg:mx-0">
              <strong>The sword of 17th century was Steel. The sword of 21st is Skill.</strong>
            </p>
            <p className="text-lg text-paragraph mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The new Forts are innovation labs and skill centers. The 21st century won&apos;t reward Degrees it will reward capabilities. Learn the Skills and Tools. Lead the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition shadow-lg shadow-secondary/30"
              >
                Explore Courses
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Non-Profit Organization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Community-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Hands-on Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Placement Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative w-full">
            {/* Main Image */}
            <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
                <Image
                  src="/images/image.jpeg"
                  alt="AARTI Building"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center rounded-3xl shadow-[0_18px_55px_rgba(0,0,0,0.14)]"
                />
              </div>

              {/* Decorative shapes */}
              <Image
                src="/images/banner/shape1.png"
                alt=""
                width={150}
                height={150}
                className="absolute -top-10 -right-10 -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
