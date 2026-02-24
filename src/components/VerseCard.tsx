import { Verse } from '@/lib/bhagavadGitaTypes';

interface VerseCardProps {
  verse: Verse;
}

export default function VerseCard({ verse }: VerseCardProps) {
  const isClosingVerse = verse.verse_number === 'closing';

  // Split Sanskrit text on । or ॥ to display each line separately
  const sanskritLines = verse.sanskrit
    .split(/([।॥])/)
    .reduce((acc: string[], part, index, arr) => {
      // Combine text with its following punctuation
      if (index % 2 === 0 && part.trim()) {
        const punctuation = arr[index + 1] || '';
        acc.push(part.trim() + punctuation);
      }
      return acc;
    }, []);

  return (
    <article
      className={`card ${isClosingVerse ? 'bg-sage-50 border-sage-200' : ''}`}
      id={`verse-${verse.verse_number}`}
    >
      {/* Verse Number - only show for regular verses */}
      {!isClosingVerse && (
        <div className="mb-4">
          <span className="inline-block bg-sage-100 text-sage-600 text-base font-medium px-3 py-1 rounded-full">
            Verse {verse.verse_number}
          </span>
        </div>
      )}

      {/* Sanskrit Text */}
      <div className="mb-6">
        <div className="font-devanagari text-gray-800 leading-relaxed text-center">
          {sanskritLines.map((line, index) => (
            <p key={index} className="text-xl md:text-2xl mb-1 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Hindi Translation */}
      <div className="mb-4 pb-4 border-b border-sage-100">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Hindi
        </p>
        <p className="font-devanagari text-lg text-gray-600 leading-relaxed">
          {verse.hindi}
        </p>
      </div>

      {/* English Translation */}
      <div>
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          English
        </p>
        <p className="text-gray-600 leading-relaxed">
          {verse.english}
        </p>
      </div>
    </article>
  );
}
