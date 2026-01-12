import Link from 'next/link';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'AI/ML & Automation',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.9,
    students: 2500,
    image: '/images/courses/courses1.jpg',
    category: 'Engineering/ITI',
  },
  {
    id: 2,
    title: 'Prompt Engineering Course',
    instructor: 'Expert Faculty',
    price: 7000,
    rating: 4.8,
    students: 3200,
    image: '/images/courses/courses2.jpg',
    category: 'Arts/Commerce/Science',
  },
  {
    id: 3,
    title: 'AR/VR Development',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.9,
    students: 1800,
    image: '/images/courses/courses3.jpg',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'EV & Solar Technology',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.7,
    students: 2100,
    image: '/images/courses/courses4.jpg',
    category: 'Emerging Sectors',
  },
  {
    id: 5,
    title: 'Digital Marketing & E-Commerce',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.6,
    students: 2800,
    image: '/images/courses/courses1.jpg',
    category: 'Business',
  },
  {
    id: 6,
    title: '3D Printing & Robotics',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.8,
    students: 1500,
    image: '/images/courses/courses2.jpg',
    category: 'Innovation',
  },
];

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Legacy to Literacy – The New AGE Skills
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto mb-6">
            &quot;AI won&apos;t take your jobs but AI literate will&quot; - Andrew Ng (Google)
          </p>
          <p className="text-lg text-paragraph max-w-3xl mx-auto mb-6">
            &quot;All of us have no equal talent – yet all of us have equal opportunity to develop talent&quot; - Ratan Tata (TATA)
          </p>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            &quot;Our industry does not respect tradition, it only respects innovation&quot; - Satya Nadella (Microsoft)
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-medium">
            All Courses
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Engineering/ITI
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Arts/Commerce/Science
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Emerging Sectors
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Technology
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            View All Courses
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
