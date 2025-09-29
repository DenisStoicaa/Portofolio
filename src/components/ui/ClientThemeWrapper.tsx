'use client'

import { ThemeProvider } from './ThemeProvider'

interface ClientThemeWrapperProps {
  children: React.ReactNode
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}