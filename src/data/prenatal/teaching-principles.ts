import { TopicContent } from '@/lib/prenatal-types';

export const teachingPrinciples: TopicContent = {
  id: 'teaching-principles',
  title: 'Core Yoga Teaching Principles',
  sections: [
    {
      type: 'heading',
      content: 'Key Principle: Never Follow a Fixed List'
    },
    {
      type: 'list',
      items: [
        'Asana lists are NOT to be followed blindly.',
        'Every class should be modified based on the daily condition of the pregnant woman.',
        'Start the class by asking: "How are you feeling today? Any discomfort?" Continue asking during class.'
      ]
    },
    {
      type: 'heading',
      content: 'Order of Class'
    },
    {
      type: 'list',
      items: [
        'No strict Hatha-yoga style sequencing.',
        'Avoid starting with supine if she feels breathless or uneasy.',
        'Suggested safe pattern: Sitting warmup → Standing → Back to sitting → Supine → End sitting.'
      ]
    },
    {
      type: 'heading',
      content: 'Never Give Intense Poses Back-to-Back'
    },
    {
      type: 'list',
      items: [
        "Don't combine Deviasana + Warrior + Malasana.",
        'Always alternate intense → gentle to avoid heart rate spikes.'
      ]
    },
    {
      type: 'heading',
      content: 'Support Must Be Used'
    },
    {
      type: 'list',
      items: [
        'Wall support is mandatory for standing/balancing asanas due to the center-of-gravity shift.'
      ]
    },
    {
      type: 'heading',
      content: 'Ask for Doctor\'s Advice, But Use Your Judgment'
    },
    {
      type: 'list',
      items: [
        'Even if the doctor says "okay," the yoga teacher must still avoid unsafe movements.',
        'Example: spotting/bleeding → No pelvic openers, regardless of doctor\'s permission.'
      ]
    }
  ]
};
