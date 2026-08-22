import type { CSSProperties } from 'react'

type Experience = {
  date: string
  company: string
  title: string
  lines: string[]
  color: string
  bgLight: string
  bgDark: string
  tagLight: string
  tagDark: string
}

const EXPERIENCES: Experience[] = [
  {
    date: 'Apr 2026 - Present',
    company: 'LyRIDS · ECE',
    title: '🔬 AI Research Intern',
    lines: [
      'Greater Paris · On-site · R&D internship',
      'NLP & Named Entity Recognition on low-resource domains',
      '(programming languages, medical corpora, technical docs)',
      'Goal: robust methods aimed at a scientific publication'
    ],
    color: '#6e40c9',
    bgLight: '#f3effa',
    bgDark: '#161b22',
    tagLight: '#6e40c9',
    tagDark: '#b69fe4'
  },
  {
    date: 'Sep 2025 - Present',
    company: 'Intelligence Lab · ECE',
    title: '🧠 AI Maker',
    lines: [
      'Greater Paris',
      'AI hackathons: fast prototyping under time constraints',
      'Authored advanced AI training content',
      'R&D on new AI architectures'
    ],
    color: '#2563eb',
    bgLight: '#edf2fd',
    bgDark: '#161b22',
    tagLight: '#2563eb',
    tagDark: '#92b1f5'
  },
  {
    date: 'Jan 2025',
    company: 'Toray Films Europe',
    title: '🏭 AI Engineer Intern',
    lines: [
      'Lyon, France · On-site',
      'Studied, mapped & experimented with AI tools to optimize',
      'their usage and foster AI knowledge across the company'
    ],
    color: '#ea580c',
    bgLight: '#fdf1eb',
    bgDark: '#161b22',
    tagLight: '#ea580c',
    tagDark: '#f4ab85'
  },
  {
    date: 'Jan 2024',
    company: 'Dakatech',
    title: '⚙️ Embedded Software Engineer Intern',
    lines: [
      'Lyon, France · On-site · Autonomous Coding Project',
      'Reorganized & simplified the embedded codebase',
      '→ 20-30% improvement in battery autonomy'
    ],
    color: '#0d9488',
    bgLight: '#ebf6f5',
    bgDark: '#161b22',
    tagLight: '#0d9488',
    tagDark: '#86c9c3'
  }
]

/**
 * Collapsible professional experience timeline. The open/closed wording is
 * driven by CSS (group-open) rather than by React state, so the component stays
 * static and the native details element keeps its own behaviour.
 */
export default function ProfessionalExperience() {
  return (
    <details className="group max-w-4xl mx-auto">
      <summary className="cursor-pointer list-none mb-6 text-center">
        <span className="inline-block px-6 py-3 bg-streamlit-secondary dark:bg-[#2d333b] rounded-lg border border-streamlit-border dark:border-[#444c56] text-streamlit-text dark:text-[#cdd9e5] font-semibold hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors">
          📂 Click to <span className="group-open:hidden">expand</span>
          <span className="hidden group-open:inline">collapse</span> my experience
          timeline
        </span>
      </summary>

      <div className="mt-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-streamlit-border dark:bg-[#30363d]" />

          <div className="space-y-4">
            {EXPERIENCES.map((item) => (
              <div key={item.title} className="relative pl-9 sm:pl-12">
                {/* Node on the line */}
                <span
                  className="absolute left-[5px] sm:left-[9px] top-[26px] w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-[#0d1117]"
                  style={{ backgroundColor: item.color }}
                />

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
                      {item.company}
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

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-[#768390]">
            👉 See all my professional experience on{' '}
            <a
              href="https://www.linkedin.com/in/thibaultgarel/details/experience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-[#539bf5] hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </details>
  )
}
