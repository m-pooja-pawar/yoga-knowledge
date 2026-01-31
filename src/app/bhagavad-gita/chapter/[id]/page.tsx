import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getChapterInfo, chapters } from '@/lib/chapters';
import { ChapterData } from '@/lib/types';
import VerseCard from '@/components/VerseCard';
import ChapterNavigation from '@/components/ChapterNavigation';
import fs from 'fs';
import path from 'path';

interface ChapterPageProps {
  params: Promise<{ id: string }>;
}

async function getChapterData(id: number): Promise<ChapterData | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'bhagavad-gita', `chapter_${id}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const chapterId = parseInt(resolvedParams.id, 10);
  const chapterInfo = getChapterInfo(chapterId);

  if (!chapterInfo) {
    return {
      title: 'Chapter Not Found',
    };
  }

  return {
    title: `Chapter ${chapterId}: ${chapterInfo.title_english} - Srimad Bhagavad Gita`,
    description: `Read Chapter ${chapterId} (${chapterInfo.title_sanskrit}) of the Srimad Bhagavad Gita with Sanskrit verses, Hindi and English translations.`,
  };
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    id: String(chapter.id),
  }));
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const resolvedParams = await params;
  const chapterId = parseInt(resolvedParams.id, 10);

  if (isNaN(chapterId) || chapterId < 1 || chapterId > 18) {
    notFound();
  }

  const chapterData = await getChapterData(chapterId);

  if (!chapterData) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:py-12 lg:pl-8">
      {/* Chapter Header */}
      <header className="mb-10 text-center lg:text-left">
        <div className="inline-block bg-sage-100 text-sage-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Chapter {chapterData.id} of 18
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
          {chapterData.verses.length - 1} verses
        </p>
      </header>

      {/* Verses */}
      <div className="space-y-8">
        {chapterData.verses.map((verse) => (
          <VerseCard key={verse.verse_number} verse={verse} />
        ))}
      </div>

      {/* Chapter Navigation */}
      <ChapterNavigation currentChapterId={chapterId} />
    </div>
  );
}
