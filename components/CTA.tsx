import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">From Employment To Empowerment</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 italic">
          &quot;Shivaji Maharaj didn&apos;t seek a job, he built an Empire.&quot;
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of students already learning with us. Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started Free
          </Link>
          <Link
            href="/courses"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
