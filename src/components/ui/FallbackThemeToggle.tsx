'use client'

import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

interface FallbackThemeToggleProps {
  className?: string
}

export default function FallbackThemeToggle({ className = '' }: FallbackThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }

  if (!mounted) {
    return (
      <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 border ${className}`}>
        <Sun className="w-5 h-5 text-yellow-500" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 border hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </div>
    </button>
  )
}