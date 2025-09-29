'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react'
import { scrollToSection } from '../../lib/utils'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:30px_30px] sm:bg-[size:50px_50px] opacity-30" />
      
      {/* Floating elements - adjusted for mobile */}
      <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Denis Stoica
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Web Developer
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building modern, fast, and scalable web experiences with clean code 
            and pixel-perfect design. Passionate about creating solutions that matter.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px]"
            >
              View Projects
              <ArrowDown className="inline-block w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 min-h-[44px]"
            >
              Contact Me
            </button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="https://github.com/DenisStoicaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit GitHub profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/denis-andrei-stoica-4788bb387/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:denis2006stoica@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator - hidden on small screens for better mobile experience */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}