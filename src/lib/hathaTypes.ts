export interface HathaTopic {
  id: string;
  title: string;
  subtitle: string;
  order: number;
  group: string;
  parentId?: string;
  href?: string;
  subOrder?: number;
}
