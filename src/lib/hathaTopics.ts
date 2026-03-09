import { HathaTopic } from './hathaTypes';

export const hathaGroups = [
  'Paths of Yoga',
  'Yogic Philosophy',
  'Classical Yoga',
  'Yogic Psychology',
  'Yogic Life Framework',
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
  { id: 'shatkarma', title: 'Shatkarma', subtitle: 'Six Yogic Cleansing Techniques', order: 19, group: 'Hatha Yoga Practices' },
  { id: 'asana', title: 'Asana', subtitle: 'Yogic Postures', order: 20, group: 'Hatha Yoga Practices' },
  { id: 'pranayama', title: 'Pranayama', subtitle: 'Yogic Breathing Practices', order: 21, group: 'Hatha Yoga Practices' },
  { id: 'mudras', title: 'Mudras', subtitle: 'Yogic Gestures and Energy Seals', order: 22, group: 'Hatha Yoga Practices' },
  { id: 'bandhas', title: 'Bandhas', subtitle: 'Energy Locks', order: 23, group: 'Hatha Yoga Practices' },
  { id: 'meditation', title: 'Meditation', subtitle: 'Dhyana Practices', order: 24, group: 'Hatha Yoga Practices' },
  { id: 'samadhi', title: 'Samadhi', subtitle: 'Higher States of Yogic Absorption', order: 25, group: 'Hatha Yoga Practices' },
];

export function getHathaTopicById(id: string): HathaTopic | undefined {
  return hathaTopics.find(topic => topic.id === id);
}

export function getAdjacentHathaTopics(id: string): { prev: HathaTopic | null; next: HathaTopic | null } {
  const currentIndex = hathaTopics.findIndex(topic => topic.id === id);
  return {
    prev: currentIndex > 0 ? hathaTopics[currentIndex - 1] : null,
    next: currentIndex < hathaTopics.length - 1 ? hathaTopics[currentIndex + 1] : null,
  };
}
