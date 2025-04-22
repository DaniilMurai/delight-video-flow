
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string; // in format "MM:SS"
  views: number;
  likes: number;
  date: string; // ISO date string
  embedUrl: string;
  tags: string[];
  categories: string[];
  source: "pornhub" | "xhamster" | "xvideos" | "other";
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}
