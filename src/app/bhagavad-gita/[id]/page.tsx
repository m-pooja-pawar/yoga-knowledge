import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getChapterById, chapters as chapterInfoList } from '@/lib/bhagavadGitaChapters';
import { chapters as chapterDataMap } from '@/data/bhagavad-gita';
import VerseCard from '@/components/VerseCard';
import BhagavadGitaChapterNavigation from '@/components/BhagavadGitaChapterNavigation';

interface ChapterPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { id } = await params;
  const chapterInfo = getChapterById(id);

  if (!chapterInfo) {
    return {
      title: 'Chapter Not Found',
    };
  }

  const chapterNum = id.split('-')[1];
  return {
    title: `Chapter ${chapterNum}: ${chapterInfo.title_english} - Srimad Bhagavad Gita`,
    description: `Read Chapter ${chapterNum} (${chapterInfo.title_sanskrit}) of the Srimad Bhagavad Gita with Sanskrit verses, Hindi and English translations.`,
  };
}

export async function generateStaticParams() {
  return chapterInfoList.map((chapter) => ({
    id: chapter.id,
  }));
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params;
  const chapterInfo = getChapterById(id);
  const chapterData = chapterDataMap[id];

  if (!chapterInfo || !chapterData) {
    notFound();
  }

  const chapterNum = id.split('-')[1];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:py-12 lg:pl-8">
      {/* Chapter Header */}
      <header className="mb-10 text-center lg:text-left">
        <div className="inline-block bg-sage-100 text-sage-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Chapter {chapterNum} of 18
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mb-2 leading-tight">
          {chapterData.title_english}
        </h1>
        <p className="font-devanagari text-xl md:text-2xl text-gray-600 mb-2">
          {chapterData.title_sanskrit}
        </p>
        <p className="font-devanagari text-gray-500">
          {chapterData.title_hindi}
        </p>
        <p className="text-gray-500 text-sm mt-4">
          {chapterData.total_verse} verses
        </p>
      </header>

      {/* Verses */}
      <div className="space-y-8">
        {chapterData.verses.map((verse) => (
          <VerseCard key={verse.verse_number} verse={verse} />
        ))}
      </div>

      {/* Chapter Navigation */}
      <BhagavadGitaChapterNavigation currentChapterId={id} />
    </div>
  );
}
