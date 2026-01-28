import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student - AI Skills Program',
    location: 'Pune, Maharashtra',
    image: '/images/users/user1.jpg',
    text: 'The hands-on approach and real-world projects helped me gain confidence. The AR/VR lab experience was incredible - I could visualize complex concepts easily.',
  },
  {
    name: 'Rahul Patil',
    role: 'Entrepreneur - Startup Incubation',
    location: 'Mumbai, Maharashtra',
    image: '/images/users/user2.jpg',
    text: 'The mentorship program transformed my idea into a viable business. The support from industry experts and access to prototyping facilities made all the difference.',
  },
  {
    name: 'Anjali Deshmukh',
    role: 'Graduate - Technical Skills',
    location: 'Aurangabad, Maharashtra',
    image: '/images/users/user3.jpg',
    text: 'Coming from a small town, I never thought I\'d get exposure to Industry 4.0 technologies. The Centre of Excellence opened doors I didn\'t know existed.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Unified Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Community Voices
          </span>
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Real stories from students and entrepreneurs who transformed their futures through our programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon Watermark */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-black mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-paragraph mb-1">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-paragraph italic mb-4 leading-relaxed relative">
                  <span className="text-primary text-2xl font-serif leading-none absolute -left-2 -top-1">&ldquo;</span>
                  <span className="pl-4">{testimonial.text}</span>
                </p>
                <div className="flex text-yellow-500 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
