import { Category, WorkItem } from './types';

export const SITE_TITLE = "KAZUTO MORI";
export const SITE_SUBTITLE = "DIRECTOR / EDITOR / WRITER";

export const PORTFOLIO_ITEMS: WorkItem[] = [
  // FILMS
  {
    id: 'f1',
    title: 'THE RED CORRIDOR',
    category: Category.FILM,
    year: '2023',
    description: 'A psychological thriller about memory and architecture.',
    details: 'Shot on 16mm film, this short explores the concept of "memory palaces" through a brutalist lens. Influenced heavily by Kubrick\'s use of one-point perspective and the non-linear storytelling of Nolan. The sound design utilizes infrasound to create unconscious tension.',
    imageUrl: 'https://picsum.photos/id/1029/800/450',
    tags: ['Short Film', '16mm', 'Psychological'],
  },
  {
    id: 'f2',
    title: 'ECHOES OF SILENCE',
    category: Category.FILM,
    year: '2022',
    description: 'An experimental documentary capturing urban loneliness.',
    details: 'A study of Tokyo at 4 AM. No dialogue, only ambient city sounds and a haunting score. The camera acts as a ghost, observing but never interacting. Inspired by the atmospheric dread in Kurosawa\'s "Cure".',
    imageUrl: 'https://picsum.photos/id/1033/800/450',
    tags: ['Documentary', 'Experimental', 'Tokyo'],
  },
  {
    id: 'f3',
    title: 'MEMENTO MORI',
    category: Category.FILM,
    year: '2024',
    description: 'A narrative music video dealing with grief and time loops.',
    details: 'The protagonist wakes up at the same funeral every day, but the deceased person changes each time. Used heavy color grading to distinguish between loops. Fast-paced editing inspired by Tarantino sequences.',
    imageUrl: 'https://picsum.photos/id/1043/800/450',
    tags: ['Music Video', 'Narrative', 'Color Graded'],
  },

  // PHOTOS
  {
    id: 'p1',
    title: 'NEON DYSTOPIA',
    category: Category.PHOTO,
    year: '2023',
    description: 'Street photography series focused on rain and neon lights.',
    details: 'Shot with a high ISO to embrace the grain. The series attempts to capture the feeling of being watched in a crowded city.',
    imageUrl: 'https://picsum.photos/id/1053/600/800',
    tags: ['Street', 'Night', 'Neon'],
  },
  {
    id: 'p2',
    title: 'ABANDONED',
    category: Category.PHOTO,
    year: '2022',
    description: 'Architecture photography of forgotten brutalist structures.',
    details: 'Focusing on texture and decay. Shadows are crushed to pure black to emphasize form over detail.',
    imageUrl: 'https://picsum.photos/id/1070/600/800',
    tags: ['Architecture', 'B&W', 'Brutalist'],
  },
  {
    id: 'p3',
    title: 'PORTRAIT OF ANXIETY',
    category: Category.PHOTO,
    year: '2023',
    description: 'Studio portraits exploring human fragility.',
    details: 'Using harsh, single-source lighting to create deep shadows, reminiscent of film noir cinematography.',
    imageUrl: 'https://picsum.photos/id/106/600/800',
    tags: ['Portrait', 'Studio', 'Noir'],
  },

  // POSTERS
  {
    id: 'd1',
    title: 'FILM FESTIVAL 2024',
    category: Category.POSTER,
    year: '2024',
    description: 'Key visual identity for the university film festival.',
    details: 'Minimalist typography meeting chaotic textures. The concept was "Order from Chaos".',
    imageUrl: 'https://picsum.photos/id/1068/600/850',
    tags: ['Graphic Design', 'Typography', 'Branding'],
  },
  {
    id: 'd2',
    title: 'THE RED CORRIDOR (POSTER)',
    category: Category.POSTER,
    year: '2023',
    description: 'Official promotional poster for the short film.',
    details: 'Uses a recursive visual effect (Droste effect) to imply the infinite hallway loop of the film.',
    imageUrl: 'https://picsum.photos/id/1081/600/850',
    tags: ['Poster', 'Film Promotion'],
  },

  // WRITING
  {
    id: 'w1',
    title: 'THE GAZE OF HITCHCOCK',
    category: Category.WRITING,
    year: '2023',
    description: 'Critical essay on voyeurism in "Rear Window".',
    details: 'An analysis of how Hitchcock implicates the audience in the act of voyeurism, making us accomplices to the protagonist\'s obsession. Published in the university film journal.',
    imageUrl: 'https://picsum.photos/id/1072/800/600',
    tags: ['Essay', 'Criticism', 'Hitchcock'],
  },
  {
    id: 'w2',
    title: 'FRAGMENTED TIME',
    category: Category.WRITING,
    year: '2024',
    description: 'Analysis of non-linear narratives in modern cinema.',
    details: 'Comparing "Memento", "Pulp Fiction", and "Eternal Sunshine". Explores how editing shapes our perception of causality.',
    imageUrl: 'https://picsum.photos/id/1057/800/600',
    tags: ['Essay', 'Editing', 'Narrative'],
  }
];

export const DIRECTORS_INFLUENCE = [
  "Alfred Hitchcock",
  "Quentin Tarantino",
  "Stanley Kubrick",
  "Christopher Nolan",
  "Kiyoshi Kurosawa"
];