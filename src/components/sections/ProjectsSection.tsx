'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Filter } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Project } from '../../types'

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce solution built with Next.js and Firebase, featuring real-time inventory management, secure payment processing with Stripe, and a powerful admin panel for managing products and orders.',
    image: '/images/ecommerce-project.jpg',
    technologies: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/DenisStoicaa/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team features, and project organization.',
    longDescription: 'A productivity-focused application that helps teams organize their work with Kanban boards, real-time collaboration, deadline tracking, and comprehensive reporting features.',
    image: '/images/task-management.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
    githubUrl: 'https://github.com/DenisStoicaa/task-manager',
    liveUrl: 'https://taskmaster-app.vercel.app',
    featured: true,
    category: 'fullstack'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and historical data.',
    longDescription: 'A modern weather application featuring 7-day forecasts, interactive weather maps, severe weather alerts, and detailed analytics with beautiful data visualizations.',
    image: '/images/weather-dashboard.jpg',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
    githubUrl: 'https://github.com/DenisStoicaa/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    featured: false,
    category: 'frontend'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills with modern design and animations.',
    longDescription: 'This very website! Built with Next.js 15, featuring dark/light mode, smooth animations with Framer Motion, and optimized for performance and accessibility.',
    image: '/images/portfolio-website.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/DenisStoicaa/portfolio',
    liveUrl: 'https://denisstoica.dev',
    featured: false,
    category: 'frontend'
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'Real-time chat application with group messaging, file sharing, and emoji reactions.',
    longDescription: 'A modern chat application with real-time messaging, group chats, file uploads, emoji reactions, and user presence indicators built with Socket.io.',
    image: '/images/chat-app.jpg',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'Cloudinary'],
    githubUrl: 'https://github.com/DenisStoicaa/chat-app',
    liveUrl: 'https://chat-app-demo.vercel.app',
    featured: false,
    category: 'fullstack'
  },
  {
    id: '6',
    title: 'Recipe Finder',
    description: 'Recipe discovery app with ingredient-based search, meal planning, and shopping lists.',
    longDescription: 'A comprehensive recipe application that helps users find recipes based on available ingredients, plan meals for the week, and generate shopping lists automatically.',
    image: '/images/recipe-finder.jpg',
    technologies: ['React Native', 'Firebase', 'Spoonacular API', 'Expo'],
    githubUrl: 'https://github.com/DenisStoicaa/recipe-finder',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.recipe.finder',
    featured: false,
    category: 'mobile'
  }
]

const categories = ['all', 'frontend', 'fullstack', 'mobile', 'other']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)
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
          <h3 className="text-2xl font-bold mb-8 text-center">Spotlight Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-card rounded-xl border border-border shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/50">{project.title.split(' ').map(word => word[0]).join('')}</div>
                    <div className="absolute top-4 right-4">
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
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
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
                <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                  <div className="text-2xl font-bold text-primary/50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
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
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 3}
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 border border-border text-foreground text-sm rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 4 && (
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
              {showAll ? 'Show Less' : `Show All (${filteredProjects.length - 4} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}