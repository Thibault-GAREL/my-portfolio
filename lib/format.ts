// Display helpers derived from the ISO dates stored in data/projects.ts.
// Nothing here is hand-written per project, so the cards, the "By Date" view
// and the Gantt can never drift apart again.

import type { Locale, Localized } from './i18n'

const MONTHS: Localized<string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
}

/**
 * Month name for the Gantt axis, `month` counted from 0: "Sep" / "sept".
 * The French abbreviation dot is dropped, at one label every 23 px it made
 * neighbouring months touch.
 */
export function monthLabel(month: number): Localized {
  return { en: MONTHS.en[month], fr: MONTHS.fr[month].replace('.', '') }
}

/**
 * Parses "2026-05-17" without going through the Date constructor, which shifts
 * the month depending on the reader's timezone.
 */
function parseIso(iso: string): { year: number; month: number } {
  const [year, month] = iso.split('-').map(Number)
  return { year, month: month - 1 }
}

function formatIn(locale: Locale, start: string, end: string): string {
  const months = MONTHS[locale]
  const from = parseIso(start)
  const to = parseIso(end)

  if (from.year !== to.year) {
    return `${months[from.month]} ${from.year} - ${months[to.month]} ${to.year}`
  }
  if (from.month === to.month) {
    return `${months[from.month]} ${from.year}`
  }
  return `${months[from.month]} - ${months[to.month]} ${from.year}`
}

/**
 * "Mar - Apr 2026", "May 2026", "Nov 2025 - Jan 2026", and the same in French:
 * "mars - avr. 2026". Same shape as the labels that used to be typed by hand.
 */
export function formatDateRange(start: string, end: string): Localized {
  return { en: formatIn('en', start, end), fr: formatIn('fr', start, end) }
}

export function compareByStartDate(
  a: { start: string },
  b: { start: string }
): number {
  return a.start.localeCompare(b.start)
}
