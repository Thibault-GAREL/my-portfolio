import { categoryBadge, categoryBadgeStyle } from '@/data/categories'
import type { Project, ProjectVariant } from '@/data/projects'
import { formatDateRange } from '@/lib/format'

/**
 * One project card. The hover and dark-mode shadows live in globals.css under
 * .project-card, so the card needs no state and no MutationObserver.
 * `variant` overrides the name, link and artwork for the OPENER cards.
 */
export default function ProjectCard({
  project,
  variant
}: {
  project: Project
  variant?: ProjectVariant
}) {
  const name = variant?.name ?? project.name
  const description = variant?.description ?? project.description
  const link = variant?.link ?? project.link
  const image = variant?.image ?? project.image
  const imageDark = variant ? undefined : project.imageDark
  const date = formatDateRange(project.start, project.end)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-4 border border-streamlit-border dark:border-[#444c56] group flex gap-4 w-full md:w-[calc(50%-0.5rem)]"
    >
      {image && (
        <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-shadow">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover ${imageDark ? 'dark:hidden' : ''}`}
          />
          {imageDark && (
            <img
              src={imageDark}
              alt={name}
              className="w-full h-full object-cover hidden dark:block"
            />
          )}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-2 mb-2">
          {/* Category badge: above the title on mobile, to its right on desktop */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold md:flex-shrink-0 md:order-2"
            style={categoryBadgeStyle(project.category)}
          >
            {categoryBadge(project.category)}
          </span>
          <h4 className="text-lg font-semibold text-streamlit-text dark:text-[#cdd9e5] group-hover:text-blue-600 dark:group-hover:text-[#539bf5] text-center md:text-left md:flex-1 md:order-1">
            {name}
          </h4>
        </div>

        <p className="text-gray-600 dark:text-[#768390] text-sm mb-3">{description}</p>

        <div className="flex gap-3 text-xs text-gray-500 dark:text-[#768390]">
          <span>📅 {date}</span>
          <span>🎓 {project.year}</span>
        </div>
      </div>
    </a>
  )
}
