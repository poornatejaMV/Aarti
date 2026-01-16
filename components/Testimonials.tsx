import Image from 'next/image';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Software Engineer',
    image: '/images/users/user1.jpg',
    text: 'The courses here are amazing! I landed my dream job after completing the web development bootcamp.',
  },
  {
    name: 'Maria Garcia',
    role: 'Data Analyst',
    image: '/images/users/user2.jpg',
    text: 'Excellent educators and well-structured content. The hands-on projects really helped me understand the concepts.',
  },
  {
    name: 'Robert Chen',
    role: 'UI/UX Designer',
    image: '/images/users/user3.jpg',
    text: 'I\'ve taken multiple courses and each one exceeded my expectations. Highly recommend!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">What Our Students Say</h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what our students have to say about their learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-paragraph">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-paragraph italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex text-yellow-500 text-lg">
                {'★'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
