import Link from 'next/link';
import { chapters } from '@/lib/chapters';

export const metadata = {
  title: 'Srimad Bhagavad Gita - Yoga Knowledge Base',
  description: 'Read the complete Srimad Bhagavad Gita with Sanskrit verses, Hindi and English translations',
};

export default function BhagavadGitaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 lg:pl-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 leading-tight">
          Srimad Bhagavad Gita
        </h1>
        <p className="font-devanagari text-xl md:text-2xl text-gray-600 mb-4">
          श्रीमद् भगवद्गीता
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The Song of God — a 700-verse Hindu scripture that is part of the epic Mahabharata,
          containing a conversation between prince Arjuna and his guide Lord Krishna.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <div className="card">
          <h2 className="font-serif text-xl text-gray-900 mb-4">
            About the Srimad Bhagavad Gita
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Srimad Bhagavad Gita, often referred to as the Gita, is a sacred Hindu scripture
            consisting of 18 chapters and 700 verses. It is set in a narrative framework of a
            dialogue between the Pandava prince Arjuna and his charioteer guide Lord Krishna.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The discourse takes place on the battlefield of Kurukshetra, just before the start
            of the great war. Facing the duty of fighting against his own relatives, teachers,
            and friends, Arjuna is filled with moral dilemma and despair. Krishna counsels Arjuna,
            addressing his doubts and revealing profound spiritual wisdom.
          </p>
        </div>
      </section>

      {/* Chapter Grid */}
      <section>
        <h2 className="section-title mb-6">
          All 18 Chapters
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/bhagavad-gita/chapter/${chapter.id}`}
              className="card block hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 text-sage-600 text-sm flex items-center justify-center font-medium">
                  {chapter.id}
                </span>
                <div className="min-w-0">
                  <p className="font-devanagari text-gray-800 leading-tight">
                    {chapter.title_sanskrit}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {chapter.title_english}
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
          href="/bhagavad-gita/chapter/1"
          className="btn-primary inline-flex items-center gap-2"
        >
          Start Reading from Chapter 1
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
