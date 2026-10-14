import type { CSSProperties } from 'react'

import { english, T, type Text } from '@/lib/i18n'

type TimelineEntry = {
  date: Text
  tag: Text
  title: Text
  lines: Text[]
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
    tag: { en: 'Double Degree', fr: 'Double diplôme' },
    title: "⭐ École Polytechnique (l'X)",
    lines: [
      {
        en: 'M2 Data Science · AI focus: generative AI, language, vision, audio, XAI',
        fr: 'M2 Data Science · Spécialité IA\u00a0: IA générative, langage, vision, audio, XAI'
      }
    ],
    color: '#e0a82e',
    bgLight: '#faf1df',
    bgDark: '#1c1709',
    tagLight: '#e0a82e',
    tagDark: '#efd396',
    featured: true
  },
  {
    date: '2022 - 2027',
    tag: { en: 'Data & AI Major', fr: 'Majeure Data & IA' },
    title: { en: '🎓 ECE Paris · Engineering School', fr: "🎓 ECE Paris · École d'ingénieurs" },
    lines: [
      {
        en: '4th year · Paris campus · Data & AI major',
        fr: '4e année · Campus de Paris · Majeure Data & IA'
      },
      {
        en: '3rd year · Lyon campus · Semester in Scotland',
        fr: '3e année · Campus de Lyon · Semestre en Écosse'
      },
      {
        en: '1st & 2nd years · Lyon campus · Preparatory classes · Valedictorian',
        fr: '1re et 2e années · Campus de Lyon · Prépa intégrée · Major de promotion'
      }
    ],
    color: '#2563eb',
    bgLight: '#edf2fd',
    bgDark: '#161b22',
    tagLight: '#2563eb',
    tagDark: '#92b1f5'
  },
  {
    date: { en: 'Sep - Dec 2024', fr: 'sept. - déc. 2024' },
    tag: { en: 'Exchange Semester', fr: "Semestre d'échange" },
    title: {
      en: '🏴 Edinburgh Napier University, Scotland',
      fr: '🏴 Edinburgh Napier University, Écosse'
    },
    lines: [
      {
        en: 'Computer science courses: R&D, Game Engineering with AI, 3D Modelling',
        fr: "Cours d'informatique\u00a0: R&D, Game Engineering avec IA, modélisation 3D"
      }
    ],
    color: '#0f766e',
    bgLight: '#ebf4f3',
    bgDark: '#161b22',
    tagLight: '#0f766e',
    tagDark: '#87bab6'
  },
  {
    date: '2022',
    tag: { en: 'Highest Honours', fr: 'Mention très bien' },
    title: {
      en: '📜 High School Diploma · European Section',
      fr: '📜 Baccalauréat · Section européenne'
    },
    lines: [
      {
        en: 'Maths, Physics-Chemistry & Advanced Maths · La Xavière, Lyon',
        fr: 'Maths, physique-chimie et maths expertes · La Xavière, Lyon'
      }
    ],
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
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-streamlit-border dark:bg-[#30363d]" />

      <div className="space-y-3">
        {TIMELINE.map((item) => (
          <div key={english(item.title)} className="relative pl-9 sm:pl-12">
            {/* Node on the line */}
            {item.featured ? (
              <>
                <span
                  className="absolute left-[-8px] sm:left-[-4px] top-4 w-[38px] h-[38px] rounded-full"
                  style={{ backgroundColor: item.color, opacity: 0.18 }}
                />
                <span
                  className="absolute left-[1px] sm:left-[5px] top-[21px] flex items-center justify-center w-[26px] h-[26px] rounded-full border-[3px] border-white dark:border-[#0d1117] text-white text-xs"
                  style={{ backgroundColor: item.color }}
                >
                  ★
                </span>
              </>
            ) : (
              <span
                className="absolute left-[5px] sm:left-[9px] top-[22px] w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-[#0d1117]"
                style={{ backgroundColor: item.color }}
              />
            )}

            {/* Card */}
            <div
              className="themed-card rounded-xl p-3 border-l-4"
              style={
                {
                  '--bg-light': item.bgLight,
                  '--bg-dark': item.bgDark,
                  borderLeftColor: item.color
                } as CSSProperties
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <T text={item.date} />
                </span>
                <span
                  className="themed-tag text-xs font-semibold"
                  style={
                    {
                      '--tag-light': item.tagLight,
                      '--tag-dark': item.tagDark
                    } as CSSProperties
                  }
                >
                  <T text={item.tag} />
                </span>
              </div>
              <h4 className="text-base font-bold text-streamlit-text dark:text-[#f0f6fc] mb-1">
                <T text={item.title} />
              </h4>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-600 dark:text-[#b8c2cc] leading-relaxed"
                >
                  <T text={line} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
