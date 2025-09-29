'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Palette, Database, Globe, Zap } from 'lucide-react'
import Image from 'next/image'

const skills = [
  {
    name: 'Frontend Development',
    icon: Code,
    technologies: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
    description: 'Creating responsive, interactive user interfaces'
  },
  {
    name: 'Styling & Design',
    icon: Palette,
    technologies: ['Tailwind CSS', 'Styled Components', 'Framer Motion', 'SASS/SCSS', 'CSS Modules', 'Material-UI', 'ShadCN', 'Figma'],
    description: 'Crafting beautiful, modern designs with smooth animations'
  },
  {
    name: 'Backend Development',
    icon: Database,
    technologies: ['Node.js', 'Firebase', 'REST APIs','Express.js','Vercel'],
    description: 'Building scalable server-side applications and databases'
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    technologies: ['React Native', 'PWA', 'Responsive Design', 'Expo', 'Mobile-First Design'],
    description: 'Mobile-first development approach'
  },
  {
    name: 'Web Technologies',
    icon: Globe,
    technologies: ['Git', 'Vercel', 'CI/CD', 'Netlify','Bash', 'ESLint', 'Prettier'],
    description: 'Modern development tools and deployment practices'
  },
  {
    name: 'Performance',
    icon: Zap,
    technologies: ['SEO', 'Lighthouse', 'Code Splitting', 'Optimization', 'Lazy Loading', 'Web Vitals', 'Caching', 'CDN', 'Image Optimization'],
    description: 'Optimizing for speed and user experience'
  }
]

const techStack = [
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Git', color: '#F05032' }
]

export default function AboutSection() {

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/Me.jpg"
                    alt="Denis Stoica"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Denis Stoica</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. 
                My journey began with HTML and CSS, and has evolved into creating comprehensive web applications 
                using React, Next.js, and Firebase.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in writing clean, maintainable code and creating user experiences that are both 
                beautiful and functional. My approach focuses on mobile-first responsive design, performance 
                optimization, and accessibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I enjoy staying up-to-date with the latest web technologies, 
                contributing to open-source projects, and continuously learning new skills to improve 
                my craft.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold ml-3">{skill.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}