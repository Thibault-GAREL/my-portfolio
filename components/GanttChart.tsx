import {
  GANTT_CATEGORY_ORDER,
  ganttCategoryHex,
  toGanttCategory
} from '@/data/categories'
import { PROJECTS } from '@/data/projects'
import { compareByStartDate } from '@/lib/format'

const TIMELINE_START = new Date('2022-09-01')
const TIMELINE_END = new Date('2026-09-30')
const TOTAL_DAYS = Math.ceil(
  (TIMELINE_END.getTime() - TIMELINE_START.getTime()) / (1000 * 60 * 60 * 24)
)

const MONTH_NAMES = [
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

/** Position and width of a bar, as percentages of the whole timeline. */
function getBarStyle(start: string, end: string) {
  const projectStart = new Date(start)
  const projectEnd = new Date(end)
  const daysFromStart = Math.ceil(
    (projectStart.getTime() - TIMELINE_START.getTime()) / (1000 * 60 * 60 * 24)
  )
  const projectDuration = Math.ceil(
    (projectEnd.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24)
  )

  const left = (daysFromStart / TOTAL_DAYS) * 100
  const width = (projectDuration / TOTAL_DAYS) * 100

  return {
    left: `${left}%`,
    width: `${Math.max(width, 0.5)}%`,
    widthValue: width
  }
}

/** Civil years, for the middle header row. */
const CIVIL_YEARS = [
  { label: '2022', start: '2022-09-01', end: '2022-12-31' },
  { label: '2023', start: '2023-01-01', end: '2023-12-31' },
  { label: '2024', start: '2024-01-01', end: '2024-12-31' },
  { label: '2025', start: '2025-01-01', end: '2025-12-31' },
  { label: '2026', start: '2026-01-01', end: '2026-09-30' }
]

/** Engineering school years, for the top header row. */
const ACADEMIC_YEARS = [
  { label: '1st year', start: '2022-09-01', end: '2023-08-31', color: '#E3F2FD' },
  { label: '2nd year', start: '2023-09-01', end: '2024-08-31', color: '#F3E5F5' },
  { label: '3rd year', start: '2024-09-01', end: '2025-08-31', color: '#FFF3E0' },
  { label: '4th year', start: '2025-09-01', end: '2026-08-31', color: '#E8F5E9' }
]

function buildMonthMarkers() {
  const markers: { position: number; label: string; month: number }[] = []
  const cursor = new Date('2022-09-01')

  while (cursor <= TIMELINE_END) {
    markers.push({
      position:
        ((cursor.getTime() - TIMELINE_START.getTime()) /
          (TOTAL_DAYS * 24 * 60 * 60 * 1000)) *
        100,
      label: MONTH_NAMES[cursor.getMonth()],
      month: cursor.getMonth()
    })
    cursor.setMonth(cursor.getMonth() + 1)
  }

  return markers
}

export default function GanttChart() {
  const projects = [...PROJECTS].sort(compareByStartDate)
  const monthMarkers = buildMonthMarkers()

  return (
    <div className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 border border-streamlit-border dark:border-[#444c56]">
      {/* Three-level timeline header - sticky outside the overflow container */}
      <div className="sticky top-[60px] bg-white dark:bg-[#2d333b] z-20 rounded-t-lg border border-b-0 border-streamlit-border dark:border-[#444c56] shadow-md overflow-x-auto">
        <div className="p-4 min-w-[800px]">
          {/* Level 1: academic years */}
          <div className="mb-2 relative h-12 border-b border-gray-300">
            {ACADEMIC_YEARS.map((period) => {
              const periodStyle = getBarStyle(period.start, period.end)
              return (
                <div
                  key={period.label}
                  className="absolute h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-sm"
                  style={{
                    left: periodStyle.left,
                    width: periodStyle.width,
                    backgroundColor: period.color,
                    top: '0px'
                  }}
                >
                  <span className="text-sm font-bold text-gray-800">{period.label}</span>
                </div>
              )
            })}
          </div>

          {/* Level 2: civil years */}
          <div className="mb-2 relative h-10 border-b border-gray-300">
            {CIVIL_YEARS.map((year) => {
              const yearStyle = getBarStyle(year.start, year.end)
              return (
                <div
                  key={year.label}
                  className="absolute h-8 flex items-center justify-center border-r border-gray-300"
                  style={{ left: yearStyle.left, width: yearStyle.width, top: '0px' }}
                >
                  <span className="text-base font-bold text-gray-700 dark:text-[#adbac7]">
                    {year.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Level 3: months */}
          <div className="relative h-12 border-b-2 border-gray-400">
            {monthMarkers.map((marker, idx) => (
              <div
                key={`line-${idx}`}
                className={`absolute top-0 bottom-0 ${
                  marker.month === 0
                    ? 'border-l-2 border-gray-400'
                    : 'border-l border-gray-200'
                }`}
                style={{ left: `${marker.position}%` }}
              />
            ))}

            {monthMarkers.map((marker, idx) => (
              <div
                key={`label-${idx}`}
                className="absolute bottom-1 text-[10px] text-gray-600 dark:text-[#768390]"
                style={{ left: `${marker.position}%`, transform: 'translateX(-50%)' }}
              >
                {marker.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bars */}
      <div className="bg-white dark:bg-[#22272e] rounded-b-lg border border-t-0 border-streamlit-border dark:border-[#444c56] overflow-x-auto">
        <div className="p-4 min-w-[800px]">
          <div className="space-y-2 relative min-h-[600px]">
            {/* Year boundaries behind the bars */}
            {monthMarkers
              .filter((marker) => marker.month === 0)
              .map((marker, idx) => (
                <div
                  key={`grid-${idx}`}
                  className="absolute top-0 bottom-0 pointer-events-none border-l border-gray-200"
                  style={{ left: `${marker.position}%` }}
                />
              ))}

            {projects.map((project) => {
              const barStyle = getBarStyle(project.start, project.end)
              const label = project.ganttLabel ?? project.name
              // Wide enough to hold its own label
              const isLongProject = barStyle.widthValue > 8

              return (
                <div key={project.id} className="relative h-8 z-10 flex items-center">
                  <div
                    className="absolute h-7 rounded cursor-pointer flex items-center transition-[box-shadow,transform] hover:shadow-lg hover:scale-105"
                    style={{
                      left: barStyle.left,
                      width: barStyle.width,
                      backgroundColor: ganttCategoryHex(toGanttCategory(project.category)),
                      opacity: 0.85
                    }}
                    title={`${label} (${project.start} - ${project.end})`}
                  >
                    {isLongProject && (
                      <div className="absolute left-0 right-0 px-2 text-xs text-white font-semibold truncate flex items-center justify-between h-full">
                        <span className="truncate">{label}</span>
                      </div>
                    )}
                  </div>

                  {!isLongProject && (
                    <div
                      className="absolute text-xs text-streamlit-text dark:text-[#adbac7] font-medium whitespace-nowrap flex items-center gap-1"
                      style={{
                        left: `calc(${barStyle.left} + ${barStyle.width} + 8px)`
                      }}
                    >
                      {label}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-[#22272e] rounded-lg p-4 border border-streamlit-border dark:border-[#444c56] mt-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {GANTT_CATEGORY_ORDER.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: ganttCategoryHex(category) }}
              />
              <span className="text-sm text-streamlit-text dark:text-[#cdd9e5]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
