import type { CSSProperties } from 'react'

type TimelineEntry = {
  date: string
  tag: string
  title: string
  lines: string[]
  color: string
  bgLight: string
  bgDark: string
  tagLight: string
  tagDark: string
  featured?: boolean
}

const TIMELINE: TimelineEntry[] = [
  {
    date: '2026 - 2027',
    tag: 'Double-Degree',
    title: '⭐ École Polytechnique',
    lines: ['M2 Data Science · Applied Mathematics & Statistics'],
    color: '#e0a82e',
    bgLight: '#faf1df',
    bgDark: '#1c1709',
    tagLight: '#e0a82e',
    tagDark: '#efd396',
    featured: true
  },
  {
    date: '2025 - 2026',
    tag: 'Data & AI Major',
    title: '🎓 ECE Paris · 4th Year',
    lines: [
      'Paris Campus · taught in English',
      'Joined the Intelligence Lab to pursue my AI research goal'
    ],
    color: '#2563eb',
    bgLight: '#edf2fd',
    bgDark: '#161b22',
    tagLight: '#2563eb',
    tagDark: '#92b1f5'
  },
  {
    date: '2024 - 2025',
    tag: 'Exchange in Scotland',
    title: '🏴 ECE Lyon · 3rd Year',
    lines: [
      'Sep - Dec 2024 · Edinburgh Napier University',
      'R&D · Game Engineering with AI · 3D Modelling'
    ],
    color: '#0f766e',
    bgLight: '#ebf4f3',
    bgDark: '#161b22',
    tagLight: '#0f766e',
    tagDark: '#87bab6'
  },
  {
    date: '2023 - 2024',
    tag: 'The AI turning point',
    title: '💡 ECE Lyon · 2nd Year',
    lines: [
      'Discovered AI on my own - chose it over astrophysics',
      'First personal project: a NN library in C, fully from scratch',
      'My dogma since: build everything from scratch with rock-solid theory',
      "(maths, physics...) to grasp every cog, then study & master others' work"
    ],
    color: '#6e40c9',
    bgLight: '#f3effa',
    bgDark: '#161b22',
    tagLight: '#6e40c9',
    tagDark: '#b69fe4'
  },
  {
    date: '2022 - 2023',
    tag: 'Valedictorian',
    title: '🏆 ECE Lyon · 1st Year',
    lines: ['Preparatory classes · 🏆 Top 1 student / Valedictorian at ECE Lyon'],
    color: '#16a34a',
    bgLight: '#ecf7f0',
    bgDark: '#161b22',
    tagLight: '#16a34a',
    tagDark: '#8ad1a4'
  },
  {
    date: '2022',
    tag: 'Highest Honours',
    title: '📜 High School Diploma · European Section',
    lines: ['La Xavière, Lyon'],
    color: '#6b7280',
    bgLight: '#f3f3f4',
    bgDark: '#161b22',
    tagLight: '#6b7280',
    tagDark: '#b5b8bf'
  }
]

/**
 * Academic background timeline. Light and dark colours are handed to CSS as
 * custom properties, so the theme is resolved by the stylesheet rather than by
 * a MutationObserver watching the html class.
 */
export default function AcademicTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-streamlit-border dark:bg-[#30363d]" />

      <div className="space-y-4">
        {TIMELINE.map((item) => (
          <div key={item.title} className="relative pl-9 sm:pl-12">
            {/* Node on the line */}
            {item.featured ? (
              <>
                <span
                  className="absolute left-[-8px] sm:left-[-4px] top-4 w-[38px] h-[38px] rounded-full"
                  style={{ backgroundColor: item.color, opacity: 0.18 }}
                />
                <span
                  className="absolute left-[1px] sm:left-[5px] top-[25px] flex items-center justify-center w-[26px] h-[26px] rounded-full border-[3px] border-white dark:border-[#0d1117] text-white text-xs"
                  style={{ backgroundColor: item.color }}
                >
                  ★
                </span>
              </>
            ) : (
              <span
                className="absolute left-[5px] sm:left-[9px] top-[26px] w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-[#0d1117]"
                style={{ backgroundColor: item.color }}
              />
            )}

            {/* Card */}
            <div
              className="themed-card rounded-xl p-4 border-l-4"
              style={
                {
                  '--bg-light': item.bgLight,
                  '--bg-dark': item.bgDark,
                  borderLeftColor: item.color
                } as CSSProperties
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.date}
                </span>
                <span
                  className="themed-tag text-sm font-semibold"
                  style={
                    {
                      '--tag-light': item.tagLight,
                      '--tag-dark': item.tagDark
                    } as CSSProperties
                  }
                >
                  {item.tag}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-streamlit-text dark:text-[#f0f6fc] mb-1">
                {item.title}
              </h4>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-600 dark:text-[#b8c2cc] leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
