'use client'

import { motion } from 'framer-motion'
import { Calendar, Code2, Rocket, Trophy, BookOpen, Zap } from 'lucide-react'
import { Experience } from '../../types'

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Started with HTML & CSS',
    period: '2020',
    description: 'Began my web development journey by learning the fundamentals of web markup and styling. Created my first static websites and learned about responsive design principles.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
    achievement: 'Built my first responsive portfolio website'
  },
  {
    id: '2',
    title: 'Discovered JavaScript',
    period: '2021',
    description: 'Dove deep into JavaScript programming, learning ES6+ features, DOM manipulation, and asynchronous programming. Started building interactive web applications.',
    technologies: ['JavaScript', 'ES6+', 'DOM API', 'Fetch API'],
    achievement: 'Created a dynamic weather app with API integration'
  },
  {
    id: '3',
    title: 'Embraced Modern Frameworks',
    period: '2022',
    description: 'Learned React and its ecosystem, including hooks, context, and state management. Discovered the power of component-based architecture and modern development workflows.',
    technologies: ['React', 'React Hooks', 'Component Architecture', 'npm'],
    achievement: 'Built a full-featured task management application'
  },
  {
    id: '4',
    title: 'Styling with Tailwind CSS',
    period: '2023',
    description: 'Adopted Tailwind CSS for utility-first styling approach. Learned to create beautiful, responsive designs quickly while maintaining consistency across projects.',
    technologies: ['Tailwind CSS', 'Utility-First CSS', 'Design Systems'],
    achievement: 'Redesigned multiple projects with improved UI/UX'
  },
   {
    id: '5',
    title: 'Advanced Techniques & Optimization',
    period: '2024',
    description: 'Focused on performance optimization, TypeScript adoption, advanced animations, and best practices.',
    technologies: ['TypeScript', 'Performance Optimization', 'Framer Motion', 'SEO'],
    achievement: 'Migrated all projects to TypeScript and achieved 95%+ performance scores'
  },
  {
    id: '6',
    title: 'Full-Stack Development',
    period: '2025',
    description: 'Expanded into full-stack development with Next.js and Firebase. Learned about server-side rendering, API routes, and backend services integration.',
    technologies: ['Next.js', 'Firebase', 'API Development', 'Authentication'],
    achievement: 'Launched first full-stack application'
  }
 
]

const achievements = [
  {
    icon: Code2,
    title: '50+ Projects Completed',
    description: 'From simple static sites to complex full-stack applications'
  },
  {
    icon: Rocket,
    title: '100% Lighthouse Scores',
    description: 'Optimized for performance, accessibility, and SEO'
  },
  {
    icon: Trophy,
    title: 'Clean Code Advocate',
    description: 'Following best practices and modern development standards'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always staying up-to-date with latest web technologies'
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From learning HTML basics to building full-stack applications, 
            here&apos;s how my web development journey has evolved over the years.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-purple-500 to-primary opacity-30" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{experience.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {experience.achievement && (
                      <div className="flex items-start gap-2 mb-4 p-3 bg-primary/5 rounded-lg">
                        <Trophy className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary font-medium">
                          {experience.achievement}
                        </span>
                      </div>
                    )}
                    
                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Key Achievements</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Continuation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-xl border border-primary/20"
        >
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">The Journey Continues</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My learning never stops! Currently exploring advanced React patterns, 
            microservices architecture, and emerging web technologies to stay at the 
            forefront of modern development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}