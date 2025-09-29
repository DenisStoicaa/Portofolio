'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useThemeSafe } from './ThemeProvider'
import { useEffect, useState } from 'react'
import FallbackThemeToggle from './FallbackThemeToggle'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useThemeSafe()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show fallback during SSR and initial client render
  if (!mounted) {
    return <FallbackThemeToggle className={className} />
  }

  // If theme context is not available, use fallback
  if (!toggleTheme || toggleTheme.toString() === '() => {}') {
    return <FallbackThemeToggle className={className} />
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : 180,
            opacity: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -180,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  )
}