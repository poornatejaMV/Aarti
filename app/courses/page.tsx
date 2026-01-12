import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const allCourses = [
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
  {
    id: 7,
    title: 'AI Drafting & Legal Research',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.7,
    students: 1200,
    image: '/images/courses/courses3.jpg',
    category: 'Law',
  },
  {
    id: 8,
    title: 'AI Billing & Inventory Management',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.6,
    students: 1900,
    image: '/images/courses/courses4.jpg',
    category: 'Retail/Trade',
  },
  {
    id: 9,
    title: 'Home-Business Skills & Digital Tools',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.8,
    students: 2200,
    image: '/images/courses/courses1.jpg',
    category: 'Women Empowerment',
  },
  {
    id: 10,
    title: 'Drones & Construction Technology',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.7,
    students: 1600,
    image: '/images/courses/courses2.jpg',
    category: 'Emerging Sectors',
  },
  {
    id: 11,
    title: 'AI Automation for MSMEs',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.6,
    students: 2400,
    image: '/images/courses/courses3.jpg',
    category: 'MSME',
  },
  {
    id: 12,
    title: 'Cybersecurity & AI Research',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.9,
    students: 1300,
    image: '/images/courses/courses4.jpg',
    category: 'Technology',
  },
];

export default function CoursesPage() {
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
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-secondary text-white px-6 py-2 rounded-full font-medium">
                  All Courses
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  Engineering/ITI
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  Arts/Commerce/Science
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  Emerging Sectors
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  Technology
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  Women Empowerment
                </button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition shadow-sm">
                  MSME
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
