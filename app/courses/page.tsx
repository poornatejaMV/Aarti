'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const allCourses = [
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

const professions = [
  { name: 'Lawyers', emoji: '👨‍⚖️' },
  { name: 'Doctors', emoji: '👨‍⚕️' },
  { name: 'Teachers', emoji: '👨‍🏫' },
  { name: 'Engineers', emoji: '👨‍💼' },
  { name: 'Business Professionals', emoji: '💼' },
  { name: 'Traders', emoji: '🛒' },
  { name: 'Entrepreneurs', emoji: '👩‍💼' },
  { name: 'Students', emoji: '🎓' },
];

function CoursesPageContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  // Initialize category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter courses based on selected category
  const filteredCourses = allCourses.filter((course) => {
    if (selectedCategory && course.category !== selectedCategory) {
      return false;
    }
    // Profession filtering can be added later if we have profession-specific data
    return true;
  });

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if already selected
    } else {
      setSelectedCategory(category);
    }
  };

  const handleProfessionClick = (profession: string) => {
    if (selectedProfession === profession) {
      setSelectedProfession(null); // Deselect if already selected
    } else {
      setSelectedProfession(profession);
      // For now, profession filter shows all courses
      // Can be enhanced later with profession-specific course mapping
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold text-white text-center mb-4">All Courses</h1>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
              Skilling for every profession - From Arts/Commerce/Science to Engineers, Lawyers, Traders, Women entrepreneurs, and MSMEs
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Main Category Filters */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4">
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
            </div>

            {/* Profession Filter Section */}
            <div className="mb-10 bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-black mb-2">Filter by Profession</h3>
                <p className="text-sm text-paragraph">Find courses tailored to your profession</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {professions.map((profession) => (
                  <button
                    key={profession.name}
                    onClick={() => handleProfessionClick(profession.name)}
                    className={`px-5 py-2 rounded-lg font-medium transition shadow-sm ${
                      selectedProfession === profession.name
                        ? 'bg-gradient-to-r from-primary to-secondary text-white border-2 border-primary'
                        : 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/30 hover:from-primary/20 hover:to-secondary/20'
                    }`}
                  >
                    {profession.emoji} {profession.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            {(selectedCategory || selectedProfession) && (
              <div className="mb-6 text-center">
                <p className="text-body">
                  Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                  {selectedCategory && ` in ${selectedCategory}`}
                  {selectedProfession && ` for ${selectedProfession}`}
                </p>
              </div>
            )}

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-body">No courses found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedProfession(null);
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main>
          <section className="bg-primary py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-white text-center mb-4">All Courses</h1>
            </div>
          </section>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <p className="text-body">Loading courses...</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    }>
      <CoursesPageContent />
    </Suspense>
  );
}
