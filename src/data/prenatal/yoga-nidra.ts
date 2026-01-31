import { TopicContent } from '@/lib/prenatal-types';

export const yogaNidra: TopicContent = {
  id: 'yoga-nidra',
  title: 'Yoga Nidra',
  sections: [
    {
      type: 'heading',
      content: 'Yoga Nidra vs Meditation'
    },
    {
      type: 'table',
      headers: ['Aspect', 'Yoga Nidra', 'Meditation'],
      rows: [
        ['Body position', 'Lying down', 'Sitting/upright'],
        ['Guidance', 'Always guided', 'Guided or silent'],
        ['Awareness', 'Subconscious', 'Conscious'],
        ['Effort', 'Minimal', 'Active focus'],
        ['State', 'Deep relaxation', 'Alert awareness'],
        ['Sleep helpful?', 'Yes (very effective)', 'Indirectly']
      ]
    },
    {
      type: 'note',
      content: 'Yoga Nidra reduces stress and anxiety levels. For Depression - No Yoga Nidra, Give Meditation instead.'
    },
    {
      type: 'list',
      items: [
        'Time: 15 to 20 mins.',
        'Once the practitioner enjoys full Yoga Nidra, 50 to 60 mins can be practiced.'
      ]
    },
    {
      type: 'heading',
      content: 'Order of Yoga Nidra Practice'
    },
    {
      type: 'list',
      items: [
        'Start with sankalpa',
        'Then breathings',
        'Ask her to take a comfortable position, give her 3 to 5 mins to adjust herself as yoga nidra starts, the position should not be changed',
        'Preferred position - comfortable side lying',
        'Body Relaxation',
        'In between, add om chanting to break the rhythm, which will bring the awareness back and make sure that the practitioner does not sleep',
        'If time permits, add any visualization - baby connection meditation or honoring oneself meditation',
        'Again breathing',
        'Recollect the sankalpa',
        'Come back to the state of awareness',
        'End the yoga nidra'
      ]
    },
    {
      type: 'note',
      content: 'For authentic yoga nidra, no music in the background.'
    }
  ]
};
