import { LEARNING_NOTES } from '@/data/learning-notes'
import { T } from '@/lib/i18n'

/**
 * Learning notes, closed by default because they matter less than the
 * projects. Same native details pattern as the Gantt toggle: the arrow and
 * the expand/collapse wording follow `group-open`, so no state is needed.
 */
export default function LearningNotes() {
  return (
    <section id="learning-notes" className="mb-12 scroll-mt-20">
      <details className="group">
        <summary className="cursor-pointer list-none pb-2 group-open:mb-6 border-b-2 border-streamlit-border dark:border-[#444c56] hover:opacity-80 transition-opacity">
          <h2 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] flex items-center gap-3">
            <span className="inline-block transition-transform duration-200 group-open:rotate-90 text-lg">
              ▶
            </span>
            <span>
              📚 <T text={{ en: 'Learning notes', fr: "Notes d'apprentissage" }} />
            </span>
            {/* Hint hidden on phones, where it would push the title onto two lines */}
            <span className="hidden sm:inline text-base font-normal text-gray-500 dark:text-[#768390] ml-auto">
              <span className="group-open:hidden">
                <T text={{ en: 'Click to expand', fr: 'Cliquer pour déplier' }} />
              </span>
              <span className="hidden group-open:inline">
                <T text={{ en: 'Click to collapse', fr: 'Cliquer pour replier' }} />
              </span>
            </span>
          </h2>
        </summary>

        <ul className="space-y-4">
          {LEARNING_NOTES.map((note) => (
            <li key={note.link} className="flex gap-3">
              <span className="text-lg">{note.emoji}</span>
              <div>
                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-blue-600 dark:text-[#539bf5] hover:underline"
                >
                  {note.name}
                </a>
                <p className="text-sm text-gray-600 dark:text-[#768390]">
                  <T text={note.description} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}
