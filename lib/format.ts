// Display helpers derived from the ISO dates stored in data/projects.ts.
// Nothing here is hand-written per project, so the cards, the "By Date" view
// and the Gantt can never drift apart again.

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

/**
 * Parses "2026-05-17" without going through the Date constructor, which shifts
 * the month depending on the reader's timezone.
 */
function parseIso(iso: string): { year: number; month: number } {
  const [year, month] = iso.split('-').map(Number)
  return { year, month: month - 1 }
}

/**
 * "Mar - Apr 2026", "May 2026", "Nov 2025 - Jan 2026".
 * Same shape as the labels that used to be typed by hand on every card.
 */
export function formatDateRange(start: string, end: string): string {
  const from = parseIso(start)
  const to = parseIso(end)

  if (from.year !== to.year) {
    return `${MONTHS[from.month]} ${from.year} - ${MONTHS[to.month]} ${to.year}`
  }
  if (from.month === to.month) {
    return `${MONTHS[from.month]} ${from.year}`
  }
  return `${MONTHS[from.month]} - ${MONTHS[to.month]} ${from.year}`
}

export function compareByStartDate(
  a: { start: string },
  b: { start: string }
): number {
  return a.start.localeCompare(b.start)
}
