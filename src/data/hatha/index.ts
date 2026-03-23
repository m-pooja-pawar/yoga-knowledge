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
import { hathaYogaOverview } from './hatha-yoga-overview';
import { dhauti } from './dhauti';
import { basti } from './basti';
import { neti } from './neti';
import { trataka } from './trataka';
import { nauli } from './nauli';
import { kapalbhati } from './kapalbhati';
import { jalandharaBandha } from './jalandhara-bandha';
import { uddiiyanaBandha } from './uddiyana-bandha';
import { mulaBandha } from './mula-bandha';
import { mahaBandha } from './maha-bandha';
import { chinMudra } from './chin-mudra';
import { jnanaMudra } from './jnana-mudra';
import { chinmayaMudra } from './chinmaya-mudra';
import { adiMudra } from './adi-mudra';
import { brahmaMudra } from './brahma-mudra';
import { yoniMudra } from './yoni-mudra';
import { pranaMudra } from './prana-mudra';
import { apanaMudra } from './apana-mudra';
import { vayuMudra } from './vayu-mudra';
import { shunyaMudra } from './shunya-mudra';
import { prithviMudra } from './prithvi-mudra';
import { varunaMudra } from './varuna-mudra';
import { suryaMudra } from './surya-mudra';
import { hridayaMudra } from './hridaya-mudra';
import { ashwiniMudra } from './ashwini-mudra';

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
  'hatha-yoga-overview': hathaYogaOverview,
  'dhauti': dhauti,
  'basti': basti,
  'neti': neti,
  'trataka': trataka,
  'nauli': nauli,
  'kapalbhati': kapalbhati,
  'jalandhara-bandha': jalandharaBandha,
  'uddiyana-bandha': uddiiyanaBandha,
  'mula-bandha': mulaBandha,
  'maha-bandha': mahaBandha,
  'chin-mudra': chinMudra,
  'jnana-mudra': jnanaMudra,
  'chinmaya-mudra': chinmayaMudra,
  'adi-mudra': adiMudra,
  'brahma-mudra': brahmaMudra,
  'yoni-mudra': yoniMudra,
  'prana-mudra': pranaMudra,
  'apana-mudra': apanaMudra,
  'vayu-mudra': vayuMudra,
  'shunya-mudra': shunyaMudra,
  'prithvi-mudra': prithviMudra,
  'varuna-mudra': varunaMudra,
  'surya-mudra': suryaMudra,
  'hridaya-mudra': hridayaMudra,
  'ashwini-mudra': ashwiniMudra,
};

export function getHathaTopicContent(id: string): TopicContent | undefined {
  return hathaContent[id];
}
