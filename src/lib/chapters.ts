import { ChapterInfo } from './types';

export const chapters: ChapterInfo[] = [
  { id: 1, title_sanskrit: 'अर्जुनविषादयोगः', title_english: 'The Yoga of Arjuna\'s Sorrow' },
  { id: 2, title_sanskrit: 'सांख्ययोगः', title_english: 'Sankhya Yoga' },
  { id: 3, title_sanskrit: 'कर्मयोगः', title_english: 'Karma Yoga' },
  { id: 4, title_sanskrit: 'ज्ञानकर्मसंन्यासयोगः', title_english: 'Jnana Karma Sanyasa Yoga' },
  { id: 5, title_sanskrit: 'कर्मसंन्यासयोगः', title_english: 'Karma Sanyasa Yoga' },
  { id: 6, title_sanskrit: 'आत्मसंयमयोगः', title_english: 'Atma Sayama Yoga' },
  { id: 7, title_sanskrit: 'ज्ञानविज्ञानयोगः', title_english: 'Jnana Vijnana Yoga' },
  { id: 8, title_sanskrit: 'अक्षरब्रह्मयोगः', title_english: 'Akshara Brahma Yoga' },
  { id: 9, title_sanskrit: 'राजविद्याराजगुह्ययोगः', title_english: 'Raja Vidya Raja Guhya Yoga' },
  { id: 10, title_sanskrit: 'विभूतियोगः', title_english: 'Vibhuti Yoga' },
  { id: 11, title_sanskrit: 'विश्वरूपदर्शनयोगः', title_english: 'Vishwarupa Darshana Yoga' },
  { id: 12, title_sanskrit: 'भक्तियोगः', title_english: 'Bhakti Yoga' },
  { id: 13, title_sanskrit: 'क्षेत्रक्षेत्रज्ञविभागयोगः', title_english: 'Kshetra Kshetrajna Vibhaga Yoga' },
  { id: 14, title_sanskrit: 'गुणत्रयविभागयोगः', title_english: 'Guna Traya Vibhaga Yoga' },
  { id: 15, title_sanskrit: 'पुरुषोत्तमयोगः', title_english: 'Purushottama Yoga' },
  { id: 16, title_sanskrit: 'दैवासुरसम्पद्विभागयोगः', title_english: 'Daivasura Sampad Vibhaga Yoga' },
  { id: 17, title_sanskrit: 'श्रद्धात्रयविभागयोगः', title_english: 'Shraddha Traya Vibhaga Yoga' },
  { id: 18, title_sanskrit: 'मोक्षसंन्यासयोगः', title_english: 'Moksha Sanyasa Yoga' },
];

export function getChapterInfo(id: number): ChapterInfo | undefined {
  return chapters.find(c => c.id === id);
}

export function getPreviousChapter(id: number): ChapterInfo | undefined {
  return chapters.find(c => c.id === id - 1);
}

export function getNextChapter(id: number): ChapterInfo | undefined {
  return chapters.find(c => c.id === id + 1);
}
