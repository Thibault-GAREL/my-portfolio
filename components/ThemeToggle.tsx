'use client'

/**
 * Dark mode switch. The html class is the single source of truth: the inline
 * script in layout.tsx sets it before the first paint, this button flips it,
 * and every themed style reacts through the `dark:` variant. No React state is
 * involved, so the icon can never disagree with the theme on screen.
 */
export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const next = !root.classList.contains('dark')
    root.classList.toggle('dark', next)

    try {
      localStorage.setItem('darkMode', String(next))
    } catch {
      // Private browsing can refuse storage, the theme still switches.
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-streamlit-border dark:border-[#444c56] hover:bg-streamlit-secondary dark:hover:bg-[#2d333b] transition-colors text-xl"
      aria-label="Toggle dark mode"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  )
}
