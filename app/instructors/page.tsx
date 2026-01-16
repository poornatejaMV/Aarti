import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Senior Web Developer',
    image: '/images/team/team1.jpg',
    bio: '10+ years of experience in web development. Former lead developer at Google.',
    courses: 12,
    students: 50000,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Data Scientist',
    image: '/images/team/team2.jpg',
    bio: 'PhD in Computer Science. Expert in machine learning and data analysis.',
    courses: 8,
    students: 35000,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    image: '/images/team/team3.jpg',
    bio: 'Award-winning designer with 15+ years of experience. Worked with top tech companies.',
    courses: 15,
    students: 60000,
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Mobile App Developer',
    image: '/images/team/team4.jpg',
    bio: 'iOS and Android expert. Created multiple successful apps with millions of downloads.',
    courses: 10,
    students: 40000,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'David Brown',
    role: 'Digital Marketing Expert',
    image: '/images/team/team5.jpg',
    bio: 'Helped hundreds of businesses grow their online presence. SEO and social media specialist.',
    courses: 9,
    students: 28000,
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Emily Davis',
    role: 'Python Developer',
    image: '/images/team/team6.jpg',
    bio: 'Python enthusiast and educator. Author of multiple programming books.',
    courses: 11,
    students: 45000,
    rating: 4.8,
  },
];

export default function InstructorsPage() {
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
            <h1 className="text-5xl font-bold text-white text-center mb-4">Our Educators</h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span>Educators</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-1">{instructor.name}</h3>
                    <p className="text-secondary font-medium mb-3">{instructor.role}</p>
                    <p className="text-paragraph mb-4 text-sm">{instructor.bio}</p>
                    <div className="flex items-center justify-between text-sm text-paragraph mb-4 pt-4 border-t">
                      <div>
                        <span className="font-bold text-black">{instructor.courses}</span> Courses
                      </div>
                      <div>
                        <span className="font-bold text-black">{instructor.students.toLocaleString()}</span> Students
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="font-bold text-black ml-1">{instructor.rating}</span>
                      </div>
                    </div>
                    <Link
                      href={`/courses?instructor=${instructor.id}`}
                      className="block w-full bg-primary text-white text-center px-4 py-3 rounded-full font-semibold hover:bg-secondary transition"
                    >
                      View Courses
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
