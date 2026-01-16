const features = [
  {
    icon: '🎯',
    title: 'Career Guidance & Life Skills',
    description: 'Structured career counselling, aptitude mapping (DMIT), and E4 (English, Economics, Eloquence & Etiquette) development.',
  },
  {
    icon: '💼',
    title: 'Technical Skills Development',
    description: 'Industry-aligned training in traditional and emerging sectors like EV, Solar, Construction, Drones, and more.',
  },
  {
    icon: '🥽',
    title: 'AR/VR Lab Facility',
    description: 'Immersive, real-time practical training using AR/VR tools with over 1,500 skill-based courses across disciplines.',
  },
  {
    icon: '🤖',
    title: 'Centre of Excellence',
    description: 'Powered by AI, AIoT, 3D Printing & Robotics. Hands-on innovation through practical projects aligned with Industry 4.0.',
  },
  {
    icon: '📚',
    title: 'Skilling for Every Profession',
    description: 'From Arts/Commerce/Science to Engineers, Lawyers, Traders, Women entrepreneurs, and MSMEs.',
  },
  {
    icon: '🚀',
    title: 'Incubation & Start-up Support',
    description: 'Mentorship from concept to commercial success with prototype development and business planning support.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Youth Empowerment Program</h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Comprehensive skill development programs designed to transform youth into confident professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-paragraph">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
