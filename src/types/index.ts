export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: 'frontend' | 'fullstack' | 'mobile' | 'other'
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'design'
}

export interface Experience {
  id: string
  title: string
  period: string
  description: string
  technologies?: string[]
  achievement?: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}