export interface Verse {
  verse_number: string;
  sanskrit: string;
  hindi: string;
  english: string;
}

export interface ChapterData {
  id: string;
  title_sanskrit: string;
  title_hindi: string;
  title_english: string;
  total_verse: number;
  verses: Verse[];
}

export interface ChapterInfo {
  id: string;
  title_sanskrit: string;
  title_english: string;
}
