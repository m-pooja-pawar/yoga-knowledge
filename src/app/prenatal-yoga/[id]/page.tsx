import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTopicById, prenatalTopics } from '@/lib/prenatalTopics';
import { getTopicContent } from '@/data/prenatal';
import TopicNavigation from '@/components/TopicNavigation';
import ContentRenderer from '@/components/ContentRenderer';

interface TopicPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const topic = getTopicById(resolvedParams.id);

  if (!topic) {
    return {
      title: 'Topic Not Found',
    };
  }

  return {
    title: `${topic.title} - Prenatal Yoga`,
    description: `Learn about ${topic.title} in prenatal yoga`,
  };
}

export async function generateStaticParams() {
  return prenatalTopics.map((topic) => ({
    id: topic.id,
  }));
}

export default async function TopicPage({ params }: TopicPageProps) {
  const resolvedParams = await params;
  const topicId = resolvedParams.id;

  const topic = getTopicById(topicId);
  if (!topic) {
    notFound();
  }

  const content = getTopicContent(topicId);
  if (!content) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 lg:py-12 lg:pl-8">
      {/* Topic Header */}
      <header className="mb-10 text-center lg:text-left">
        <div className="inline-block bg-sage-100 text-sage-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
          Topic {topic.order} of {prenatalTopics.length}
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
          {content.title}
        </h1>
      </header>

      {/* Content Sections */}
      <article>
        <ContentRenderer sections={content.sections} />
      </article>

      {/* Topic Navigation */}
      <TopicNavigation currentTopicId={topicId} />
    </div>
  );
}
