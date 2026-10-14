'use client'

import type { MouseEvent } from 'react'

import { LANGUAGE_STORAGE_KEY, T, type Locale } from '@/lib/i18n'
import { revealFrom } from '@/lib/reveal'

/**
 * English / French switch, built like ThemeToggle. The `lang` of <html> is the
 * single source of truth: the inline script in layout.tsx sets it before the
 * first paint, this button flips it, and globals.css shows the matching text.
 * The button shows the language it switches to, as the moon shows the theme.
 */
export default function LanguageToggle() {
  function toggleLanguage(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement
    const next: Locale = root.lang === 'fr' ? 'en' : 'fr'

    revealFrom(event.currentTarget, () => {
      root.lang = next
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, next)
      } catch {
        // Private browsing can refuse storage, the language still switches.
      }
    })
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center min-w-[2.875rem] p-2 rounded-lg border border-streamlit-border dark:border-[#444c56] hover:bg-streamlit-secondary dark:hover:bg-[#2d333b] transition-[background-color,border-color,transform] duration-150 active:scale-95"
    >
      {/* leading-7 is the line height of the moon's text-xl, so both buttons
          share one height and the letters sit in the middle of it */}
      <span aria-hidden="true" className="text-sm leading-7 font-bold text-streamlit-text dark:text-[#cdd9e5]">
        <T text={{ en: 'FR', fr: 'EN' }} />
      </span>
      <span className="sr-only">
        <T text={{ en: 'Switch to French', fr: 'Passer en anglais' }} />
      </span>
    </button>
  )
}
