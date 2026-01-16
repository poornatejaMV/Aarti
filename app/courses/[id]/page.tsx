import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

// Course data structure
const coursesData: Record<string, any> = {
  '1': {
    title: 'Advanced AI & ML Development',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 27000,
    // rating: 4.9, // Not found in PDF
    // students: 2500, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'AI Skills',
    description: 'This course is for UG/PG Engineering & Computer Science students and aspiring AI engineers who want to build and deploy real AI systems even having no prior AI knowledge. Master the math & analytics foundations behind AI, build & deploy ML/DL/LLM systems from scratch, and graduate with real-world capstone projects.',
    duration: '100 hours',
    level: 'Intermediate to Advanced',
    language: 'English',
    includes: [
      '90+ hours of advanced hands-on training',
      'GPU-powered labs',
      'Industry-grade projects',
      'GitHub-hosted portfolio',
      'Certificate of completion',
    ],
    curriculum: [
      { id: 1, title: 'Module 1: Introduction to AI Development', duration: '6 hours', description: 'Understanding the fundamentals of AI development and the AI landscape.' },
      { id: 2, title: 'Module 2: Modern popular AI Landscape & Setup', duration: '4 hours', description: 'Explore the current AI ecosystem and set up development environments.' },
      { id: 3, title: 'Module 3: Data Handling & Pre-processing', duration: '8 hours', description: 'Master data collection, cleaning, and preprocessing techniques for AI models.' },
      { id: 4, title: 'Module 4: Machine Learning basics- Lab & Evaluation', duration: '6 hours', description: 'Learn core ML concepts with hands-on labs and evaluation methods.' },
      { id: 5, title: 'Module 5: Deep Learning Foundations', duration: '10 hours', description: 'Deep dive into neural networks, CNNs, RNNs, and deep learning architectures.' },
      { id: 6, title: 'Module 6: Transformer architecture & LLMs', duration: '12 hours', description: 'Understand transformer architecture and Large Language Models (LLMs).' },
      { id: 7, title: 'Module 7: Advanced AI Techniques', duration: '12 hours', description: 'Explore advanced AI techniques and cutting-edge methodologies.' },
      { id: 8, title: 'Module 8: Retrieval-Augmented Generation (RAG) & Vector Databases', duration: '8 hours', description: 'Learn RAG systems and vector database integration for enhanced AI applications.' },
      { id: 9, title: 'Module 9: MLOps & Deployment', duration: '10 hours', description: 'Master MLOps pipelines for production readiness and deployment strategies.' },
      { id: 10, title: 'Module 10: AI Safety, Security & Ethics', duration: '4 hours', description: 'Understand ethical AI practices, safety measures, and security considerations.' },
      { id: 11, title: 'Module 11: Capstone hands-on Projects', duration: '10+ hours', description: 'Build 3 real-world capstone projects to showcase your skills.' },
    ],
    learningOutcomes: [
      'Understand the math & analytics foundations behind AI',
      'Build & deploy ML/DL/LLM systems from scratch',
      'Design & deploy RAG-powered AI systems',
      'Apply MLOps pipelines for production readiness',
      'Graduate with 3 real-world capstone projects',
    ],
    targetAudience: [
      'UG/PG Engineering students',
      'Computer Science students',
      'Aspiring AI engineers',
      'Software developers looking to transition to AI',
    ],
  },
  '2': {
    title: 'Prompt Engineering Course',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 7000,
    // rating: 4.8, // Not found in PDF
    // students: 3200, // Not found in PDF
    image: '/images/courses/courses2.jpg',
    category: 'AI Skills',
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
    curriculum: [
      { id: 1, title: 'Module 1: Foundations of Prompt Engineering', duration: '3 hours', description: 'Understanding the fundamentals of prompt engineering and how LLMs work under the hood.' },
      { id: 2, title: 'Module 2: Getting Started with Prompting', duration: '4 hours', description: 'Learn the basics of creating effective prompts and understanding AI responses.' },
      { id: 3, title: 'Module 3: Reasoning Approaches', duration: '5 hours', description: 'Master advanced reasoning techniques including Chain of Thought (CoT) and Tree of Thought (ToT).' },
      { id: 4, title: 'Module 4: Context Management & Control', duration: '5 hours', description: 'Learn to manage context effectively and design structured outputs for AI interactions.' },
      { id: 5, title: 'Module 5: Applied Advanced Techniques', duration: '5 hours', description: 'Explore advanced prompting patterns including Persona, Chaining, and Meta prompting.' },
      { id: 6, title: 'Module 6: Ethics & Responsible AI Use', duration: '3 hours', description: 'Understand ethical considerations and best practices for responsible AI prompting.' },
      { id: 7, title: 'Module 7: Evaluation & Optimization', duration: '3 hours', description: 'Learn to evaluate and optimize prompts for cost, performance, and reliability.' },
      { id: 8, title: 'Module 8: Real-World Use Cases & Projects', duration: '2 hours', description: 'Build mini-projects for real-world industry use cases across various domains.' },
    ],
    learningOutcomes: [
      'Understand how LLMs work under the hood',
      'Use prompting patterns effectively (Persona, CoT, ToT, Chaining, Meta)',
      'Manage context and design structured outputs',
      'Apply ethical and responsible prompting practices',
      'Evaluate and optimize prompts for cost, performance, and reliability',
      'Build mini-projects for real-world industry use cases',
    ],
    targetAudience: [
      'Fresh Graduates',
      'Working Professionals (non-tech & tech)',
      'Anyone who wants to integrate AI into their jobs',
      'Marketing, HR, Sales, Operations professionals',
      'Teaching professionals',
      'Software developers',
    ],
  },
  '3': {
    title: 'Industrial Automation & Robotics',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 2000,
    // rating: 4.9, // Not found in PDF
    batchSize: 30, // From PDF: "for a batch of 30 students"
    image: '/images/courses/courses3.jpg',
    category: 'Technical Skills',
    description: 'Understanding basics of automation and PLCs are the backbone of industrial automation; knowledge of ladder logic, wiring, and troubleshooting is essential for working in Production or Maintenance department of any organisation. This course combines hardware & PLC hands-on practice with simulation to build practical troubleshooting skills.',
    duration: 'One week (2-3 hrs/Day)',
    level: 'Beginner to Intermediate',
    language: 'English',
    includes: [
      'Certificate course completion',
      'Hands-on PLC programming practice',
      'Industrial robotics programming',
      'Hardware & simulation training',
      'Troubleshooting skills development',
      'Batch size: 30 students per batch',
    ],
    curriculum: [
      { id: 1, title: 'Basics of Automation Components', duration: '2-3 hours', description: 'Introduction to automation components and their applications in industrial settings.' },
      { id: 2, title: 'Basics of Electrical, Electronics, and Mechanical for Automation', duration: '2-3 hours', description: 'Fundamental concepts of electrical, electronics, and mechanical systems in automation.' },
      { id: 3, title: 'Industrial Robotics Programming & Integration', duration: '2-3 hours', description: 'Learn to program and integrate industrial robots for manufacturing processes.' },
      { id: 4, title: 'PLC Programming & Troubleshooting', duration: '2-3 hours', description: 'Master ladder logic, PLC programming, wiring, and troubleshooting techniques.' },
    ],
    learningOutcomes: [
      'Understand automation components and their applications',
      'Master PLC programming and ladder logic',
      'Program and integrate industrial robots',
      'Develop practical troubleshooting skills',
      'Apply knowledge in Production or Maintenance departments',
    ],
    targetAudience: [
      'Diploma/Degree in Mechanical/Electrical/Instrumentation',
      'Maintenance engineers',
      'Automation trainees',
      'Production department professionals',
    ],
  },
  '4': {
    title: 'Technology for Industrial Process',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.7, // Not found in PDF
    // students: 2100, // Not found in PDF
    image: '/images/courses/courses4.jpg',
    category: 'Technical Skills',
    description: 'Comprehensive training on modern technologies used in industrial processes. Learn to optimize industrial operations through technology integration.',
    duration: '40 hours',
    level: 'Intermediate',
    language: 'English',
    includes: [
      '40 hours of training',
      'Industry case studies',
      'Certificate of completion',
      'Hands-on workshops',
      'Technical documentation',
    ],
    curriculum: [
      { id: 1, title: 'Introduction to Industrial Technology', duration: '4 hours' },
      { id: 2, title: 'Process Optimization Techniques', duration: '6 hours' },
      { id: 3, title: 'Industrial IoT Integration', duration: '8 hours' },
      { id: 4, title: 'Data Analytics for Industry', duration: '8 hours' },
      { id: 5, title: 'Quality Control Systems', duration: '6 hours' },
      { id: 6, title: 'Case Studies & Projects', duration: '8 hours' },
    ],
    learningOutcomes: [
      'Understand modern industrial technologies',
      'Optimize industrial processes',
      'Integrate IoT solutions',
      'Apply data analytics in industry',
      'Implement quality control systems',
    ],
    targetAudience: [
      'Industrial engineers',
      'Process engineers',
      'Production managers',
      'Quality control professionals',
    ],
  },
  '5': {
    title: 'Managerial Skills & Entrepreneurship',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.6, // Not found in PDF
    // students: 2800, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
    description: 'Develop essential managerial skills and entrepreneurial mindset. Learn to lead teams, manage resources, and build successful businesses.',
    duration: '50 hours',
    level: 'All Levels',
    language: 'English',
    includes: [
      '50 hours of comprehensive training',
      'Business case studies',
      'Certificate of completion',
      'Entrepreneurship toolkit',
      'Networking opportunities',
    ],
    curriculum: [
      { id: 1, title: 'Introduction to Management', duration: '4 hours' },
      { id: 2, title: 'Leadership & Team Building', duration: '6 hours' },
      { id: 3, title: 'Strategic Planning', duration: '6 hours' },
      { id: 4, title: 'Financial Management', duration: '8 hours' },
      { id: 5, title: 'Entrepreneurship Fundamentals', duration: '8 hours' },
      { id: 6, title: 'Business Development', duration: '8 hours' },
      { id: 7, title: 'Marketing & Sales', duration: '6 hours' },
      { id: 8, title: 'Capstone Project', duration: '4 hours' },
    ],
    learningOutcomes: [
      'Develop strong leadership skills',
      'Master strategic planning',
      'Understand financial management',
      'Build entrepreneurial mindset',
      'Create business plans',
    ],
    targetAudience: [
      'Aspiring managers',
      'Entrepreneurs',
      'Business professionals',
      'Team leaders',
    ],
  },
  '6': {
    title: 'Ability Enhancement Course',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 2500,
    // rating: 4.8, // Not found in PDF
    // students: 1500, // Not found in PDF
    image: '/images/courses/courses2.jpg',
    category: 'Soft Skills',
    description: 'This course is designed to support participants in achieving excellence throughout their professional lives. It aims to empower individuals to establish a strong position not only in their careers but also in society and across various aspects of life.',
    duration: '60 hours',
    level: 'All Levels',
    language: 'English',
    includes: [
      '60 hours of certificate course',
      'Etiquette and social skills training',
      'Personal development modules',
      'Communication skills enhancement',
      'Professional skills development',
      'Certificate of completion',
    ],
    curriculum: [
      { id: 1, title: 'Etiquette and Social Skills', duration: '15 hours', description: 'Master professional etiquette and social skills for workplace and society.' },
      { id: 2, title: 'Personal Development Skills', duration: '15 hours', description: 'Develop personal growth, self-awareness, and life management skills.' },
      { id: 3, title: 'Communication Skills', duration: '15 hours', description: 'Enhance communication including listening skills and the ability to articulate ideas effectively.' },
      { id: 4, title: 'Professional Skills', duration: '15 hours', description: 'Master professional skills including facing interviews, group discussions, and team-building exercises.' },
    ],
    learningOutcomes: [
      'Develop professional etiquette and social skills',
      'Enhance personal development and self-awareness',
      'Master effective communication techniques',
      'Excel in interviews and group discussions',
      'Build strong professional relationships',
      'Establish a strong position in career and society',
    ],
    targetAudience: [
      'Diploma/Degree in Mechanical/Electrical/Instrumentation',
      'Maintenance engineers',
      'Automation trainees',
      'Fresh graduates',
      'Working professionals seeking skill enhancement',
    ],
  },
  '7': {
    title: 'Vibe Coding - Code with AI',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 22000,
    // rating: 4.7, // Not found in PDF
    // students: 1200, // Not found in PDF
    image: '/images/courses/courses3.jpg',
    category: 'Technical Skills',
    description: 'The course is for UG/PG students & fresh graduates of any discipline, want to enter into software development field having no prior coding experience. But basic computer literacy is a must. Learn to code with AI assistance and build real-world applications.',
    duration: '60-70 hours',
    level: 'Beginner',
    language: 'English',
    includes: [
      '60-70 hours of structured learning',
      'Hands-on coding labs',
      'AI-driven exercises',
      '2 capstone projects',
      'GitHub hosting',
      'Completion certificate',
    ],
    curriculum: [
      { id: 1, title: 'Module 1: Introduction to Coding with AI', duration: '3 hours', description: 'Get introduced to coding concepts and how AI can assist in development.' },
      { id: 2, title: 'Module 2: Understanding Tech Stacks', duration: '5 hours', description: 'Learn about different technology stacks and their applications.' },
      { id: 3, title: 'Module 3: Software Development Fundamentals', duration: '5 hours', description: 'Master fundamental software development concepts and practices.' },
      { id: 4, title: 'Module 4: Setting Up Development Environments', duration: '4 hours', description: 'Set up and configure development environments for coding.' },
      { id: 5, title: 'Module 5: Prompt Engineering for Coders', duration: '10 hours', description: 'Learn prompt engineering techniques specifically adapted for coding tasks (adapted from Prompt Engineering Course but with coding in focus).' },
      { id: 6, title: 'Module 6: Building Apps with AI Assistance', duration: '10 hours', description: 'Build applications using AI assistance and modern development tools.' },
      { id: 7, title: 'Module 7: Git & GitHub Essentials', duration: '5 hours', description: 'Master version control with Git and GitHub for collaborative development.' },
      { id: 8, title: 'Module 8: Real-World Coding Practices', duration: '8 hours', description: 'Learn industry best practices and real-world coding standards.' },
      { id: 9, title: 'Module 9: Capstone Projects – Simple, Advanced & Chatbot', duration: '10 hours', description: 'Build three capstone projects: simple app, advanced app, and chatbot.' },
    ],
    learningOutcomes: [
      'Understand coding fundamentals with AI assistance',
      'Master modern tech stacks',
      'Build applications using AI tools',
      'Use Git and GitHub for version control',
      'Apply real-world coding practices',
      'Complete 3 capstone projects',
    ],
    targetAudience: [
      'UG/PG students of any discipline',
      'Fresh graduates',
      'Anyone wanting to enter software development',
      'Professionals seeking coding skills',
    ],
  },
  '8': {
    title: 'Supply Chain Management',
    // instructor: 'Expert Faculty', // Not found in PDF - PDF has "Name of the Faculty:" placeholder
    price: 0,
    // rating: 4.8, // Not found in PDF
    // students: 1900, // Not found in PDF
    image: '/images/courses/courses4.jpg',
    category: 'Management Skills',
    description: 'Industry Led Program designed by Industry, delivered by Industry, and evaluated by Industry. This course will provide required skills and knowledge to educate individuals and enhance performance in the area of Supply Chain Management (SCM).',
    duration: '112 hours',
    level: 'Intermediate',
    language: 'English',
    includes: [
      '112 hours of comprehensive training',
      '10 comprehensive modules',
      'Industry-led program',
      'Certificate of completion',
      'Real-world case studies',
      'Practical applications',
    ],
    curriculum: [
      { id: 1, title: 'Module 1: Introduction to Trade and the Supply Chain', duration: '8 hours', description: 'Understanding the fundamentals of trade and supply chain management.' },
      { id: 2, title: 'Module 2: Movement of Goods, People, Animals and Information', duration: '10 hours', description: 'Learn about logistics and movement management in supply chains.' },
      { id: 3, title: 'Module 3: Logistics, Distribution and the Supply Chain', duration: '12 hours', description: 'Master logistics and distribution strategies in supply chain operations.' },
      { id: 4, title: 'Module 4: Warehousing and Inventory Management', duration: '12 hours', description: 'Understand warehousing operations and effective inventory management techniques.' },
      { id: 5, title: 'Module 5: Operations Management', duration: '10 hours', description: 'Learn operations management principles in supply chain context.' },
      { id: 6, title: 'Module 6: Procurement, Sourcing and Contracting of Services', duration: '14 hours', description: 'Master procurement strategies, sourcing, and service contracting.' },
      { id: 7, title: 'Module 7: Business Management in SCM', duration: '15 hours', description: 'Understand business management principles specific to supply chain operations.' },
      { id: 8, title: 'Module 8: Finance in SCM', duration: '15 hours', description: 'Learn financial management and cost optimization in supply chains.' },
      { id: 9, title: 'Module 9: Supply Chain Sustainability', duration: '8 hours', description: 'Explore sustainable practices and environmental considerations in SCM.' },
      { id: 10, title: 'Module 10: Recent and Emerging Trends in SCM', duration: '8 hours', description: 'Stay updated with latest trends and innovations in supply chain management.' },
    ],
    learningOutcomes: [
      'Understand comprehensive supply chain management principles',
      'Master logistics, distribution, and warehousing',
      'Apply procurement and sourcing strategies',
      'Manage supply chain operations effectively',
      'Understand financial aspects of SCM',
      'Implement sustainable supply chain practices',
      'Stay updated with emerging trends',
    ],
    targetAudience: [
      'Supply chain professionals',
      'Logistics managers',
      'Operations managers',
      'Procurement professionals',
      'Business professionals',
      'Students pursuing management',
    ],
  },
  '9': {
    title: 'Sales Training',
    // instructor: 'Expert Faculty', // Not found in PDF
    price: 0,
    // rating: 4.7, // Not found in PDF
    // students: 2400, // Not found in PDF
    image: '/images/courses/courses1.jpg',
    category: 'Management Skills',
    description: 'Industry leading training to accelerate your career growth. We have developed a proven, reliable way to understand the development needs of sales professionals. Based on those needs, we provide training in both skills and methodologies through innovative case studies that bring learning to life in the daily workflow of sales professionals.',
    duration: '40-50 hours',
    level: 'All Levels',
    language: 'English',
    includes: [
      '40-50 hours of comprehensive training',
      'Innovative case studies',
      'Sales tools and methodologies',
      'Immersive learning journey',
      'Certificate of completion',
      'Practical sales techniques',
    ],
    curriculum: [
      { id: 1, title: 'Module 1: Getting Started', duration: '4 hours', description: 'Welcome to the Sales Fundamentals workshop. Learn the basic sales process and tools to seal the deal, no matter what the size of the sale.' },
      { id: 2, title: 'Module 2: Understanding the Talk', duration: '5 hours', description: 'Learn the types of sales, common sales approaches, and sales terminology. Master the language of sales to feel more confident and prepared.' },
      { id: 3, title: 'Module 3: Getting Prepared to Make the Call', duration: '5 hours', description: 'Learn about your client needs, how to meet those needs, and prepare for successful sales conversations.' },
      { id: 4, title: 'Module 4: Creative Openings', duration: '5 hours', description: 'Master the art of making a good first impression with creative openings for warm calls, cold calls, and referral openings.' },
      { id: 5, title: 'Module 5: Making Your Pitch', duration: '6 hours', description: 'Learn to create clear, persuasive explanations of what your product can do for the client. Understand features, benefits, and unique selling positions.' },
      { id: 6, title: 'Module 6: Handling Objections', duration: '6 hours', description: 'Master strategies to overcome customer objections with calm, rational responses and additional information.' },
      { id: 7, title: 'Module 7: Sealing the Deal', duration: '5 hours', description: 'Understand when it\'s time to close and how to go about doing it effectively without pressuring customers.' },
    ],
    learningOutcomes: [
      'Master the fundamental sales process',
      'Understand sales terminology and approaches',
      'Prepare effectively for sales calls',
      'Create compelling sales pitches',
      'Handle customer objections professionally',
      'Close deals effectively',
      'Build strong customer relationships',
    ],
    targetAudience: [
      'Sales professionals',
      'Business development executives',
      'Account managers',
      'Aspiring sales professionals',
      'Entrepreneurs',
      'Marketing professionals',
    ],
  },
};

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const courseData = coursesData[params.id] || coursesData['1'];
  const course = {
    id: params.id,
    ...courseData,
  };

  const curriculum = courseData.curriculum || [];
  const learningOutcomes = courseData.learningOutcomes || [];
  const targetAudience = courseData.targetAudience || null;

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
                  {/* Rating, students, and instructor not found in PDFs - commented out */}
                  {/* <div className="flex items-center space-x-4 mb-4">
                    {course.rating && (
                      <>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-black font-semibold ml-1">{course.rating}</span>
                          {course.students && (
                            <span className="text-body ml-2">({course.students.toLocaleString()} students)</span>
                          )}
                        </div>
                        {course.instructor && (
                          <>
                            <span className="text-body">•</span>
                            <span className="text-body">by {course.instructor}</span>
                          </>
                        )}
                      </>
                    )}
                  </div> */}
                  <p className="text-body text-lg mb-6">{course.description}</p>

                  {targetAudience && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold text-black mb-2">Who is this course for?</h3>
                      <ul className="list-disc list-inside text-body space-y-1">
                        {targetAudience.map((audience: string, index: number) => (
                          <li key={index}>{audience}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <h2 className="text-2xl font-bold text-black mb-4">Final Outcomes</h2>
                  <p className="text-body mb-4">By the end of this course, participants will:</p>
                  <ul className="list-disc list-inside text-body space-y-2 mb-6">
                    {learningOutcomes.map((outcome: string, index: number) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold text-black mb-4">Course Curriculum</h2>
                  <div className="space-y-3">
                    {curriculum.map((item: { id: number; title: string; duration: string; description?: string }) => (
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
                        {course.batchSize && (
                          <div className="text-sm text-body font-normal mt-2">
                            per participant (batch of {course.batchSize} students)
                          </div>
                        )}
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
                    {course.batchSize && (
                      <div className="flex items-center">
                        <span className="font-semibold mr-2">Batch Size:</span>
                        {course.batchSize} students per batch
                      </div>
                    )}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold text-black mb-2">This course includes:</h3>
                    <ul className="space-y-2 text-body">
                      {course.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {(params.id === '1' || params.id === '2' || params.id === '3' || params.id === '6' || params.id === '7' || params.id === '8' || params.id === '9') && (
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
