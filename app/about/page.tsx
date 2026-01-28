import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold text-center mb-4">About AARTI</h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-[#fdebdc]">
              Aausaheb Research and Training Institute - A Youth Empowerment Movement
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Legacy Section */}
              <div className="mb-16 relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-white rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 py-16 px-8 md:px-12">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                      <div className="w-20 h-1 bg-white/30 mx-auto mb-2"></div>
                      <div className="w-12 h-1 bg-white/50 mx-auto"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight heading">
                      Aausaheb&apos;s Legacy
                    </h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-center mb-2 italic font-light leading-relaxed max-w-3xl mx-auto subtext text-body">
                      &quot;From Jijau&apos;s Sanskar to AI-driven Skills - Shaping Brave, Bright, and Self-Reliant Minds&quot;
                    </p>
                  </div>

                  {/* Cards Grid */}
                  <div className="space-y-5">
                    <div className="group card bg-[#fdf8f3] backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary/30 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            Instilled Courage and Discipline
                          </h3>
                          <p className="text-paragraph leading-relaxed">
                            Foundation of strength and resilience; today reflected in entrepreneurial mindset and project ownership.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-[#fdf8f3] backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary/30 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            Nurtured the Dream of Swaraj
                          </h3>
                          <p className="text-paragraph leading-relaxed">
                            Vision of self-reliance; now reborn as Tech Swaraj through AI, robotics, and innovation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-[#fdf8f3] backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary/30 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            Guided Shivaji with Wisdom and Compassion
                          </h3>
                          <p className="text-paragraph leading-relaxed">
                            Model of mentorship; today embodied in value-based learning and emotional intelligence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-[#fdf8f3] backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary/30 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            Inspired Multilingual and Scholarly Growth
                          </h3>
                          <p className="text-paragraph leading-relaxed">
                            Symbol of intellect; today seen in digital fluency, creative thinking, and communication excellence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-[#fdf8f3] backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border-l-4 border-primary/30 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                            Empowered Generations through Sanskar and Vision
                          </h3>
                          <p className="text-paragraph leading-relaxed">
                            Her timeless influence continues through youth empowerment, ethics, and lifelong learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mb-16 relative overflow-hidden">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-white to-primary/10 rounded-3xl"></div>
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h18v-2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2V6h-2V4h2V2h-2V0h4v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-4zm-18 0h2v2H2v-2zm4 0h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
                
                {/* Content */}
                <div className="relative z-10 py-12 px-8 md:px-12">
                  <div className="text-center">
                    <div className="inline-block mb-4">
                      <div className="w-16 h-1 bg-primary/30 mx-auto mb-2"></div>
                      <div className="w-10 h-1 bg-primary/50 mx-auto"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Vision</h2>
                    <div className="w-20 h-1 bg-primary/50 mx-auto mb-8"></div>
                    <div className="max-w-3xl mx-auto">
                      <p className="text-lg md:text-xl text-paragraph text-center leading-relaxed font-light">
                        To empower all youth, inspired by the legacy of Chhatrapati Maharaj, 
                        to become skilled, innovative, and entrepreneurial professionals — confident in their abilities, 
                        driving socio-economic growth, and contributing meaningfully to the progress of their 
                        community and the nation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-block mb-4">
                    <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
                    <div className="w-10 h-1 bg-secondary/50 mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Challenges Faced by Today&apos;s Youth
                  </h2>
                  <div className="w-24 h-1 bg-secondary/50 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 border-l-4 border-red-500 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">Lack of Exposure & Skills</h3>
                      <p className="text-paragraph text-sm md:text-base leading-relaxed">
                        Insufficient practical, hands-on skilling education opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-l-4 border-yellow-500 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors">Infrastructure Gap</h3>
                      <p className="text-paragraph text-sm md:text-base leading-relaxed">
                        Lack of modern cloud IT infrastructure for skill-based learning.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">Industry-Academia Gap</h3>
                      <p className="text-paragraph text-sm md:text-base leading-relaxed">
                        Insufficient collaboration between academia and industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Section - temporarily commented as requested */}
              {/*
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">From Employment To Empowerment</h2>
                <p className="text-xl italic">
                  &quot;Shivaji Maharaj didn&apos;t seek a job, he built an Empire.&quot;
                </p>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
