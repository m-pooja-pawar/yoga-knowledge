import Link from 'next/link';
import { hathaTopics, hathaGroups } from '@/lib/hathaTopics';

export const metadata = {
  title: 'Hatha Yoga - Complete Guide',
  description: 'Complete guide to Hatha Yoga covering yogic philosophy, psychology, classical yoga, and practical techniques',
};

export default function HathaYogaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-20 pb-8 lg:pt-12 lg:pb-12 lg:pl-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 leading-tight">
          Hatha Yoga
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A comprehensive guide to Hatha Yoga covering yogic philosophy, psychology,
          classical teachings, and practical techniques including asana, pranayama,
          mudras, bandhas, and meditation.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div className="card">
          <h2 className="font-serif text-xl text-gray-900 mb-4">
            About This Guide
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This guide covers the complete foundation of Hatha Yoga — from its historical
            roots and philosophical underpinnings to the practical techniques that form
            the core of yogic practice.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Explore the Samkhya philosophy, understand the nature of the mind through
            yogic psychology, study Patanjali&apos;s Yoga Sutras, and learn the classical
            Hatha Yoga practices including asana, pranayama, mudras, bandhas, shatkarma,
            and meditation.
          </p>
        </div>
      </section>

      {/* Topic Grid by Group */}
      {hathaGroups.map((group) => {
        const groupTopics = hathaTopics.filter(t => t.group === group && !t.parentId);
        return (
          <section key={group} className="mb-10">
            <h2 className="section-title mb-6">
              {group}
            </h2>
            <div className="space-y-3">
              {groupTopics.map((topic) => {
                const subTopics = hathaTopics.filter(t => t.parentId === topic.id);
                return (
                  <div key={topic.id}>
                    <Link
                      href={topic.href ?? `/hatha-yoga/${topic.id}`}
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
                          <p className="text-gray-400 text-sm mt-0.5">
                            {topic.subtitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                    {subTopics.length > 0 && (
                      <div className="ml-6 mt-2 pl-3 border-l border-sage-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {subTopics.map((sub) => (
                          <Link
                            key={sub.id}
                            href={sub.href ?? `/hatha-yoga/${sub.id}`}
                            className="card block hover:shadow-md transition-all duration-200 py-2 px-3"
                          >
                            <div className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-50 text-sage-500 text-xs flex items-center justify-center font-medium">
                                {sub.subOrder}
                              </span>
                              <div className="min-w-0">
                                <p className="text-gray-800 text-sm leading-tight font-medium">
                                  {sub.title}
                                </p>
                                <p className="text-gray-400 text-xs mt-0.5">
                                  {sub.subtitle}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Start Reading CTA */}
      <section className="mt-12 text-center">
        <Link
          href="/hatha-yoga/introduction-to-yoga"
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
