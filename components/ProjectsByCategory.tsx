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

/** Heading framed by two rules, in the category colour. */
function RuledHeading({
  label,
  hex,
  level
}: {
  label: string
  hex: string
  level: 'section' | 'sub'
}) {
  const rule = <div className="flex-1 h-0.5" style={{ backgroundColor: hex }} />

  if (level === 'sub') {
    return (
      <h4
        className="text-xl font-semibold mb-4 flex items-center justify-center gap-2"
        style={{ color: hex }}
      >
        {rule}
        <span className="px-4">{label}</span>
        {rule}
      </h4>
    )
  }

  return (
    <h3
      className="text-2xl font-bold mb-4 flex items-center justify-center gap-3"
      style={{ color: hex }}
    >
      {rule}
      <span className="px-4">{label}</span>
      {rule}
    </h3>
  )
}

export default function ProjectsByCategory() {
  return (
    <>
      {CATEGORY_SECTIONS.map((section) => {
        if (section.kind === 'category') {
          const { category } = section
          return (
            <div key={category} className="mb-10">
              <RuledHeading
                label={categoryTitle(category)}
                hex={categoryHex(category)}
                level="section"
              />
              <CardGrid category={category} />
            </div>
          )
        }

        // Reinforcement Learning wraps five sub-categories under one heading.
        return (
          <div key={REINFORCEMENT_LEARNING.title} className="mb-10">
            <h3
              className="text-2xl font-bold mb-6 flex items-center justify-center gap-3"
              style={{ color: REINFORCEMENT_LEARNING.hex }}
            >
              <div
                className="flex-1 h-0.5"
                style={{ backgroundColor: REINFORCEMENT_LEARNING.hex }}
              />
              <span className="px-4">{REINFORCEMENT_LEARNING.title}</span>
              <div
                className="flex-1 h-0.5"
                style={{ backgroundColor: REINFORCEMENT_LEARNING.hex }}
              />
            </h3>

            {REINFORCEMENT_LEARNING.categories.map((category) => (
              <div key={category} className="mb-8">
                <RuledHeading
                  label={categoryBadge(category)}
                  hex={categoryHex(category)}
                  level="sub"
                />
                <CardGrid category={category} />
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
