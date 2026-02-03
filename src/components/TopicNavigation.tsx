import Link from 'next/link';
import { getAdjacentTopics } from '@/lib/prenatalTopics';

interface TopicNavigationProps {
  currentTopicId: string;
}

export default function TopicNavigation({ currentTopicId }: TopicNavigationProps) {
  const { prev, next } = getAdjacentTopics(currentTopicId);

  return (
    <nav className="flex justify-between items-center py-8 border-t border-sage-200 mt-12" aria-label="Topic navigation">
      {prev ? (
        <Link
          href={`/prenatal-yoga/${prev.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-sage-600 transition-colors"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-100 group-hover:bg-sage-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </span>
          <div className="hidden sm:block text-left">
            <p className="text-xs text-gray-400">Previous</p>
            <p className="text-sm font-medium">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/prenatal-yoga/${next.id}`}
          className="group flex items-center gap-3 text-gray-600 hover:text-sage-600 transition-colors"
        >
          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-400">Next</p>
            <p className="text-sm font-medium">{next.title}</p>
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
