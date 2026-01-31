import Link from 'next/link';

export const metadata = {
  title: 'Hatha Yoga - Yoga Knowledge Base',
  description: 'Hatha Yoga section coming soon',
};

export default function HathaYogaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-sage-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-sage-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              Hatha Yoga
            </h1>
            <p className="font-devanagari text-lg md:text-xl text-gray-600 mb-8">
              हठ योग
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <h2 className="section-title">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This section is currently under development. We are preparing detailed
                Hatha Yoga content including classical asanas, pranayama techniques,
                and traditional teachings.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Check back soon for updates!
              </p>
              <Link href="/" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
