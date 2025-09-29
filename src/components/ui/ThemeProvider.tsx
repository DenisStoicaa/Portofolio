'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get saved theme or system preference
    try {
      const savedTheme = localStorage.getItem('theme') as Theme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const initialTheme = savedTheme || systemTheme
      
      if (initialTheme !== theme) {
        setTheme(initialTheme)
      }
    } catch (error) {
      console.error('Error initializing theme:', error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Apply theme to document
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    
    // Save theme to localStorage
    try {
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.error('Error saving theme:', error)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Safe version that returns default values if not in provider
export function useThemeSafe() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    console.warn('useThemeSafe: ThemeContext not found, returning defaults')
    return {
      theme: 'light' as const,
      setTheme: () => console.warn('setTheme called outside ThemeProvider'),
      toggleTheme: () => console.warn('toggleTheme called outside ThemeProvider'),
      mounted: false
    }
  }
  return context
}