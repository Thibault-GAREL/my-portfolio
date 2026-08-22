'use client'

import type { MouseEvent } from 'react'

/**
 * Dark mode switch. The html class is the single source of truth: the inline
 * script in layout.tsx sets it before the first paint, this button flips it,
 * and every themed style reacts through the `dark:` variant. No React state is
 * involved, so the icon can never disagree with the theme on screen.
 *
 * The switch is revealed by a circle growing from the button (keyframes in
 * globals.css). Everything below only measures where that circle starts.
 */
export default function ThemeToggle() {
  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement
    const next = !root.classList.contains('dark')

    const applyTheme = () => {
      root.classList.toggle('dark', next)
      try {
        localStorage.setItem('darkMode', String(next))
      } catch {
        // Private browsing can refuse storage, the theme still switches.
      }
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // No View Transitions (Firefox, older Safari) or motion turned down:
    // switch straight away, which is what the button did before.
    if (reduceMotion || typeof document.startViewTransition !== 'function') {
      applyTheme()
      return
    }

    // Measured on the button rather than on the pointer, so a keyboard press
    // (Enter or Space, where clientX is 0) starts the circle in the same place.
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    // Distance to the furthest corner, so the circle covers the whole viewport.
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    root.style.setProperty('--reveal-x', `${x}px`)
    root.style.setProperty('--reveal-y', `${y}px`)
    root.style.setProperty('--reveal-radius', `${radius}px`)

    document.startViewTransition(applyTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-streamlit-border dark:border-[#444c56] hover:bg-streamlit-secondary dark:hover:bg-[#2d333b] transition-[background-color,border-color,transform] duration-150 active:scale-95 text-xl"
      aria-label="Toggle dark mode"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  )
}
