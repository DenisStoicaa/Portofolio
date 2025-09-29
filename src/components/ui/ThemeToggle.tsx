'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useThemeSafe } from './ThemeProvider'

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useThemeSafe()

  const handleToggle = () => {
    if (mounted) {
      toggleTheme()
    }
  }

  // Always render the same structure to prevent hydration mismatch
  return (
    <motion.button
      onClick={handleToggle}
      className={`relative p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 ${className}`}
      whileHover={mounted ? { scale: 1.05 } : {}}
      whileTap={mounted ? { scale: 0.95 } : {}}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: mounted && theme === 'light' ? 1 : 0,
            rotate: mounted && theme === 'light' ? 0 : 180,
            opacity: mounted && theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: mounted && theme === 'dark' ? 1 : 0,
            rotate: mounted && theme === 'dark' ? 0 : -180,
            opacity: mounted && theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
        
        {/* Fallback icon for SSR */}
        {!mounted && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Sun className="w-5 h-5 text-yellow-500" />
          </div>
        )}
      </div>
    </motion.button>
  )
}