'use client'

import type { MouseEvent } from 'react'

import { T } from '@/lib/i18n'
import { revealFrom } from '@/lib/reveal'

/**
 * Dark mode switch. The html class is the single source of truth: the inline
 * script in layout.tsx sets it before the first paint, this button flips it,
 * and every themed style reacts through the `dark:` variant. No React state is
 * involved, so the icon can never disagree with the theme on screen.
 *
 * The switch is revealed by a circle growing from the button (lib/reveal.ts).
 */
export default function ThemeToggle() {
  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement
    const next = !root.classList.contains('dark')

    revealFrom(event.currentTarget, () => {
      root.classList.toggle('dark', next)
      try {
        localStorage.setItem('darkMode', String(next))
      } catch {
        // Private browsing can refuse storage, the theme still switches.
      }
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-streamlit-border dark:border-[#444c56] hover:bg-streamlit-secondary dark:hover:bg-[#2d333b] transition-[background-color,border-color,transform] duration-150 active:scale-95 text-xl"
    >
      <span aria-hidden="true" className="dark:hidden">🌙</span>
      <span aria-hidden="true" className="hidden dark:inline">☀️</span>
      <span className="sr-only">
        <T text={{ en: 'Toggle dark mode', fr: 'Basculer le mode sombre' }} />
      </span>
    </button>
  )
}
