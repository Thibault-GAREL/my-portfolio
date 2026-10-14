import { projectsByAcademicYear } from '@/data/projects'
import { T } from '@/lib/i18n'
import GanttChart from './GanttChart'
import ProjectCard from './ProjectCard'

/**
 * Projects grouped by academic year, oldest first, each block sorted by start
 * date. A project with variants (OPENER) appears once here, not three times.
 */
export default function ProjectsByDate() {
  return (
    <>
      {projectsByAcademicYear().map(({ ordinal, title, projects }) => (
        <div key={ordinal} className="mb-8">
          <h3 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">
            <T text={title} />
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}

      {/* Project Timeline - Gantt Chart (desktop only) */}
      <div className="mt-16 hidden lg:block">
        <details className="group">
          <summary className="cursor-pointer list-none mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56] hover:opacity-80 transition-opacity">
            <h3 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] flex items-center gap-3">
              <span className="inline-block transition-transform duration-200 group-open:rotate-90 text-lg">
                ▶
              </span>
              <span>
                📊 <T text={{ en: 'Project Timeline', fr: 'Frise des projets' }} />
              </span>
              <span className="text-base font-normal text-gray-500 dark:text-[#768390] ml-auto">
                <span className="group-open:hidden">
                  <T text={{ en: 'Click to expand', fr: 'Cliquer pour déplier' }} />
                </span>
                <span className="hidden group-open:inline">
                  <T text={{ en: 'Click to collapse', fr: 'Cliquer pour replier' }} />
                </span>
              </span>
            </h3>
          </summary>
          <div className="mt-4">
            <GanttChart />
          </div>
        </details>
      </div>
    </>
  )
}
