import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getHathaTopicById, hathaTopics } from '@/lib/hathaTopics';
import { getHathaTopicContent } from '@/data/hatha';
import HathaTopicNavigation from '@/components/HathaTopicNavigation';
import ContentRenderer from '@/components/ContentRenderer';

interface TopicPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const topic = getHathaTopicById(resolvedParams.id);

  if (!topic) {
    return { title: 'Topic Not Found' };
  }

  return {
    title: `${topic.title} - Hatha Yoga`,
    description: `Learn about ${topic.title} in Hatha Yoga`,
  };
}

export async function generateStaticParams() {
  return hathaTopics
    .filter((topic) => topic.parentId === 'mudras')
    .map((topic) => ({ id: topic.id }));
}

export default async function MudrasSubTopicPage({ params }: TopicPageProps) {
  const resolvedParams = await params;
  const topicId = resolvedParams.id;

  const topic = getHathaTopicById(topicId);
  if (!topic) notFound();

  const content = getHathaTopicContent(topicId);
  if (!content) notFound();

  const mudraCount = hathaTopics.filter(t => t.parentId === 'mudras').length;

  return (
    <div className="max-w-3xl mx-auto px-4 pt-20 pb-8 lg:pt-12 lg:pb-12 lg:pl-8">
      <header className="mb-10 text-center lg:text-left">
        <div className="inline-block bg-sage-100 text-sage-600 text-base font-medium px-3 py-1 rounded-full mb-4">
          Mudra {topic.subOrder} of {mudraCount}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
          {content.title}
        </h1>
        <p className="text-gray-500 text-base mt-2">
          {topic.subtitle}
        </p>
      </header>

      <article>
        <ContentRenderer sections={content.sections} />
      </article>

      <HathaTopicNavigation currentTopicId={topicId} />
    </div>
  );
}
