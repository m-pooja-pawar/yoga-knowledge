export interface PrenatalTopic {
  id: string;
  title: string;
  order: number;
}

export interface CardItem {
  title: string;
  subtitle: string;
  href: string;
}

export interface ContentSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'image' | 'table' | 'note' | 'cards';
  content?: string;
  items?: string[];
  cardItems?: CardItem[];
  src?: string;
  alt?: string;
  caption?: string;
  rows?: string[][];
  headers?: string[];
}

export interface TopicContent {
  id: string;
  title: string;
  sections: ContentSection[];
}
