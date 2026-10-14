/**
 * Runs `apply` behind a circle growing from `button`, so a switch that changes
 * the whole page (theme, language) is wiped over the old one instead of cut.
 * The keyframes are in globals.css, this only measures where the circle starts.
 *
 * Without View Transitions (Firefox, older Safari) or with motion turned down,
 * `apply` runs straight away.
 */
export function revealFrom(button: HTMLElement, apply: () => void) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion || typeof document.startViewTransition !== 'function') {
    apply()
    return
  }

  // Measured on the button rather than on the pointer, so a keyboard press
  // (Enter or Space, where clientX is 0) starts the circle in the same place.
  const { left, top, width, height } = button.getBoundingClientRect()
  const x = left + width / 2
  const y = top + height / 2
  // Distance to the furthest corner, so the circle covers the whole viewport.
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const root = document.documentElement
  root.style.setProperty('--reveal-x', `${x}px`)
  root.style.setProperty('--reveal-y', `${y}px`)
  root.style.setProperty('--reveal-radius', `${radius}px`)

  document.startViewTransition(apply)
}
