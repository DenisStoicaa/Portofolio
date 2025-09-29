import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function scrollToSection(id: string) {
  
  // Add a small delay to ensure DOM is ready
  setTimeout(() => {
    const element = document.getElementById(id)
    
    if (element) {
      // Get the height of the fixed navigation header
      const navElement = document.querySelector('header')
      const navHeight = navElement ? navElement.offsetHeight + 20 : 100 // Add some padding
      
      const elementPosition = element.offsetTop - navHeight
            
      window.scrollTo({
        top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      })
    } else {
      console.error(`Element with id "${id}" not found. Available elements:`, 
        Array.from(document.querySelectorAll('[id]')).map(el => el.id))
    }
  }, 100)
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text)
}