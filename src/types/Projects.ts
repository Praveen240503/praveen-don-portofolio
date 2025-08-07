// This interface defines the properties for a single project object.
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string; // The '?' makes this property optional
  githubUrl?: string; // The '?' makes this property optional
}
