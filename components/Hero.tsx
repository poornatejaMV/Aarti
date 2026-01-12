import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-400/30 to-secondary/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-4">
              <Image
                src="/images/fun.png"
                alt="Decorative"
                width={60}
                height={30}
                className="mx-auto lg:mx-0"
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
            <p className="text-lg text-paragraph mb-8 max-w-xl mx-auto lg:mx-0">
              The new Forts are innovation labs and skill centers. The 21st century won&apos;t reward Degrees it will reward capabilities. Learn the Skills and Tools. Lead the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative">
            {/* Main Image */}
            <div className="relative">
              <Image
                src="/images/smiling-student-with-laptop.jpg"
                alt="Student"
                width={494}
                height={730}
                className="relative z-0 mx-auto"
                priority
              />
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
