import type { CSSProperties } from 'react'

import { english, T, type Text } from '@/lib/i18n'

type Experience = {
  date: Text
  company: string
  title: Text
  lines: Text[]
  color: string
  bgLight: string
  bgDark: string
  tagLight: string
  tagDark: string
}

const EXPERIENCES: Experience[] = [
  {
    date: { en: 'Apr - Aug 2026', fr: 'avr. - août 2026' },
    company: 'LyRIDS · ECE',
    title: { en: '🔬 AI Research Intern', fr: '🔬 Stagiaire en recherche IA' },
    lines: [
      {
        en: 'Improving NLP models on low-resource domains · Paris',
        fr: 'Amélioration de modèles de NLP sur des domaines peu dotés · Paris'
      }
    ],
    color: '#6e40c9',
    bgLight: '#f3effa',
    bgDark: '#161b22',
    tagLight: '#6e40c9',
    tagDark: '#b69fe4'
  },
  {
    date: '2025 - 2027',
    company: 'Intelligence Lab · ECE',
    title: '🧠 AI Maker',
    lines: [
      {
        en: 'R&D in the AI lab of ECE Paris',
        fr: "R&D au sein du laboratoire d'IA de l'ECE Paris"
      },
      {
        en: 'CND Hackathon (French defence): 1st place, AI detecting cyberattacks on the army',
        fr: "Hackathon du CND (Défense)\u00a0: 1re place, IA qui détecte les cyberattaques contre l'armée"
      },
      {
        en: "Resilient AI Hackathon (France, India, UNESCO): compressing Google's Gemma 4",
        fr: 'Hackathon Resilient AI (France, Inde, UNESCO)\u00a0: compression de Gemma 4 de Google'
      },
      {
        en: 'Created technical training courses on how AI works',
        fr: "Création de formations techniques sur le fonctionnement de l'IA"
      }
    ],
    color: '#2563eb',
    bgLight: '#edf2fd',
    bgDark: '#161b22',
    tagLight: '#2563eb',
    tagDark: '#92b1f5'
  },
  {
    date: { en: 'Jan 2025', fr: 'janv. 2025' },
    company: 'Toray Films Europe',
    title: { en: '🏭 AI Engineer Intern', fr: '🏭 Stagiaire ingénieur IA' },
    lines: [
      {
        en: 'Studied, mapped & tested AI tools to optimize their use in the company · Lyon',
        fr: "Étude, cartographie et test d'outils d'IA pour optimiser leur usage dans l'entreprise · Lyon"
      }
    ],
    color: '#ea580c',
    bgLight: '#fdf1eb',
    bgDark: '#161b22',
    tagLight: '#ea580c',
    tagDark: '#f4ab85'
  },
  {
    date: { en: 'Jan 2024', fr: 'janv. 2024' },
    company: 'Dakatech',
    title: { en: '⚙️ Embedded Software Intern', fr: '⚙️ Stagiaire en logiciel embarqué' },
    lines: [
      {
        en: 'Reorganized & optimized their embedded code: +20-30% battery life · Lyon',
        fr: "Réorganisation et optimisation de leur code embarqué\u00a0: +20-30\u00a0% d'autonomie · Lyon"
      }
    ],
    color: '#0d9488',
    bgLight: '#ebf6f5',
    bgDark: '#161b22',
    tagLight: '#0d9488',
    tagDark: '#86c9c3'
  },
  {
    date: { en: 'Summer 2023', fr: 'Été 2023' },
    company: 'Solvay',
    title: { en: '📅 Summer Job', fr: "📅 Job d'été" },
    lines: [
      {
        en: 'Programmed an automatic scheduling tool on my own · Lyon',
        fr: "Développement en autonomie d'un outil de planification automatique · Lyon"
      }
    ],
    color: '#6b7280',
    bgLight: '#f3f3f4',
    bgDark: '#161b22',
    tagLight: '#6b7280',
    tagDark: '#b5b8bf'
  },
  {
    date: { en: 'Summer 2022', fr: 'Été 2022' },
    company: 'Solvay',
    title: { en: '📊 Summer Job', fr: "📊 Job d'été" },
    lines: [{ en: 'Data reorganization · Lyon', fr: 'Réorganisation de données · Lyon' }],
    color: '#6b7280',
    bgLight: '#f3f3f4',
    bgDark: '#161b22',
    tagLight: '#6b7280',
    tagDark: '#b5b8bf'
  }
]

/** The timeline itself, rendered twice: open on desktop, inside the toggle below. */
function Timeline() {
  return (
    <>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-0.5 bg-streamlit-border dark:bg-[#30363d]" />

          <div className="space-y-3">
            {EXPERIENCES.map((item) => (
              <div key={english(item.date)} className="relative pl-9 sm:pl-12">
                {/* Node on the line */}
                <span
                  className="absolute left-[5px] sm:left-[9px] top-[22px] w-[18px] h-[18px] rounded-full border-[3px] border-white dark:border-[#0d1117]"
                  style={{ backgroundColor: item.color }}
                />

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
                      {item.company}
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

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 dark:text-[#768390]">
            👉{' '}
            <T
              text={{
                en: 'See all my professional experience on',
                fr: 'Toutes mes expériences professionnelles sur'
              }}
            />{' '}
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
    </>
  )
}

/**
 * Professional experience timeline. On desktop it sits in its own column next
 * to the academic timeline, so it is shown straight away: a toggle would leave
 * that column empty. On phones and tablets the two timelines are stacked, so it
 * stays behind a toggle to keep the page short. Which one shows is decided by
 * CSS, and the open/closed wording by `group-open`, so the component stays
 * static and the native details element keeps its own behaviour.
 */
export default function ProfessionalExperience() {
  return (
    <>
      <div className="hidden lg:block">
        <Timeline />
      </div>

      <details className="group lg:hidden">
        <summary className="cursor-pointer list-none mb-6 text-center">
          <span className="inline-block px-6 py-3 bg-streamlit-secondary dark:bg-[#2d333b] rounded-lg border border-streamlit-border dark:border-[#444c56] text-streamlit-text dark:text-[#cdd9e5] font-semibold hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors">
            📂{' '}
            <span className="group-open:hidden">
              <T
                text={{
                  en: 'Click to expand my experience timeline',
                  fr: "Cliquer pour déplier ma frise d'expériences"
                }}
              />
            </span>
            <span className="hidden group-open:inline">
              <T
                text={{
                  en: 'Click to collapse my experience timeline',
                  fr: "Cliquer pour replier ma frise d'expériences"
                }}
              />
            </span>
          </span>
        </summary>

        <div className="mt-6">
          <Timeline />
        </div>
      </details>
    </>
  )
}
