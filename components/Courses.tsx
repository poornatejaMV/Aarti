'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'Advanced AI & ML Development',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 27000,
    // rating: 4.9, // Not found in PDF
    // students: 2500, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'AI Skills',
  },
  {
    id: 2,
    title: 'Prompt Engineering Course',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 7000,
    // rating: 4.8, // Not found in PDF
    // students: 3200, // Not found in PDF
    image: '/images/courses/courses2.jpg',
    category: 'AI Skills',
  },
  {
    id: 3,
    title: 'Industrial Automation & Robotics',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 2000,
    // rating: 4.9, // Not found in PDF
    // students: 1800, // Not found in PDF - PDF mentions "batch of 30 students"
    image: '/images/courses/courses3.jpg',
    category: 'Technical Skills',
  },
  {
    id: 4,
    title: 'Technology for Industrial Process',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.7, // Not found in PDF
    // students: 2100, // Not found in PDF
    image: '/images/courses/courses4.jpg',
    category: 'Technical Skills',
  },
  {
    id: 5,
    title: 'Managerial Skills & Entrepreneurship',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.6, // Not found in PDF
    // students: 2800, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
  },
  {
    id: 6,
    title: 'Ability Enhancement Course',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 2500,
    // rating: 4.8, // Not found in PDF
    // students: 1500, // Not found in PDF
    image: '/images/courses/courses2.jpg',
    category: 'Soft Skills',
  },
  {
    id: 7,
    title: 'Vibe Coding - Code with AI',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 22000,
    // rating: 4.7, // Not found in PDF
    // students: 1200, // Not found in PDF
    image: '/images/courses/courses3.jpg',
    category: 'Technical Skills',
  },
  {
    id: 8,
    title: 'Supply Chain Management',
    // instructor: 'Expert Faculty', // Not found in PDF - PDF has "Name of the Faculty:" placeholder
    price: 0,
    // rating: 4.8, // Not found in PDF
    // students: 1900, // Not found in PDF
    image: '/images/courses/courses4.jpg',
    category: 'Management Skills',
  },
  {
    id: 9,
    title: 'Sales Training',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.7, // Not found in PDF
    // students: 2400, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
  },
];

const categories = [
  'Technical Skills',
  'AI Skills',
  'Management Skills',
  'Soft Skills',
  'Upscaling Skills',
  'Women Empowerment',
  'Profession / Trade',
];

export default function Courses() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter courses based on selected category
  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses.slice(0, 6); // Show first 6 courses by default

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if already selected
    } else {
      setSelectedCategory(category);
    }
  };

  const handleViewAllClick = () => {
    if (selectedCategory) {
      // Redirect to courses page with category filter
      router.push(`/courses?category=${encodeURIComponent(selectedCategory)}`);
    } else {
      router.push('/courses');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link href="/courses" className="block">
          <div className="text-center mb-12 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-2xl bg-white/50 hover:bg-white">
            <h2 className="text-4xl font-bold text-black mb-4 group-hover:text-primary transition-colors">
              Legacy to Literacy – The New AGE Skills
            </h2>
            <p className="text-lg text-paragraph max-w-3xl mx-auto mb-6 group-hover:text-black transition-colors">
              &quot;AI won&apos;t take your jobs but AI literate will&quot; - Andrew Ng (Google)
            </p>
            <p className="text-lg text-paragraph max-w-3xl mx-auto mb-6 group-hover:text-black transition-colors">
              &quot;All of us have no equal talent – yet all of us have equal opportunity to develop talent&quot; - Ratan Tata (TATA)
            </p>
            <p className="text-lg text-paragraph max-w-3xl mx-auto group-hover:text-black transition-colors">
              &quot;Our industry does not respect tradition, it only respects innovation&quot; - Satya Nadella (Microsoft)
            </p>
            <div className="mt-4 text-primary font-semibold group-hover:underline">
              Explore All Courses →
            </div>
          </div>
        </Link>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full font-medium transition shadow-sm ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAllClick}
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            View All Courses
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
