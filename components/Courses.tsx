'use client';
 
import Link from 'next/link';
import { useState } from 'react';
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
  const categories = ['All Courses', ...Array.from(new Set(courses.map((c) => c.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] ?? 'All Courses');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Unified Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Our Courses
          </span>
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Legacy to Literacy – The New AGE Skills
          </h2>
        </div>

        {/* Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-paragraph italic mb-2 leading-relaxed">
              &quot;AI won&apos;t take your jobs but AI literate will&quot;
            </p>
            <p className="text-sm font-semibold text-black">- Andrew Ng (Google)</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-paragraph italic mb-2 leading-relaxed">
              &quot;All of us have no equal talent – yet all of us have equal opportunity to develop talent&quot;
            </p>
            <p className="text-sm font-semibold text-black">- Ratan Tata (TATA)</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-paragraph italic mb-2 leading-relaxed">
              &quot;Our industry does not respect tradition, it only respects innovation&quot;
            </p>
            <p className="text-sm font-semibold text-black">- Satya Nadella (Microsoft)</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto mb-10 pb-2 -mx-4 px-4">
          <div className="flex gap-3 min-w-max md:justify-center md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm whitespace-nowrap flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {selectedCategory === category && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
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
