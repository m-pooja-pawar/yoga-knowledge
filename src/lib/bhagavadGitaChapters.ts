import { ChapterInfo } from './bhagavadGitaTypes';

export const chapters: ChapterInfo[] = [
  { id: 'chapter-1', title_sanskrit: 'अर्जुनविषादयोगः', title_english: 'The Yoga of Arjuna\'s Sorrow' },
  { id: 'chapter-2', title_sanskrit: 'सांख्ययोगः', title_english: 'Sankhya Yoga' },
  { id: 'chapter-3', title_sanskrit: 'कर्मयोगः', title_english: 'Karma Yoga' },
  { id: 'chapter-4', title_sanskrit: 'ज्ञानकर्मसंन्यासयोगः', title_english: 'Jnana Karma Sanyasa Yoga' },
  { id: 'chapter-5', title_sanskrit: 'कर्मसंन्यासयोगः', title_english: 'Karma Sanyasa Yoga' },
  { id: 'chapter-6', title_sanskrit: 'आत्मसंयमयोगः', title_english: 'Atma Sayama Yoga' },
  { id: 'chapter-7', title_sanskrit: 'ज्ञानविज्ञानयोगः', title_english: 'Jnana Vijnana Yoga' },
  { id: 'chapter-8', title_sanskrit: 'अक्षरब्रह्मयोगः', title_english: 'Akshara Brahma Yoga' },
  { id: 'chapter-9', title_sanskrit: 'राजविद्याराजगुह्ययोगः', title_english: 'Raja Vidya Raja Guhya Yoga' },
  { id: 'chapter-10', title_sanskrit: 'विभूतियोगः', title_english: 'Vibhuti Yoga' },
  { id: 'chapter-11', title_sanskrit: 'विश्वरूपदर्शनयोगः', title_english: 'Vishwarupa Darshana Yoga' },
  { id: 'chapter-12', title_sanskrit: 'भक्तियोगः', title_english: 'Bhakti Yoga' },
  { id: 'chapter-13', title_sanskrit: 'क्षेत्रक्षेत्रज्ञविभागयोगः', title_english: 'Kshetra Kshetrajna Vibhaga Yoga' },
  { id: 'chapter-14', title_sanskrit: 'गुणत्रयविभागयोगः', title_english: 'Guna Traya Vibhaga Yoga' },
  { id: 'chapter-15', title_sanskrit: 'पुरुषोत्तमयोगः', title_english: 'Purushottama Yoga' },
  { id: 'chapter-16', title_sanskrit: 'दैवासुरसम्पद्विभागयोगः', title_english: 'Daivasura Sampad Vibhaga Yoga' },
  { id: 'chapter-17', title_sanskrit: 'श्रद्धात्रयविभागयोगः', title_english: 'Shraddha Traya Vibhaga Yoga' },
  { id: 'chapter-18', title_sanskrit: 'मोक्षसंन्यासयोगः', title_english: 'Moksha Sanyasa Yoga' },
];

export function getChapterById(id: string): ChapterInfo | undefined {
  return chapters.find(c => c.id === id);
}

export function getAdjacentChapters(id: string): { prev: ChapterInfo | null; next: ChapterInfo | null } {
  const index = chapters.findIndex(c => c.id === id);
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null
  };
}
