// This script runs before React hydration to prevent theme flash
export default function ThemeScript() {
  const scriptContent = `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
      } catch (e) {
        // Fallback to light theme if something goes wrong
        document.documentElement.classList.add('light');
      }
    })()
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
    />
  );
}