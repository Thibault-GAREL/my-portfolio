// English and French, on the same URL.
//
// Both languages are written into the HTML. Each translated text is a pair of
// spans carrying their own `lang`, and the `lang` of <html> decides which one
// shows (rule in globals.css). It works like the `dark` class: the inline
// script in layout.tsx sets it before the first paint, LanguageToggle flips it,
// and no component holds the language in React state. English is the default.

import type { ReactNode } from 'react'

export type Locale = 'en' | 'fr'

export type Localized<V = string> = Record<Locale, V>

/** A text that reads the same in both languages stays a plain string. */
export type Text = string | Localized

/** localStorage key of the chosen language, read by the script in layout.tsx. */
export const LANGUAGE_STORAGE_KEY = 'lang'

/** The English text, for what CSS cannot switch: React keys, alt attributes. */
export function english(text: Text): string {
  return typeof text === 'string' ? text : text.en
}

/**
 * Renders a text in both languages, the stylesheet hides the inactive one.
 * Inline content (links, bold) goes through the same pair:
 * `<T text={{ en: <>Hi <b>you</b></>, fr: <>Salut <b>toi</b></> }} />`.
 */
export function T({ text }: { text: Text | Localized<ReactNode> }) {
  if (typeof text === 'string') return <>{text}</>

  return (
    <>
      <span lang="en">{text.en}</span>
      <span lang="fr">{text.fr}</span>
    </>
  )
}
