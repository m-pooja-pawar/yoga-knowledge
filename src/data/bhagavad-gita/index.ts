import { ChapterData } from '@/lib/bhagavadGitaTypes';

import { chapter1 } from './chapter-1';
import { chapter2 } from './chapter-2';
import { chapter3 } from './chapter-3';
import { chapter4 } from './chapter-4';
import { chapter5 } from './chapter-5';
import { chapter6 } from './chapter-6';
import { chapter7 } from './chapter-7';
import { chapter8 } from './chapter-8';
import { chapter9 } from './chapter-9';
import { chapter10 } from './chapter-10';
import { chapter11 } from './chapter-11';
import { chapter12 } from './chapter-12';
import { chapter13 } from './chapter-13';
import { chapter14 } from './chapter-14';
import { chapter15 } from './chapter-15';
import { chapter16 } from './chapter-16';
import { chapter17 } from './chapter-17';
import { chapter18 } from './chapter-18';

export {
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
  chapter16,
  chapter17,
  chapter18,
};

export const chapters: Record<string, ChapterData> = {
  'chapter-1': chapter1,
  'chapter-2': chapter2,
  'chapter-3': chapter3,
  'chapter-4': chapter4,
  'chapter-5': chapter5,
  'chapter-6': chapter6,
  'chapter-7': chapter7,
  'chapter-8': chapter8,
  'chapter-9': chapter9,
  'chapter-10': chapter10,
  'chapter-11': chapter11,
  'chapter-12': chapter12,
  'chapter-13': chapter13,
  'chapter-14': chapter14,
  'chapter-15': chapter15,
  'chapter-16': chapter16,
  'chapter-17': chapter17,
  'chapter-18': chapter18,
};

export const chapterList = Object.values(chapters);
