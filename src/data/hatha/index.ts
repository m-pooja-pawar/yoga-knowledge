import { TopicContent } from '@/lib/prenatalTypes';
import { introductionToYoga } from './introduction-to-yoga';
import { historyOfYoga } from './history-of-yoga';
import { pathsOfYoga } from './paths-of-yoga';
import { samkhyaPhilosophy } from './samkhya-philosophy';
import { threeGunas } from './three-gunas';
import { panchakosha } from './panchakosha';
import { pranaSystem } from './prana-system';
import { nadis } from './nadis';
import { chakras } from './chakras';
import { threeDoshas } from './three-doshas';
import { natureOfMind } from './nature-of-mind';
import { chittaVrittis } from './chitta-vrittis';
import { kleshas } from './kleshas';
import { samskarasVasanas } from './samskaras-vasanas';
import { statesOfConsciousness } from './states-of-consciousness';
import { purusharthas } from './purusharthas';
import { ashramas } from './ashramas';
import { patanjaliYogaSutras } from './patanjali-yoga-sutras';
import { asana } from './asana';
import { pranayama } from './pranayama';
import { mudras } from './mudras';
import { bandhas } from './bandhas';
import { shatkarma } from './shatkarma';
import { meditation } from './meditation';
import { samadhi } from './samadhi';

export const hathaContent: Record<string, TopicContent> = {
  'introduction-to-yoga': introductionToYoga,
  'history-of-yoga': historyOfYoga,
  'paths-of-yoga': pathsOfYoga,
  'samkhya-philosophy': samkhyaPhilosophy,
  'three-gunas': threeGunas,
  'panchakosha': panchakosha,
  'prana-system': pranaSystem,
  'nadis': nadis,
  'chakras': chakras,
  'three-doshas': threeDoshas,
  'nature-of-mind': natureOfMind,
  'chitta-vrittis': chittaVrittis,
  'kleshas': kleshas,
  'samskaras-vasanas': samskarasVasanas,
  'states-of-consciousness': statesOfConsciousness,
  'purusharthas': purusharthas,
  'ashramas': ashramas,
  'patanjali-yoga-sutras': patanjaliYogaSutras,
  'asana': asana,
  'pranayama': pranayama,
  'mudras': mudras,
  'bandhas': bandhas,
  'shatkarma': shatkarma,
  'meditation': meditation,
  'samadhi': samadhi,
};

export function getHathaTopicContent(id: string): TopicContent | undefined {
  return hathaContent[id];
}
