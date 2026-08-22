'use client'

import { useState, type ReactNode } from 'react'

/**
 * Featured Projects, with the sort toggle. Both views are rendered on the
 * server and handed over as props, so this client component only carries the
 * toggle: the Gantt chart and the project data stay out of the JS bundle.
 */
export default function ProjectsSection({
  byCategory,
  byDate
}: {
  byCategory: ReactNode
  byDate: ReactNode
}) {
  const [sortBy, setSortBy] = useState<'category' | 'date'>('category')

  const buttonClass = (active: boolean) =>
    `px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-white dark:bg-[#2d333b] text-streamlit-text dark:text-[#cdd9e5] font-semibold shadow-sm'
        : 'text-gray-600 dark:text-[#768390] hover:text-streamlit-text dark:hover:text-[#adbac7]'
    }`

  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
        <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5]">
          ✨ Featured Projects
        </h2>

        <div className="flex gap-2 bg-streamlit-secondary dark:bg-[#22272e] rounded-lg p-1 border border-streamlit-border dark:border-[#444c56]">
          <button
            onClick={() => setSortBy('category')}
            className={buttonClass(sortBy === 'category')}
          >
            By Category
          </button>
          <button
            onClick={() => setSortBy('date')}
            className={buttonClass(sortBy === 'date')}
          >
            By Date
          </button>
        </div>
      </div>

      {sortBy === 'category' ? byCategory : byDate}
    </section>
  )
}
