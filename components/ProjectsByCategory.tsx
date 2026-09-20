import type { ReactNode } from 'react'

import {
  CATEGORY_SECTIONS,
  categoryBadge,
  categoryHex,
  categoryTitle,
  REINFORCEMENT_LEARNING,
  type CategoryId
} from '@/data/categories'
import { projectsInCategory, type Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

/** A project with variants (OPENER) shows one card per destination here. */
function cardsFor(project: Project) {
  if (project.variants) {
    return project.variants.map((variant) => (
      <ProjectCard key={variant.name} project={project} variant={variant} />
    ))
  }
  return [<ProjectCard key={project.id} project={project} />]
}

function CardGrid({ category }: { category: CategoryId }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {projectsInCategory(category).flatMap(cardsFor)}
    </div>
  )
}

/** Sub-category heading (Reinforcement Learning only), framed by two rules. */
function RuledHeading({ label, hex }: { label: string; hex: string }) {
  const rule = <div className="flex-1 h-0.5" style={{ backgroundColor: hex }} />

  return (
    <h4
      className="text-base font-semibold mb-4 flex items-center justify-center gap-2"
      style={{ color: hex }}
    >
      {rule}
      <span className="px-4">{label}</span>
      {rule}
    </h4>
  )
}

/**
 * One family of projects, boxed in its own colour. The title sits on the top
 * border, its background matching the page so the border reads as interrupted
 * rather than crossed out.
 */
function CategoryBox({
  label,
  hex,
  children
}: {
  label: string
  hex: string
  children: ReactNode
}) {
  return (
    <div
      className="relative rounded-2xl border-2 px-3 sm:px-5 pt-8 pb-5 mb-10"
      style={{ borderColor: hex }}
    >
      <h3
        className="absolute -top-4 left-1/2 -translate-x-1/2 max-w-[calc(100%-1.5rem)] px-3 text-center text-lg sm:text-xl font-bold bg-streamlit-bg dark:bg-[#22272e]"
        style={{ color: hex }}
      >
        {label}
      </h3>
      {children}
    </div>
  )
}

export default function ProjectsByCategory() {
  return (
    <>
      {CATEGORY_SECTIONS.map((section) => {
        if (section.kind === 'category') {
          const { category } = section
          return (
            <CategoryBox
              key={category}
              label={categoryTitle(category)}
              hex={categoryHex(category)}
            >
              <CardGrid category={category} />
            </CategoryBox>
          )
        }

        // Reinforcement Learning is one family of six sub-categories, so the box
        // goes around the whole group and the sub-categories keep a plain heading.
        return (
          <CategoryBox
            key={REINFORCEMENT_LEARNING.title}
            label={REINFORCEMENT_LEARNING.title}
            hex={REINFORCEMENT_LEARNING.hex}
          >
            {REINFORCEMENT_LEARNING.categories.map((category) => (
              <div key={category} className="mb-6 last:mb-0">
                <RuledHeading
                  label={categoryBadge(category)}
                  hex={categoryHex(category)}
                />
                <CardGrid category={category} />
              </div>
            ))}
          </CategoryBox>
        )
      })}
    </>
  )
}
