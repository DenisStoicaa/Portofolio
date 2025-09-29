'use client'

import { ThemeProvider } from './ThemeProvider'
import { useEffect, useState } from 'react'

interface ClientThemeWrapperProps {
  children: React.ReactNode
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}