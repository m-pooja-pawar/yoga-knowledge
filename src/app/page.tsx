import Link from 'next/link';

const sections = [
  {
    id: 'bhagavad-gita',
    title: 'Srimad Bhagavad Gita',
    titleSanskrit: 'श्रीमद् भगवद्गीता',
    description: 'The eternal dialogue between Lord Krishna and Arjuna, containing 18 chapters of timeless wisdom on dharma, karma, and the path to liberation.',
    count: 18,
    countLabel: 'Chapters',
    href: '/bhagavad-gita',
    available: true,
  },
  {
    id: 'prenatal-yoga',
    title: 'Prenatal Yoga',
    titleSanskrit: 'गर्भावस्था योग',
    description: 'Complete guide to yoga during pregnancy, covering asanas for each trimester, pranayama, meditation, labor preparation, and postnatal care.',
    count: 27,
    countLabel: 'Topics',
    href: '/prenatal-yoga',
    available: true,
  },
  {
    id: 'hatha-yoga',
    title: 'Hatha Yoga',
    titleSanskrit: 'हठ योग',
    description: 'Classical Hatha Yoga teachings including asanas, pranayama, and the foundational practices for physical and spiritual development.',
    count: null,
    countLabel: null,
    href: '/hatha-yoga',
    available: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              Yoga Knowledge Base
            </h1>
            <p className="font-devanagari text-lg md:text-xl text-gray-600 mb-2">
              योग ज्ञान कोष
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive resource for ancient yoga wisdom, featuring sacred texts
              with Sanskrit verses, Hindi translations, and English explanations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#collections" className="btn-primary">
                Explore Collections
              </Link>
              <Link href="#about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Welcome to Yoga Knowledge</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover the timeless wisdom of yoga through our carefully curated collection
              of sacred texts and teachings. Each text is presented with original Sanskrit verses,
              Hindi translations, and detailed English explanations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a student of yoga philosophy, a practitioner seeking deeper understanding,
              or simply curious about ancient wisdom, our knowledge base offers accessible insights
              into these profound teachings.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="bg-sage-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our growing library of yoga texts and teachings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Start Your Journey</h2>
            <p className="text-gray-600 mb-8">
              Explore our collections of sacred yoga texts and discover the ancient wisdom
              that has guided seekers for thousands of years.
            </p>
            <Link href="#collections" className="btn-primary">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-50 border-t border-sage-100">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-xl text-sage-700 mb-4">
              Yoga Knowledge Base
            </h3>
            <p className="font-devanagari text-gray-600 text-lg mb-2">
              ॐ असतो मा सद्गमय
            </p>
            <p className="text-gray-600 text-sm">
              Lead me from the unreal to the real
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-sage-200">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Yoga Knowledge Base. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function SectionCard({ section }: { section: typeof sections[0] }) {
  const CardContent = () => (
    <>
      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-6 h-6 text-sage-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
      <h3 className="font-serif text-xl text-gray-900 mb-2">{section.title}</h3>
      <p className="font-devanagari text-gray-500 text-sm mb-3">{section.titleSanskrit}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
      {section.count && section.countLabel && (
        <p className="text-gray-500 text-sm mt-3">{section.count} {section.countLabel}</p>
      )}
      {section.available ? (
        <span className="inline-block mt-4 text-sage-600 text-sm font-medium">
          Explore &rarr;
        </span>
      ) : (
        <span className="inline-block mt-4 text-gray-400 text-sm">
          Coming Soon
        </span>
      )}
    </>
  );

  if (section.available) {
    return (
      <Link href={section.href} className="card block hover:shadow-md transition-shadow duration-200">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="card opacity-75">
      <CardContent />
    </div>
  );
}
