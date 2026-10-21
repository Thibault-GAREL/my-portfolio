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
import { T, type Localized } from '@/lib/i18n'
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

function CardGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {projects.flatMap(cardsFor)}
    </div>
  )
}

/**
 * Cards of one category. When every project in it has several destinations
 * (Research paper: OPENER, then Law-OPENER), each project gets its own ruled
 * heading, like the Reinforcement Learning sub-categories, so the two papers
 * read as separate blocks.
 */
function CategoryCards({ category }: { category: CategoryId }) {
  const projects = projectsInCategory(category)
  const perProject =
    projects.length > 1 && projects.every((project) => project.variants)
  if (!perProject) return <CardGrid projects={projects} />

  const hex = categoryHex(category)
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="mb-6 last:mb-0">
          <RuledHeading label={{ en: project.name, fr: project.name }} hex={hex} />
          <CardGrid projects={[project]} />
        </div>
      ))}
    </>
  )
}

/** Sub-section heading (RL sub-categories, Research paper projects), framed by two rules. */
function RuledHeading({ label, hex }: { label: Localized; hex: string }) {
  const rule = <div className="flex-1 h-0.5" style={{ backgroundColor: hex }} />

  return (
    <h4
      className="text-base font-semibold mb-4 flex items-center justify-center gap-2"
      style={{ color: hex }}
    >
      {rule}
      <span className="px-4">
        <T text={label} />
      </span>
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
  label: Localized
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
        <T text={label} />
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
              <CategoryCards category={category} />
            </CategoryBox>
          )
        }

        // Reinforcement Learning is one family of six sub-categories, so the box
        // goes around the whole group and the sub-categories keep a plain heading.
        return (
          <CategoryBox
            key={REINFORCEMENT_LEARNING.id}
            label={REINFORCEMENT_LEARNING.title}
            hex={REINFORCEMENT_LEARNING.hex}
          >
            {REINFORCEMENT_LEARNING.categories.map((category) => (
              <div key={category} className="mb-6 last:mb-0">
                <RuledHeading
                  label={categoryBadge(category)}
                  hex={categoryHex(category)}
                />
                <CardGrid projects={projectsInCategory(category)} />
              </div>
            ))}
          </CategoryBox>
        )
      })}
    </>
  )
}
