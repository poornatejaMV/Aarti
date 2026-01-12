import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  // Course data - for Prompt Engineering (id: 2)
  const isPromptEngineering = params.id === '2';
  
  const course = isPromptEngineering ? {
    id: params.id,
    title: 'Prompt Engineering Course',
    instructor: 'Expert Faculty',
    price: 7000,
    rating: 4.8,
    students: 3200,
    image: '/images/courses/courses2.jpg',
    category: 'Arts/Commerce/Science',
    description: 'This course is for anyone wants to create anything through AI in any areas of science, arts or commerce. It translates your intent into specific and effective instruction to AI for generating accurate and relevant content.',
    duration: '30 hours',
    level: 'All Levels',
    language: 'English',
    includes: [
      '30 hours of training (theory + labs)',
      'Community-based peer learning',
      'Certificate of completion',
      'Real-world industry use cases',
      'Hands-on projects',
    ],
  } : {
    id: params.id,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Expert Faculty',
    price: 0,
    rating: 4.8,
    students: 12500,
    image: '/images/courses/courses1.jpg',
    category: 'Web Development',
    description: 'Learn web development from scratch with this comprehensive bootcamp. Master HTML, CSS, JavaScript, React, Node.js, and more.',
    duration: '40 hours',
    level: 'Beginner to Advanced',
    language: 'English',
    includes: [
      '40 hours on-demand video',
      '50+ downloadable resources',
      'Certificate of completion',
      'Lifetime access',
      'Mobile and TV access',
    ],
  };

  const curriculum = isPromptEngineering ? [
    { id: 1, title: 'Module 1: Foundations of Prompt Engineering', duration: '3 hours', description: 'Understanding the fundamentals of prompt engineering and how LLMs work under the hood.' },
    { id: 2, title: 'Module 2: Getting Started with Prompting', duration: '4 hours', description: 'Learn the basics of creating effective prompts and understanding AI responses.' },
    { id: 3, title: 'Module 3: Reasoning Approaches', duration: '5 hours', description: 'Master advanced reasoning techniques including Chain of Thought (CoT) and Tree of Thought (ToT).' },
    { id: 4, title: 'Module 4: Context Management & Control', duration: '5 hours', description: 'Learn to manage context effectively and design structured outputs for AI interactions.' },
    { id: 5, title: 'Module 5: Applied Advanced Techniques', duration: '5 hours', description: 'Explore advanced prompting patterns including Persona, Chaining, and Meta prompting.' },
    { id: 6, title: 'Module 6: Ethics & Responsible AI Use', duration: '3 hours', description: 'Understand ethical considerations and best practices for responsible AI prompting.' },
    { id: 7, title: 'Module 7: Evaluation & Optimization', duration: '3 hours', description: 'Learn to evaluate and optimize prompts for cost, performance, and reliability.' },
    { id: 8, title: 'Module 8: Real-World Use Cases & Projects', duration: '2 hours', description: 'Build mini-projects for real-world industry use cases across various domains.' },
  ] : [
    { id: 1, title: 'Introduction to Web Development', duration: '2 hours' },
    { id: 2, title: 'HTML & CSS Fundamentals', duration: '5 hours' },
    { id: 3, title: 'JavaScript Basics', duration: '8 hours' },
    { id: 4, title: 'React.js Deep Dive', duration: '10 hours' },
    { id: 5, title: 'Node.js & Express', duration: '8 hours' },
    { id: 6, title: 'Database Integration', duration: '5 hours' },
    { id: 7, title: 'Deployment & DevOps', duration: '2 hours' },
  ];

  const learningOutcomes = isPromptEngineering ? [
    'Understand how LLMs work under the hood',
    'Use prompting patterns effectively (Persona, CoT, ToT, Chaining, Meta)',
    'Manage context and design structured outputs',
    'Apply ethical and responsible prompting practices',
    'Evaluate and optimize prompts for cost, performance, and reliability',
    'Build mini-projects for real-world industry use cases',
  ] : [
    'Build modern, responsive websites',
    'Master JavaScript and React',
    'Create full-stack applications',
    'Deploy applications to production',
    'Work with databases and APIs',
  ];

  const targetAudience = isPromptEngineering ? [
    'Fresh Graduates',
    'Working Professionals (non-tech & tech)',
    'Anyone who wants to integrate AI into their jobs',
    'Marketing, HR, Sales, Operations professionals',
    'Teaching professionals',
    'Software developers',
  ] : null;

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                  <div className="relative h-96 bg-gray-200">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h1 className="text-3xl font-bold text-black mb-4">{course.title}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-black font-semibold ml-1">{course.rating}</span>
                      <span className="text-body ml-2">({course.students.toLocaleString()} students)</span>
                    </div>
                    <span className="text-body">•</span>
                    <span className="text-body">by {course.instructor}</span>
                  </div>
                  <p className="text-body text-lg mb-6">{course.description}</p>

                  {targetAudience && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold text-black mb-2">Who is this course for?</h3>
                      <ul className="list-disc list-inside text-body space-y-1">
                        {targetAudience.map((audience, index) => (
                          <li key={index}>{audience}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-black mb-4">Final Outcomes</h2>
                  <p className="text-body mb-4">By the end of this course, participants will:</p>
                  <ul className="list-disc list-inside text-body space-y-2 mb-6">
                    {learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold text-black mb-4">Course Curriculum</h2>
                  <div className="space-y-3">
                    {curriculum.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                            {'description' in item && item.description && (
                              <p className="text-sm text-body">{item.description}</p>
                            )}
                          </div>
                          <div className="ml-4">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {course.price === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <>
                        ₹{course.price.toLocaleString()}
                        <span className="text-lg text-body font-normal"> + GST</span>
                      </>
                    )}
                  </div>
                  <Link
                    href="/register"
                    className="block w-full bg-primary text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition mb-4"
                  >
                    Enroll Now
                  </Link>
                  <div className="space-y-4 text-body">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Duration:</span>
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Level:</span>
                      {course.level}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Language:</span>
                      {course.language}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Category:</span>
                      {course.category}
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold text-black mb-2">This course includes:</h3>
                    <ul className="space-y-2 text-body">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {isPromptEngineering && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                        <p className="text-sm text-body text-center">
                          <strong className="text-black">Partner:</strong> Escalating Abilities LLP
                        </p>
                        <p className="text-xs text-body text-center mt-2">
                          Branches: Delhi | Mumbai | Kolkata | Raipur | Pune | Aurangabad
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
