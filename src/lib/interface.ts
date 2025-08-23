export interface Post {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  author: number;
  categories: number[];
  jetpack_featured_media_url?: string;
  excerpt: { rendered: string; protected: boolean };
  tags: number[];
}

export type APIResponse<T> = T[];
