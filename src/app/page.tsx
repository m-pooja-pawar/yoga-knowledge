import Link from 'next/link';

const sections = [
  {
    id: 'hatha-yoga',
    title: 'Hatha Yoga',
    description: 'A complete guide covering yogic philosophy, Samkhya, gunas, prana system, nadis, chakras, doshas, yogic psychology, and Hatha Yoga practices — including shatkarma, asana, pranayama, mudras, bandhas, and meditation.',
    href: '/hatha-yoga',
    available: true,
  },
  {
    id: 'patanjali-yoga-sutras',
    title: 'Patanjali Yoga Sutras',
    description: 'A structured guide to the Yoga Sutras of Patanjali — covering the four padas, ashtanga yoga, the nature of mind, and the path to samadhi.',
    href: '/patanjali-yoga-sutras',
    available: false,
  },
  {
    id: 'bhagavad-gita',
    title: 'Srimad Bhagavad Gita',
    description: 'Read all 700 verses across 18 chapters — each verse presented in original Sanskrit with Hindi and English translations. From Arjuna\'s dilemma to the path of moksha.',
    href: '/bhagavad-gita',
    available: true,
  },
  {
    id: 'prenatal-yoga',
    title: 'Prenatal Yoga',
    description: 'A guide covering trimester-wise asanas, pranayama, mudras, pelvic floor exercises, garbhsanskar, yoga nidra, labor preparation, breastfeeding, and postnatal recovery.',
    href: '/prenatal-yoga',
    available: true,
  },
];

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-sage-50">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              Yoga Knowledge Base
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our growing yoga knowledge base — covering Hatha Yoga, the Bhagavad Gita, Prenatal Yoga, and more.
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
            <h2 className="section-title">What You Will Find Here</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A complete Hatha Yoga guide — covering yogic philosophy, Samkhya, gunas, prana system,
              nadis, chakras, doshas, yogic psychology, and classical Hatha Yoga practices including
              shatkarma, asana, pranayama, mudras, bandhas, and meditation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The complete Srimad Bhagavad Gita — all 18 chapters and 700 verses with original
              Sanskrit text, Hindi translation, and English meaning. Follow the dialogue between
              Lord Krishna and Arjuna on dharma, karma, devotion, and the path to liberation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A detailed prenatal yoga guide — from trimester-specific asanas and pranayama to
              mudras, garbhsanskar, yoga nidra, labor preparation, breastfeeding, and postnatal
              recovery. Designed for practitioners and teachers alike.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
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
            <p className="text-gray-600 text-base">
              Lead me from the unreal to the real
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-sage-200">
            <p className="text-center text-base text-gray-500">
              © {new Date().getFullYear()} Yoga Knowledge Base. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
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
      <p className="text-gray-600 text-base leading-relaxed">{section.description}</p>
{section.available ? (
        <span className="inline-block mt-4 text-sage-600 text-base font-medium">
          Explore &rarr;
        </span>
      ) : (
        <span className="inline-block mt-4 text-gray-400 text-base">
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
