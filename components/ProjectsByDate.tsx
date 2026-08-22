import { projectsByAcademicYear } from '@/data/projects'
import GanttChart from './GanttChart'
import ProjectCard from './ProjectCard'

/**
 * Projects grouped by academic year, oldest first, each block sorted by start
 * date. A project with variants (OPENER) appears once here, not three times.
 */
export default function ProjectsByDate() {
  return (
    <>
      {projectsByAcademicYear().map(({ year, projects }) => (
        <div key={year} className="mb-10">
          <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">
            {year}
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
            <h3 className="text-3xl font-bold text-streamlit-text dark:text-[#cdd9e5] flex items-center gap-3">
              <span className="inline-block transition-transform duration-200 group-open:rotate-90 text-2xl">
                ▶
              </span>
              📊 Project Timeline
              <span className="text-base font-normal text-gray-500 dark:text-[#768390] ml-auto">
                <span className="group-open:hidden">Click to expand</span>
                <span className="hidden group-open:inline">Click to collapse</span>
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
