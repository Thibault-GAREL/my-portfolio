import AcademicTimeline from '@/components/AcademicTimeline'
import GroupProjects from '@/components/GroupProjects'
import ProfessionalExperience from '@/components/ProfessionalExperience'
import ProjectsByCategory from '@/components/ProjectsByCategory'
import ProjectsByDate from '@/components/ProjectsByDate'
import ProjectsSection from '@/components/ProjectsSection'
import SkillCategory from '@/components/SkillCategory'
import ThemeToggle from '@/components/ThemeToggle'
import { SKILL_GROUPS } from '@/data/skills'

const NAV_LINKS = [
  { href: '#top', label: '🏠 Home' },
  { href: '#academic-background', label: '🎓 Academic' },
  { href: '#projects', label: '✨ Projects' },
  { href: '#skills', label: '🛠️ Skills' },
  { href: '#hobbies', label: '❤️ Hobbies' },
  { href: '#github-stats', label: '📊 GitHub' }
]

const CONTACT_LINKS = [
  {
    href: 'https://www.linkedin.com/in/thibaultgarel/',
    label: '💼 LinkedIn',
    className: 'text-blue-600'
  },
  {
    href: 'https://github.com/Thibault-GAREL',
    label: '🐱 GitHub',
    className: 'text-purple-600'
  },
  {
    href: 'https://huggingface.co/Thibault-GAREL',
    label: '🤗 Hugging Face',
    className: 'text-yellow-600'
  },
  {
    href: 'https://scholar.google.com.au/citations?hl=fr&user=VEBOeF4AAAAJ',
    label: '🎓 Google Scholar',
    className: 'text-blue-600'
  },
  {
    href: 'mailto:thibault.garel@edu.ece.fr',
    label: '📬 Contact',
    className: 'text-green-600'
  }
]

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-streamlit-bg dark:bg-[#22272e]">
      {/* Header */}
      <header className="border-b border-streamlit-border dark:border-[#444c56] bg-white dark:bg-[#2d333b] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5]">
              Thibault GAREL&apos;s Portfolio
            </h1>

            {/* Navigation (hidden on mobile) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-[#768390] hover:text-streamlit-text dark:hover:text-[#cdd9e5] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/thibaultgarel/details/featured/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 dark:bg-[#2563eb] text-white rounded-lg hover:bg-blue-700 dark:hover:bg-[#1d4ed8] transition-colors text-sm font-semibold"
              >
                📄 CV
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex flex-col items-center gap-6 mb-6">
            <img
              src="https://github.com/Thibault-GAREL.png"
              alt="Thibault GAREL"
              className="w-40 h-40 rounded-full border-4 border-streamlit-border dark:border-[#444c56] shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            />
            <div className="text-center">
              <h1 className="text-3xl sm:text-5xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-4">
                Hi! My name is Thibault GAREL
              </h1>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className={`${link.className} hover:underline`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-xl text-gray-700 dark:text-[#adbac7] mb-6 leading-relaxed text-center">
            <p className="mb-4">
              I am currently in my 4th year at <strong>ECE</strong>, an engineering
              school, where I am pursuing a Major in <strong>Data & AI</strong>.
            </p>

            <p className="mb-4">
              Since 2023, I've been building personal projects mostly on{' '}
              <strong>AI</strong> 🤖.
            </p>

            <div className="mb-6 flex flex-col items-center gap-4">
              <span>I'm an AI maker at</span>
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-streamlit-secondary dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56]">
                <div className="flex items-center gap-3">
                  <img
                    src="https://github.com/intelligenceLab-ECE.png"
                    alt="Intelligence Lab"
                    className="w-8 h-8 rounded-full shadow-md dark:shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                  />
                  <span className="font-bold">Intelligence Lab</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  <a
                    href="https://www.linkedin.com/company/intelligence-lab-by-ece"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    💼 LinkedIn
                  </a>
                  <a
                    href="https://github.com/intelligenceLab-ECE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline text-sm"
                  >
                    🐱 GitHub
                  </a>
                  <a
                    href="https://huggingface.co/ECE-ILAB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:underline text-sm"
                  >
                    🤗 Hugging Face
                  </a>
                  <a
                    href="http://intelligencelab.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-[#768390] hover:underline text-sm"
                  >
                    🌐 Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Background */}
        <section id="academic-background" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            🎓 Academic Background
          </h2>
          <AcademicTimeline />
        </section>

        {/* Professional Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            💼 Professional Experience
          </h2>
          <ProfessionalExperience />
        </section>

        {/* Featured Projects: both views are built here, the client toggle picks one */}
        <ProjectsSection
          byCategory={<ProjectsByCategory />}
          byDate={<ProjectsByDate />}
        />

        <GroupProjects />

        {/* Skills */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            🛠️ Skills & Tools
          </h2>

          {SKILL_GROUPS.map((group) => (
            <SkillCategory key={group.title} title={group.title} skills={group.skills} />
          ))}

          <div className="text-center mt-8">
            <h4 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-4">
              🌍 Languages
            </h4>
            <p className="text-gray-600 dark:text-[#768390] text-lg mb-6">
              • 🇫🇷 French (Native)
              <br />• 🇬🇧 English (Advanced) - TOEIC 815 pts
            </p>

            <h4 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-4">
              🚗 Driving License
            </h4>
            <p className="text-gray-600 dark:text-[#768390] text-lg">• Category B</p>
          </div>
        </section>

        {/* GitHub Statistics */}
        <section id="github-stats" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            📊 My GitHub Statistics
          </h2>

          <div className="flex flex-col md:flex-row gap-1 justify-center mb-6">
            <img
              src="https://github-readme-stats-fawn-mu-32.vercel.app/api?username=Thibault-GAREL&show_icons=true&theme=transparent&hide_border=true"
              alt="GitHub Stats"
              height="180"
            />
            <img
              src="https://github-profile-summary-cards-kappa.vercel.app/api/cards/most-commit-language?username=Thibault-GAREL&theme=transparent"
              alt="Most Used Languages"
              height="180"
            />
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="https://streak-stats.demolab.com?user=Thibault-GAREL&theme=transparent&hide_border=true"
              alt="GitHub Streak"
              className="w-full max-w-3xl"
            />
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="https://github-profile-summary-cards-kappa.vercel.app/api/cards/profile-details?username=Thibault-GAREL&theme=transparent"
              alt="Profile Details"
              className="w-full max-w-3xl"
            />
          </div>
        </section>

        {/* Hobbies */}
        <section id="hobbies" className="mb-16 scroll-mt-20">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            ❤️ Hobbies
          </h2>

          <div className="space-y-6">
            {/* Chess */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-streamlit-text dark:text-[#cdd9e5] mb-4">
                ♟️ Chess -{' '}
                <a
                  href="https://www.chess.com/member/T2G2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-[#539bf5] hover:underline"
                >
                  My Chess.com Profile
                </a>
              </h3>
              <div className="flex justify-center">
                <img
                  src="https://chess-stats-mu.vercel.app/api?username=T2G2"
                  alt="Chess.com Stats"
                  className="max-w-full"
                />
              </div>
            </div>

            {/* Sport */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-streamlit-text dark:text-[#cdd9e5] mb-2">
                🤺 Sport
              </h3>
              <p className="text-lg text-gray-600 dark:text-[#768390]">
                2-3 times per week: Fencing, Swimming, Tennis & Weight training
              </p>
            </div>

            {/* Drawing */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-streamlit-text dark:text-[#cdd9e5] mb-2">
                🎨 Drawing
              </h3>
              <p className="text-lg text-gray-600 dark:text-[#768390]">
                Watercolor, Inking & Digital painting{' '}
                <em>
                  (one-year evening course at{' '}
                  <a
                    href="https://www.cohl.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-[#539bf5] hover:underline"
                  >
                    École Émile Cohl
                  </a>
                  )
                </em>
              </p>

              <details className="mt-3 inline-block text-left">
                <summary className="cursor-pointer text-streamlit-text dark:text-[#cdd9e5] font-semibold hover:text-blue-600 dark:hover:text-[#539bf5]">
                  Click here to see my best artworks
                </summary>
                <div className="mt-2 ml-4">
                  <em className="text-gray-600 dark:text-[#768390]">
                    <a
                      href="https://github.com/Thibault-GAREL/my_art_gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-[#539bf5] hover:underline"
                    >
                      Gallery coming soon...
                    </a>
                  </em>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-streamlit-border dark:border-[#444c56] pt-8 mt-16">
          <div className="text-center">
            <p className="text-gray-600 dark:text-[#768390] mb-4">
              Code created by me, Thibault GAREL -{' '}
              <a
                href="https://github.com/Thibault-GAREL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-[#539bf5] hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-lg mb-4 dark:text-[#adbac7]">Feel free to contact me! 😊</p>
            <div className="flex justify-center gap-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`${link.className} hover:underline`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <img
                src="https://komarev.com/ghpvc/?username=Thibault-GAREL&label=Profile%20Views&color=0e75b6&style=flat"
                alt="Profile Views"
              />
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
