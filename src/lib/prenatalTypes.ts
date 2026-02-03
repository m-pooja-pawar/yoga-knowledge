export interface PrenatalTopic {
  id: string;
  title: string;
  order: number;
}

export interface ContentSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'image' | 'table' | 'note';
  content?: string;
  items?: string[];
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
