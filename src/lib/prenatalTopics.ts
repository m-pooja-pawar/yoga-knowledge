import { PrenatalTopic } from './prenatalTypes';

export const prenatalTopics: PrenatalTopic[] = [
  { id: 'yoga-and-benefits', title: 'Yoga and its Benefits', order: 1 },
  { id: 'sankalpa', title: 'Sankalpa or Resolve for Pregnancy', order: 2 },
  { id: 'anatomy-changes', title: 'Anatomy and Physiological Changes', order: 3 },
  { id: 'trimester-changes', title: 'Trimester Changes', order: 4 },
  { id: 'pregnancy-issues', title: 'Pregnancy Issues', order: 5 },
  { id: 'teaching-principles', title: 'Core Yoga Teaching Principles', order: 6 },
  { id: 'prenatal-asanas-list', title: 'Prenatal Asanas List', order: 7 },
  { id: 'asanas-benefits-contraindications', title: 'Asanas Benefits & Contraindications', order: 8 },
  { id: 'trimester1-asanas', title: 'Trimester 1 Asanas', order: 9 },
  { id: 'trimester2-asanas', title: 'Trimester 2 Asanas', order: 10 },
  { id: 'trimester3-asanas', title: 'Trimester 3 Asanas', order: 11 },
  { id: 'pelvic-floor-exercises', title: 'Pelvic Floor Exercises', order: 12 },
  { id: 'pranayama', title: 'Pranayama', order: 13 },
  { id: 'mudras', title: 'Mudras', order: 14 },
  { id: 'chanting', title: 'Chanting', order: 15 },
  { id: 'meditation-visualization', title: 'Meditation and Visualization', order: 16 },
  { id: 'class-design', title: 'How to Design a Class', order: 17 },
  { id: 'cleansing-techniques', title: 'Cleansing Techniques', order: 18 },
  { id: 'garbhsanskar', title: 'Garbhsanskar', order: 19 },
  { id: 'ragas', title: 'Ragas', order: 20 },
  { id: 'madalasa', title: 'Madalasa', order: 21 },
  { id: 'yoga-nidra', title: 'Yoga Nidra', order: 22 },
  { id: 'labour', title: 'Labour', order: 23 },
  { id: 'breastfeeding', title: 'Breastfeeding', order: 24 },
  { id: 'infant-massage', title: 'Infant Massage', order: 25 },
  { id: 'postnatal-care', title: 'Postnatal Care', order: 26 },
  { id: 'postnatal-asanas', title: 'Postnatal Asanas', order: 27 },
];

export function getTopicById(id: string): PrenatalTopic | undefined {
  return prenatalTopics.find(topic => topic.id === id);
}

export function getAdjacentTopics(id: string): { prev: PrenatalTopic | null; next: PrenatalTopic | null } {
  const currentIndex = prenatalTopics.findIndex(topic => topic.id === id);
  return {
    prev: currentIndex > 0 ? prenatalTopics[currentIndex - 1] : null,
    next: currentIndex < prenatalTopics.length - 1 ? prenatalTopics[currentIndex + 1] : null,
  };
}
