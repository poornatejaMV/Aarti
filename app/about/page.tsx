import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-black text-center mb-4">About AARTI</h1>
            <p className="text-xl text-body text-center max-w-3xl mx-auto">
              Aausaheb Research and Training Institute - A Youth Empowerment Movement
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Legacy Section */}
              <div className="mb-16 bg-primary py-12 px-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Aausaheb&apos;s Legacy
                </h2>
                <p className="text-xl text-center text-white/90 mb-8 italic">
                  &quot;From Jijau&apos;s Sanskar to AI-driven Skills - Shaping Brave, Bright, and Self-Reliant Minds&quot;
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Instilled Courage and Discipline
                    </h3>
                    <p className="text-paragraph">
                      Foundation of strength and resilience; today reflected in entrepreneurial mindset and project ownership.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Nurtured the Dream of Swaraj
                    </h3>
                    <p className="text-paragraph">
                      Vision of self-reliance; now reborn as Tech Swaraj through AI, robotics, and innovation.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Guided Shivaji with Wisdom and Compassion
                    </h3>
                    <p className="text-paragraph">
                      Model of mentorship; today embodied in value-based learning and emotional intelligence.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Inspired Multilingual and Scholarly Growth
                    </h3>
                    <p className="text-paragraph">
                      Symbol of intellect; today seen in digital fluency, creative thinking, and communication excellence.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Empowered Generations through Sanskar and Vision
                    </h3>
                    <p className="text-paragraph">
                      Her timeless influence continues through youth empowerment, ethics, and lifelong learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mb-16 bg-primary/5 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Vision</h2>
                <p className="text-lg text-paragraph text-center leading-relaxed">
                  To empower all youth, inspired by the legacy of Chhatrapati Maharaj, 
                  to become skilled, innovative, and entrepreneurial professionals — confident in their abilities, 
                  driving socio-economic growth, and contributing meaningfully to the progress of their 
                  community and the nation.
                </p>
              </div>

              {/* Challenges Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                  Challenges Faced by Today&apos;s Youth
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <h3 className="font-semibold text-black mb-2">Lack of Exposure & Skills</h3>
                    <p className="text-paragraph text-sm">
                      Insufficient practical, hands-on skilling education opportunities.
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="font-semibold text-black mb-2">Infrastructure Gap</h3>
                    <p className="text-paragraph text-sm">
                      Lack of modern cloud IT infrastructure for skill-based learning.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                    <h3 className="font-semibold text-black mb-2">Industry-Academia Gap</h3>
                    <p className="text-paragraph text-sm">
                      Insufficient collaboration between academia and industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">From Employment To Empowerment</h2>
                <p className="text-xl italic">
                  &quot;Shivaji Maharaj didn&apos;t seek a job, he built an Empire.&quot;
                </p>
              </div>

              {/* Special Focus Areas */}
              <div>
                <h2 className="text-3xl font-bold text-black mb-6 text-center">
                  Special Focus Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Workforce Up Skilling
                    </h3>
                    <p className="text-paragraph">
                      Continuous learning for professionals to stay relevant in the evolving job market.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Women Empowerment Wing
                    </h3>
                    <p className="text-paragraph">
                      Digital literacy & entrepreneurship programs specifically designed for women.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Scholarships & Financial Aid
                    </h3>
                    <p className="text-paragraph">
                      Support for talented youth to ensure equal opportunity for skill development.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      Cultural & Ethical Values
                    </h3>
                    <p className="text-paragraph">
                      Ethical values & heritage preservation alongside modern skill development.
                    </p>
                  </div>
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
