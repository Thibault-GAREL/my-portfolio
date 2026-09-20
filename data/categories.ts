// Single source of truth for project categories: emoji, colour and display title.
// Every badge, section heading, shadow and Gantt bar reads its colour from here.

import type { CSSProperties } from 'react'

export type CategoryId =
  | 'Research paper'
  | 'Language Models'
  | 'Vision Models'
  | 'Neural Networks'
  | 'Decision Tree'
  | 'Genetic Algorithm'
  | 'Q-Learning'
  | 'PPO'
  | 'World Model'
  | 'Unity ML-Agents'
  | 'Games'
  | 'Physics Simulation'
  | 'Applied AI Workflows'
  | 'Data Analysis'

export type Rgb = { r: number; g: number; b: number }

type CategoryInfo = {
  emoji: string
  hex: string
  /** Section heading, when it differs from the category id. */
  sectionTitle?: string
}

/**
 * Every Reinforcement Learning sub-category shares the Decision Tree green,
 * so the whole RL block reads as one family. Only the badge label tells them apart.
 */
const RL_GREEN = '#22c55e'

export const CATEGORIES: Record<CategoryId, CategoryInfo> = {
  'Research paper': { emoji: '📄', hex: '#FFD21E' },
  'Language Models': { emoji: '📝', hex: '#c026d3' },
  'Vision Models': { emoji: '🖼️', hex: '#f81d1d' },
  'Neural Networks': { emoji: '🧠', hex: '#2563eb' },
  'Decision Tree': { emoji: '🌳', hex: RL_GREEN },
  'Genetic Algorithm': { emoji: '🧬', hex: RL_GREEN },
  'Q-Learning': { emoji: '📈', hex: RL_GREEN },
  PPO: { emoji: '🎯', hex: RL_GREEN },
  'World Model': { emoji: '🌍', hex: RL_GREEN },
  'Unity ML-Agents': { emoji: '🎮', hex: RL_GREEN },
  Games: { emoji: '🎮', hex: '#0891b2', sectionTitle: 'Games (for training AI)' },
  'Physics Simulation': { emoji: '🪐', hex: '#0d9488' },
  'Applied AI Workflows': { emoji: '🤖', hex: '#db2777' },
  'Data Analysis': { emoji: '📊', hex: '#d97706' }
}

/** Colour of the Group Projects heading, which is not a project category. */
export const GROUP_PROJECTS_COLOR = '#00b4c2'

/** Reinforcement Learning wraps six categories under one heading. */
export const REINFORCEMENT_LEARNING = {
  title: 'Reinforcement Learning',
  hex: RL_GREEN,
  categories: [
    'Decision Tree',
    'Genetic Algorithm',
    'Q-Learning',
    'PPO',
    'World Model',
    'Unity ML-Agents'
  ] as CategoryId[]
}

/** Order of the sections in the "By Category" view. */
export type CategorySection =
  | { kind: 'category'; category: CategoryId }
  | { kind: 'group'; group: typeof REINFORCEMENT_LEARNING }

export const CATEGORY_SECTIONS: CategorySection[] = [
  { kind: 'category', category: 'Research paper' },
  { kind: 'category', category: 'Language Models' },
  { kind: 'category', category: 'Vision Models' },
  { kind: 'category', category: 'Neural Networks' },
  { kind: 'group', group: REINFORCEMENT_LEARNING },
  { kind: 'category', category: 'Games' },
  { kind: 'category', category: 'Physics Simulation' },
  { kind: 'category', category: 'Applied AI Workflows' },
  { kind: 'category', category: 'Data Analysis' }
]

export function hexToRgb(hex: string): Rgb {
  const value = parseInt(hex.replace('#', ''), 16)
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  }
}

export function categoryHex(category: CategoryId): string {
  return CATEGORIES[category].hex
}

export function categoryRgb(category: CategoryId): Rgb {
  return hexToRgb(categoryHex(category))
}

/** Badge label, emoji included: "📄 Research paper". */
export function categoryBadge(category: CategoryId): string {
  return `${CATEGORIES[category].emoji} ${category}`
}

/** Section heading, emoji excluded unless the category is a sub-section. */
export function categoryTitle(category: CategoryId): string {
  return CATEGORIES[category].sectionTitle ?? category
}

/**
 * Badge style: solid category colour, text colour picked for contrast.
 * Light accents such as the Research paper yellow are unreadable with white
 * text, every other category stays below the threshold and keeps white.
 */
export function categoryBadgeStyle(category: CategoryId): CSSProperties {
  const { r, g, b } = categoryRgb(category)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return {
    background: `rgba(${r},${g},${b},0.85)`,
    border: 'none',
    color: luminance > 0.6 ? '#1f2328' : '#ffffff',
    fontWeight: 600
  }
}

// --- Gantt chart ------------------------------------------------------------

/** The Gantt groups the five RL categories into a single legend entry. */
export type GanttCategory =
  | Exclude<
      CategoryId,
      | 'Decision Tree'
      | 'Genetic Algorithm'
      | 'Q-Learning'
      | 'PPO'
      | 'World Model'
      | 'Unity ML-Agents'
    >
  | 'Reinforcement Learning'

export function toGanttCategory(category: CategoryId): GanttCategory {
  return REINFORCEMENT_LEARNING.categories.includes(category)
    ? 'Reinforcement Learning'
    : (category as GanttCategory)
}

export function ganttCategoryHex(category: GanttCategory): string {
  return category === 'Reinforcement Learning'
    ? REINFORCEMENT_LEARNING.hex
    : categoryHex(category)
}

/** Legend order: featured categories first, side projects after. */
export const GANTT_CATEGORY_ORDER: GanttCategory[] = [
  'Research paper',
  'Language Models',
  'Vision Models',
  'Neural Networks',
  'Reinforcement Learning',
  'Games',
  'Physics Simulation',
  'Applied AI Workflows',
  'Data Analysis'
]
