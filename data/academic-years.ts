// Engineering school years, September to August, matching the Academic
// Background timeline (2022-2023 is the 1st year at ECE Lyon).
//
// This is the only place the year boundaries are written down: the Gantt header
// draws its bands from here, and every project card derives its own year from
// here too, so a card can never claim a year its bar does not sit in.

import type { Localized } from '@/lib/i18n'

export type AcademicYear = {
  ordinal: string
  /** French ordinal: "1re", "2e". */
  ordinalFr: string
  start: string
  end: string
  /** Band colour in the Gantt header. */
  color: string
}

export const ACADEMIC_YEARS: AcademicYear[] = [
  { ordinal: '1st', ordinalFr: '1re', start: '2022-09-01', end: '2023-08-31', color: '#E3F2FD' },
  { ordinal: '2nd', ordinalFr: '2e', start: '2023-09-01', end: '2024-08-31', color: '#F3E5F5' },
  { ordinal: '3rd', ordinalFr: '3e', start: '2024-09-01', end: '2025-08-31', color: '#FFF3E0' },
  { ordinal: '4th', ordinalFr: '4e', start: '2025-09-01', end: '2026-08-31', color: '#E8F5E9' }
]

/** Days since epoch, parsed without the local timezone shifting the date. */
function toDays(iso: string): number {
  const [year, month, day] = iso.split('-').map(Number)
  return Date.UTC(year, month - 1, day) / 86400000
}

/**
 * The academic year a project belongs to, decided by the middle of its period.
 * A project running from July to October sits mostly in the year that starts in
 * September, so the midpoint is what settles it rather than the start or the end
 * alone. Periods before the first year or after the last one clamp to it.
 */
export function academicYearFor(start: string, end: string): AcademicYear {
  const midpoint = (toDays(start) + toDays(end)) / 2

  let match = ACADEMIC_YEARS[0]
  for (const year of ACADEMIC_YEARS) {
    if (toDays(year.start) <= midpoint) {
      match = year
    }
  }
  return match
}

/** Label printed on a project card: "4th year" / "4e année". */
export function yearLabel(year: AcademicYear): Localized {
  return { en: `${year.ordinal} year`, fr: `${year.ordinalFr} année` }
}

/** Heading of a year block in the "By Date" view: "4th Year" / "4e année". */
export function yearBlockTitle(year: AcademicYear): Localized {
  return { en: `${year.ordinal} Year`, fr: `${year.ordinalFr} année` }
}
