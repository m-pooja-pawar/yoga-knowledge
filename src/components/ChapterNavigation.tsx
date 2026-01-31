import Link from 'next/link';
import { getPreviousChapter, getNextChapter } from '@/lib/chapters';

interface ChapterNavigationProps {
  currentChapterId: number;
}

export default function ChapterNavigation({ currentChapterId }: ChapterNavigationProps) {
  const prevChapter = getPreviousChapter(currentChapterId);
  const nextChapter = getNextChapter(currentChapterId);

  return (
    <nav className="flex justify-between items-center py-8 border-t border-sage-200 mt-12" aria-label="Chapter navigation">
      {prevChapter ? (
        <Link
          href={`/bhagavad-gita/chapter/${prevChapter.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-sage-600 transition-colors"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 group-hover:bg-sage-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <div className="hidden sm:block text-left">
            <p className="text-xs text-gray-400">Previous</p>
            <p className="text-sm font-medium">{prevChapter.title_english}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextChapter ? (
        <Link
          href={`/bhagavad-gita/chapter/${nextChapter.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-sage-600 transition-colors"
        >
          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-400">Next</p>
            <p className="text-sm font-medium">{nextChapter.title_english}</p>
          </div>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 group-hover:bg-sage-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
