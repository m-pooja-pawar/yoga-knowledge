import { TopicContent } from '@/lib/prenatalTypes';
import { yogaAndBenefits } from './yoga-and-benefits';
import { sankalpa } from './sankalpa';
import { anatomyChanges } from './anatomy-changes';
import { trimesterChanges } from './trimester-changes';
import { pregnancyIssues } from './pregnancy-issues';
import { teachingPrinciples } from './teaching-principles';
import { prenatalAsanasList } from './prenatal-asanas-list';
import { asanasBenefitsContraindications } from './asanas-benefits-contraindications';
import { trimester1Asanas } from './trimester1-asanas';
import { trimester2Asanas } from './trimester2-asanas';
import { trimester3Asanas } from './trimester3-asanas';
import { pelvicFloorExercises } from './pelvic-floor-exercises';
import { pranayama } from './pranayama';
import { mudras } from './mudras';
import { chanting } from './chanting';
import { meditationVisualization } from './meditation-visualization';
import { classDesign } from './class-design';
import { cleansingTechniques } from './cleansing-techniques';
import { garbhsanskar } from './garbhsanskar';
import { ragas } from './ragas';
import { madalasa } from './madalasa';
import { yogaNidra } from './yoga-nidra';
import { labour } from './labour';
import { breastfeeding } from './breastfeeding';
import { infantMassage } from './infant-massage';
import { postnatalCare } from './postnatal-care';
import { postnatalAsanas } from './postnatal-asanas';

export const prenatalContent: Record<string, TopicContent> = {
  'yoga-and-benefits': yogaAndBenefits,
  'sankalpa': sankalpa,
  'anatomy-changes': anatomyChanges,
  'trimester-changes': trimesterChanges,
  'pregnancy-issues': pregnancyIssues,
  'teaching-principles': teachingPrinciples,
  'prenatal-asanas-list': prenatalAsanasList,
  'asanas-benefits-contraindications': asanasBenefitsContraindications,
  'trimester1-asanas': trimester1Asanas,
  'trimester2-asanas': trimester2Asanas,
  'trimester3-asanas': trimester3Asanas,
  'pelvic-floor-exercises': pelvicFloorExercises,
  'pranayama': pranayama,
  'mudras': mudras,
  'chanting': chanting,
  'meditation-visualization': meditationVisualization,
  'class-design': classDesign,
  'cleansing-techniques': cleansingTechniques,
  'garbhsanskar': garbhsanskar,
  'ragas': ragas,
  'madalasa': madalasa,
  'yoga-nidra': yogaNidra,
  'labour': labour,
  'breastfeeding': breastfeeding,
  'infant-massage': infantMassage,
  'postnatal-care': postnatalCare,
  'postnatal-asanas': postnatalAsanas,
};

export function getTopicContent(id: string): TopicContent | undefined {
  return prenatalContent[id];
}
