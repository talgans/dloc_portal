export type ThemeColor = 'blue' | 'green';

export interface ResourceTag {
  label: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  link: string;
  theme: ThemeColor;
  tags: string[]; // Simple string array for tag labels
  iconPath: string; // SVG path d attribute
}