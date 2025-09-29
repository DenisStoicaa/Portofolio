'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Filter } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Project } from '../../types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Cartlyee – Shared Shopping Cart App',
    description: 'Cartlyee is a real-time shared shopping cart app with secure invite-code access and Firebase Auth.',
    longDescription: 'Cartlyee is a collaborative shopping cart application that lets users create and join shared carts. Each cart acts like a room where members can add items in real time, making it easy for families, friends, or roommates to organize and track their shopping together. Secure invite codes ensure only authorized members can join, while Firebase Authentication keeps user data safe.',
    image: '/images/Cartlyee Photo.png',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    githubUrl: 'https://github.com/DenisStoicaa',
    liveUrl: 'https://cartlyee.vercel.app',
    featured: true,
    categories: ['fullstack', 'mobile']
  },
  {
    id: '2',
    title: 'AI-Powered Trip Mapper',
    description: 'TripMapper AI uses AI to plan trips, visualize routes, and create optimized itineraries with interactive maps.',
    longDescription: 'TripMapper AI appears to be a web app that helps users plan itineraries, visualize routes or trip stops, and possibly optimize or suggest travel schedules using AI. Users may input destinations, durations, or constraints, and the app generates a plausible trip plan or map. It likely offers interactive map features and route visualizations.',
    image: '/images/TripMapperAI Photo.png',
    technologies: ['React', 'JavaScript', 'HTML', 'Tailwind CSS', 'Netlify'],
    githubUrl: 'https://github.com/DenisStoicaa',
    liveUrl: 'https://tripmapperai.netlify.app/',
    featured: false,
    categories: ['frontend', 'mobile']
  },
  {
    id: '3',
    title: 'AI Resume & Cover Letter Generator',
    description: 'A web tool to automatically generate resumes and cover letters using AI.',
    longDescription: 'This app enables users to input job description, personal info, work experience, skills, etc., and then the system generates tailored resumes and cover letters with appropriate formatting and language. It likely uses a language model (e.g. OpenAI GPT) to produce content. It may allow editing, templates, and export (PDF or text). The cover letter generation is integrated alongside resume generation.',
    image: '/images/AiResumeGenerator Photo.png',
    technologies: ['React', 'TypeScript', 'HTML', 'Tailwind CSS', 'Netlify'],
    githubUrl: 'https://github.com/DenisStoicaa',
    liveUrl: 'https://airesumegeneratorr.netlify.app/',
    featured: false,
    categories: ['frontend', 'mobile']
  },
  {
    id: '4',
    title: 'SkillSwap: Local Talent Exchange',
    description: 'A platform to exchange or trade skills locally.',
    longDescription: 'SkillSwap appears to be a web application that connects people who want to exchange services or skills (e.g. tutoring, handyman, design, etc.). Users can offer skills or request skills, and the platform matches them or allows barter/trading. It may have features like user profiles, service listings, messaging or negotiation, ratings, and local filtering (by location or proximity).',
    image: '/images/SkillSwap Photo.png',
    technologies: ['React', 'JavaScript', 'Netlify', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/DenisStoicaa',
    liveUrl: 'https://skillswaappp.netlify.app/',
    featured: false,
    categories: ['frontend', 'mobile']
  },
  {
    id: '5',
    title: 'Apartment Landing Page',
    description: 'Landing page for an AirBnb apartment.',
    longDescription: 'A modern landing page for an AirBnb apartment featuring a photo gallery, booking form, and user reviews.',
    image: '/images/AirBnbLandingPage Photo.png',
    technologies: ['React', 'JavaScript', 'Netlify', 'CSS', 'Vite'],
    githubUrl: 'https://github.com/DenisStoicaa',
    liveUrl: 'https://casaancayste.netlify.app/',
    featured: false,
    categories: ['frontend', 'mobile']
  }
]

const categories = ['all', 'frontend', 'fullstack', 'mobile']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory as 'frontend' | 'fullstack' | 'mobile'))

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Spotlight Project</h3>
          <div className="flex justify-center max-w-4xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group w-full max-w-2xl"
              >
                <div className="bg-card rounded-xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-primary/10 to-purple-600/10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-primary/10 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded-md font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length - 6} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}