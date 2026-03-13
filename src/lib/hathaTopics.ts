import { HathaTopic } from './hathaTypes';

export const hathaGroups = [
  'Paths of Yoga',
  'Yogic Philosophy',
  'Classical Yoga',
  'Yogic Psychology',
  'Yogic Life Framework',
  'Hatha Yoga Overview',
  'Hatha Yoga Practices',
];

export const hathaTopics: HathaTopic[] = [
  { id: 'introduction-to-yoga', title: 'Introduction to Yoga', subtitle: 'What is Yoga', order: 1, group: 'Paths of Yoga' },
  { id: 'history-of-yoga', title: 'Historical Roots of Yoga', subtitle: 'History of Yoga', order: 2, group: 'Paths of Yoga' },
  { id: 'paths-of-yoga', title: 'Paths of Yoga', subtitle: 'Paths of Yoga', order: 3, group: 'Paths of Yoga' },
  { id: 'samkhya-philosophy', title: 'Samkhya Philosophy', subtitle: 'Samkhya Philosophy', order: 4, group: 'Yogic Philosophy' },
  { id: 'three-gunas', title: 'Three Gunas', subtitle: 'Sattva, Rajas, Tamas', order: 5, group: 'Yogic Philosophy' },
  { id: 'panchakosha', title: 'Panchakosha', subtitle: 'Five Sheaths (Panchakosha)', order: 6, group: 'Yogic Philosophy' },
  { id: 'prana-system', title: 'Prana System', subtitle: 'Prana, Five Pranas & Up-Pranas', order: 7, group: 'Yogic Philosophy' },
  { id: 'nadis', title: 'Nadis', subtitle: 'Nadis (Energy Channels)', order: 8, group: 'Yogic Philosophy' },
  { id: 'chakras', title: 'Chakras', subtitle: 'Chakra System', order: 9, group: 'Yogic Philosophy' },
  { id: 'three-doshas', title: 'Three Doshas', subtitle: 'Vata, Pitta, Kapha', order: 10, group: 'Yogic Philosophy' },
  { id: 'patanjali-yoga-sutras', title: 'Patanjali Yoga Sutras', subtitle: 'Structure, Four Padas, Ashtanga Yoga', order: 11, group: 'Classical Yoga' },
  { id: 'nature-of-mind', title: 'Nature of the Mind', subtitle: 'Chitta, Buddhi, Ahamkara, Manas', order: 12, group: 'Yogic Psychology' },
  { id: 'chitta-vrittis', title: 'Chitta Vrittis', subtitle: 'Five Modifications of Mind', order: 13, group: 'Yogic Psychology' },
  { id: 'kleshas', title: 'Kleshas', subtitle: 'Five Causes of Suffering', order: 14, group: 'Yogic Psychology' },
  { id: 'samskaras-vasanas', title: 'Samskaras and Vasanas', subtitle: 'Mental Impressions', order: 15, group: 'Yogic Psychology' },
  { id: 'states-of-consciousness', title: 'States of Consciousness', subtitle: 'Jagrat, Swapna, Sushupti, Turiya', order: 16, group: 'Yogic Psychology' },
  { id: 'purusharthas', title: 'Purusharthas', subtitle: 'Dharma, Artha, Kama, Moksha', order: 17, group: 'Yogic Life Framework' },
  { id: 'ashramas', title: 'Ashramas', subtitle: 'Four Stages of Life', order: 18, group: 'Yogic Life Framework' },
  { id: 'hatha-yoga-overview', title: 'Hatha Yoga', subtitle: 'What is Hatha Yoga', order: 19, group: 'Hatha Yoga Overview' },
  { id: 'shatkarma', title: 'Shatkarma', subtitle: 'Six Yogic Cleansing Techniques', order: 20, group: 'Hatha Yoga Practices' },
  { id: 'asana', title: 'Asana', subtitle: 'Yogic Postures', order: 21, group: 'Hatha Yoga Practices' },
  { id: 'pranayama', title: 'Pranayama', subtitle: 'Yogic Breathing Practices', order: 22, group: 'Hatha Yoga Practices' },
  { id: 'mudras', title: 'Mudras', subtitle: 'Yogic Gestures and Energy Seals', order: 23, group: 'Hatha Yoga Practices' },
  { id: 'bandhas', title: 'Bandhas', subtitle: 'Energy Locks', order: 24, group: 'Hatha Yoga Practices' },
  { id: 'meditation', title: 'Meditation', subtitle: 'Dhyana Practices', order: 25, group: 'Hatha Yoga Practices' },
  { id: 'samadhi', title: 'Samadhi', subtitle: 'Higher States of Yogic Absorption', order: 26, group: 'Hatha Yoga Practices' },
  { id: 'dhauti', title: 'Dhauti', subtitle: 'Digestive Tract Cleansing', order: 27, subOrder: 1, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/dhauti' },
  { id: 'basti', title: 'Basti', subtitle: 'Colon Cleansing', order: 28, subOrder: 2, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/basti' },
  { id: 'neti', title: 'Neti', subtitle: 'Nasal Cleansing', order: 29, subOrder: 3, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/neti' },
  { id: 'trataka', title: 'Trataka', subtitle: 'Steady Gazing Practice', order: 30, subOrder: 4, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/trataka' },
  { id: 'nauli', title: 'Nauli', subtitle: 'Abdominal Cleansing', order: 31, subOrder: 5, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/nauli' },
  { id: 'kapalbhati', title: 'Kapalbhati', subtitle: 'Cleansing Breath Technique', order: 32, subOrder: 6, group: 'Hatha Yoga Practices', parentId: 'shatkarma', href: '/hatha-yoga/shatkarma/kapalbhati' },
  { id: 'jalandhara-bandha', title: 'Jalandhara Bandha', subtitle: 'Throat Lock', order: 33, subOrder: 1, group: 'Hatha Yoga Practices', parentId: 'bandhas', href: '/hatha-yoga/bandhas/jalandhara-bandha' },
  { id: 'uddiyana-bandha', title: 'Uddiyana Bandha', subtitle: 'Abdominal Lock', order: 34, subOrder: 2, group: 'Hatha Yoga Practices', parentId: 'bandhas', href: '/hatha-yoga/bandhas/uddiyana-bandha' },
  { id: 'mula-bandha', title: 'Mula Bandha', subtitle: 'Root Lock', order: 35, subOrder: 3, group: 'Hatha Yoga Practices', parentId: 'bandhas', href: '/hatha-yoga/bandhas/mula-bandha' },
  { id: 'maha-bandha', title: 'Maha Bandha', subtitle: 'Great Lock', order: 36, subOrder: 4, group: 'Hatha Yoga Practices', parentId: 'bandhas', href: '/hatha-yoga/bandhas/maha-bandha' },
];

export function getHathaTopicById(id: string): HathaTopic | undefined {
  return hathaTopics.find(topic => topic.id === id);
}

export function getAdjacentHathaTopics(id: string): { prev: HathaTopic | null; next: HathaTopic | null } {
  const current = hathaTopics.find(topic => topic.id === id);
  if (!current) return { prev: null, next: null };

  // Sub-topic: navigate only among siblings with the same parentId
  if (current.parentId) {
    const siblings = hathaTopics.filter(t => t.parentId === current.parentId);
    const index = siblings.findIndex(t => t.id === id);
    return {
      prev: index > 0 ? siblings[index - 1] : null,
      next: index < siblings.length - 1 ? siblings[index + 1] : null,
    };
  }

  // Main topic: navigate only among non-sub-topics
  const mainTopics = hathaTopics.filter(t => !t.parentId);
  const index = mainTopics.findIndex(t => t.id === id);
  return {
    prev: index > 0 ? mainTopics[index - 1] : null,
    next: index < mainTopics.length - 1 ? mainTopics[index + 1] : null,
  };
}
