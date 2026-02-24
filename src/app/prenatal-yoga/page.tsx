import Link from 'next/link';
import { prenatalTopics } from '@/lib/prenatalTopics';

export const metadata = {
  title: 'Prenatal Yoga - Complete Guide',
  description: 'Complete guide to prenatal yoga including asanas, pranayama, meditation, and postnatal care',
};

export default function PrenatalYogaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 lg:pl-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 leading-tight">
          Prenatal Yoga
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A comprehensive guide to yoga during pregnancy, covering all trimesters,
          asanas, pranayama, meditation, and postnatal care.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div className="card">
          <h2 className="font-serif text-xl text-gray-900 mb-4">
            About This Guide
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This complete prenatal yoga guide covers everything from the benefits of yoga
            during pregnancy to specific practices for each trimester. It includes detailed
            information on safe asanas, breathing techniques, meditation practices, and
            guidance for labor and postnatal recovery.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are a yoga practitioner looking to adapt your practice during pregnancy,
            or a teacher wanting to guide expecting mothers safely, this guide provides
            comprehensive knowledge for every stage of the journey.
          </p>
        </div>
      </section>

      {/* Topic Grid */}
      <section>
        <h2 className="section-title mb-6">
          All {prenatalTopics.length} Topics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prenatalTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/prenatal-yoga/${topic.id}`}
              className="card block hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 text-sage-600 text-base flex items-center justify-center font-medium">
                  {topic.order}
                </span>
                <div className="min-w-0">
                  <p className="text-gray-800 leading-tight font-medium">
                    {topic.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Start Reading CTA */}
      <section className="mt-12 text-center">
        <Link
          href="/prenatal-yoga/yoga-and-benefits"
          className="btn-primary inline-flex items-center gap-2"
        >
          Start Reading
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
