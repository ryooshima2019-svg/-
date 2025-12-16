export enum Page {
  INTRO = 'INTRO',
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
}

export enum Category {
  FILM = 'FILM',
  PHOTO = 'PHOTO',
  POSTER = 'POSTER',
  WRITING = 'WRITING',
}

export interface WorkItem {
  id: string;
  title: string;
  category: Category;
  year: string;
  description: string;
  details: string; // Long form text
  imageUrl: string;
  videoUrl?: string; // Optional for non-film items
  tags: string[];
}