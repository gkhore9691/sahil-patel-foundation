import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);

    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setCurrentTheme(initialTheme);

    // Ensure the document has the correct theme class
    const root = document.documentElement;
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);

    // Apply theme immediately
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Store theme preference
    localStorage.setItem('theme', newTheme);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="size-12 animate-pulse rounded-full bg-white/10"></div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="relative inline-flex size-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative">
        {/* Sun Icon */}
        <svg
          className={`absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-gray-700 transition-all duration-300 ${
            currentTheme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-gray-200 transition-all duration-300 ${
            currentTheme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
