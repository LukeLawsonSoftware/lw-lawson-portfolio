export interface ProjectMetaItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectBlogItem {
  text: string;
}
