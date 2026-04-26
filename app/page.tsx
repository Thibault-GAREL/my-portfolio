'use client'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const [sortBy, setSortBy] = useState<'category' | 'date'>('category')
  const [darkMode, setDarkMode] = useState(false)

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true')
    }
  }, [])

  // Apply dark mode and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  return (
    <main className="min-h-screen bg-streamlit-bg dark:bg-[#22272e]">
      {/* Header */}
      <header className="border-b border-streamlit-border dark:border-[#444c56] bg-white dark:bg-[#2d333b] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5]">Thibault GAREL&apos;s Portfolio</h1>

            <div className="flex items-center gap-2">
              {/* Sort Toggle */}
              <div className="flex gap-2 bg-streamlit-secondary dark:bg-[#22272e] rounded-lg p-1 border border-streamlit-border dark:border-[#444c56]">
                <button
                  onClick={() => setSortBy('category')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    sortBy === 'category'
                      ? 'bg-white dark:bg-[#2d333b] text-streamlit-text dark:text-[#cdd9e5] font-semibold shadow-sm'
                      : 'text-gray-600 dark:text-[#768390] hover:text-streamlit-text dark:hover:text-[#adbac7]'
                  }`}
                >
                  By Category
                </button>
                <button
                  onClick={() => setSortBy('date')}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    sortBy === 'date'
                      ? 'bg-white dark:bg-[#2d333b] text-streamlit-text dark:text-[#cdd9e5] font-semibold shadow-sm'
                      : 'text-gray-600 dark:text-[#768390] hover:text-streamlit-text dark:hover:text-[#adbac7]'
                  }`}
                >
                  By Date
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg border border-streamlit-border dark:border-[#444c56] hover:bg-streamlit-secondary dark:hover:bg-[#2d333b] transition-colors text-xl"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <img
              src="https://github.com/Thibault-GAREL.png"
              alt="Thibault GAREL"
              className="w-32 h-32 rounded-full border-4 border-streamlit-border dark:border-[#444c56] shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-4">
                Hi! My name is Thibault GAREL
              </h1>
              {/* Contact Links */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/thibaultgarel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/Thibault-GAREL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  🐱 GitHub
                </a>
                <a
                  href="https://huggingface.co/Thibault-GAREL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:underline"
                >
                  🤗 Hugging Face
                </a>
                <a
                  href="mailto:thibault.garel@edu.ece.fr"
                  className="text-green-600 hover:underline"
                >
                  📬 Contact
                </a>
              </div>
            </div>
          </div>

          <div className="text-xl text-gray-700 dark:text-[#adbac7] mb-6 leading-relaxed">
            <p className="mb-4">
              I am currently in my 4th year at <strong>ECE</strong>, an engineering school,
              where I am pursuing a Major in <strong>Data & AI</strong>.
            </p>

            <p className="mb-4">
              Since 2023, I've been building personal projects mostly on <strong>AI</strong> 🤖.
            </p>

            <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
              <span>I'm an AI maker in</span>
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

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            ✨ Featured Projects
          </h2>

          {sortBy === 'category' ? (
            <ProjectsByCategory />
          ) : (
            <ProjectsByDate />
          )}
        </section>

        {/* Group Projects */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            👥 Group Projects
          </h2>

          <div className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 mb-6 border border-streamlit-border dark:border-[#444c56]">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 mb-4">
              {/* Logo on the left (hidden on mobile, shown on desktop) */}
              <img
                src="https://www.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/cnd/Logo_CND_PA.png?itok=MRux1fZ_"
                alt="CND Logo"
                className="hidden lg:block w-24 h-24 object-contain shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
              />

              {/* Main content in the middle */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7397600929350336512/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Hackathon with the CND
                  </a>
                  <span className="text-lg text-green-600 ml-3">🏆 3rd / 15 schools</span>
                </h3>

                <p className="text-lg mb-2 dark:text-[#adbac7]">
                  AI system to detect anomalies and breakdowns in French army logs
                </p>
                <p className="text-sm text-gray-600 dark:text-[#768390] mb-4">📅 November 18-20, 2025 • 4th year</p>

                <div>
                  <p className="font-semibold mb-2 dark:text-[#cdd9e5]">Team:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Thibault GAREL", link: "https://github.com/Thibault-GAREL" },
                      { name: "Alfred de Vulpian", link: "https://github.com/Alfred0404" },
                      { name: "Axel Bröns", link: "https://github.com/axelbrons" },
                      { name: "Robin Quériaux", link: "https://github.com/Rqbln" },
                      { name: "Ziyad Amzil", link: "https://github.com/ziyadamz2" }
                    ].map((member) => (
                      <a
                        key={member.name}
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-[#2d333b] dark:text-[#adbac7] px-3 py-1 rounded-md text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors"
                      >
                        {member.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code links - column on desktop, row on mobile */}
              <div className="flex flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://github.com/Rqbln/dirisi25-hackathon-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 Phase 1 - Frontend
                </a>
                <a
                  href="https://github.com/Rqbln/dirisi25-hackathon-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 Phase 1 - Backend
                </a>
                <a
                  href="https://github.com/Thibault-GAREL/ILab-Hackaton_CND-Phase2-Cyberattack_AI_detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 Phase 2 - Cyberattack AI
                </a>
              </div>
            </div>
          </div>

          <div className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 mb-6 border border-streamlit-border dark:border-[#444c56]">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 mb-4">
              {/* Logo on the left (hidden on mobile, shown on desktop) */}
              <img
                src="https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Group_Projects/group_ppe_smart_contract.jpg"
                alt="PPE Logo"
                className="hidden lg:block w-24 h-24 object-cover rounded-lg shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
              />

              {/* Main content in the middle */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  <a
                    href="https://www.ece.fr/la-pedagogie-par-projets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    PPE - Smart Contract AI Analysis
                  </a>
                </h3>

                <p className="text-lg mb-2 dark:text-[#adbac7]">
                  LLM benchmarking & LoRA fine-tuning for Solidity smart contract vulnerability analysis
                </p>
                <p className="text-sm text-gray-600 dark:text-[#768390] mb-4">📅 2024 - 2025 • 3rd - 4th year</p>

                <div>
                  <p className="font-semibold mb-2 dark:text-[#cdd9e5]">Team:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Thibault GAREL", link: "https://github.com/Thibault-GAREL" },
                      { name: "Axel Bröns", link: "https://github.com/axelbrons" },
                      { name: "Valentin Kocijancic", link: "https://github.com/valentinkocijancic" },
                      { name: "Hugo Rivière", link: "https://github.com/hugoriviere" },
                      { name: "Antoine Goudedranche", link: "https://github.com/Antoine31G" },
                      { name: "Omar El Alami", link: "https://github.com/omarelalamielfellousse" }
                    ].map((member) => (
                      <a
                        key={member.name}
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-[#2d333b] dark:text-[#adbac7] px-3 py-1 rounded-md text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors"
                      >
                        {member.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code links - column on desktop, row on mobile */}
              <div className="flex flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://github.com/Thibault-GAREL/PPE_LLM_test_Smart_contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 LLM Benchmark
                </a>
                <a
                  href="https://github.com/Thibault-GAREL/PPE_LoRa_Smart_contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 LoRA Fine-tune
                </a>
                <a
                  href="https://github.com/axelbrons/graphs-ppe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 CodeBERT Graphs (Axel)
                </a>
              </div>
            </div>
          </div>

          <div className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 mb-6 border border-streamlit-border dark:border-[#444c56]">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 mb-4">
              {/* Logo on the left (hidden on mobile, shown on desktop) */}
              <img
                src="https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Group_Projects/REs.png"
                alt="Resilient AI Logo"
                className="hidden lg:block w-24 h-24 object-cover rounded-lg shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
              />

              {/* Main content in the middle */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  <a
                    href="https://www.sustainableaicoalition.org/resilient-ai-challenge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Resilient AI Challenge
                  </a>
                </h3>

                <p className="text-lg mb-2 dark:text-[#adbac7]">
                  International AI competition on resilient and sustainable AI systems
                </p>
                <p className="text-sm text-gray-600 dark:text-[#768390] mb-4">📅 2025 • 4th year</p>

                <div>
                  <p className="font-semibold mb-2 dark:text-[#cdd9e5]">Team:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Thibault GAREL", link: "https://github.com/Thibault-GAREL", type: "github" },
                      { name: "Axel Bröns", link: "https://github.com/axelbrons", type: "github" },
                      { name: "Mathis Lacombe", link: "https://www.linkedin.com/in/mathis-lacombe34/", type: "linkedin" },
                      { name: "Jarfino Houngbadji", link: "https://www.linkedin.com/in/jarfino-houngbadji/", type: "linkedin" },
                      { name: "Achta Sow Demba", link: "https://www.linkedin.com/in/demba-sow-achta/", type: "linkedin" },
                      { name: "Djebril Laouedj", link: "https://www.linkedin.com/in/djebril-laouedj-9684b4219/", type: "linkedin" },
                      { name: "Bikram Bhuyan", link: "https://www.linkedin.com/in/bikram-pratim-bhuyan-01887589/", type: "linkedin" }
                    ].map((member) => (
                      <a
                        key={member.name}
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-[#2d333b] dark:text-[#adbac7] px-3 py-1 rounded-md text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors"
                      >
                        {member.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code links - column on desktop, row on mobile */}
              <div className="flex flex-row lg:flex-col gap-3 justify-center">
                <a
                  href="https://github.com/Thibault-GAREL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-4 py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center whitespace-nowrap flex-1 lg:flex-none"
                >
                  🐱 Code (Coming Soon)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            🛠️ Skills & Tools
          </h2>

          <SkillCategory
            title="Languages"
            skills={[
              { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", url: "https://www.python.org/" },
              { name: "C", icon: "https://cdn.simpleicons.org/c/00599C", url: "https://isocpp.org/" },
              { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", url: "https://isocpp.org/" },
              { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", url: "https://www.mysql.com/" },
              { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", url: "https://www.java.com/" },
              { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/4EAA25", url: "https://www.gnu.org/software/bash/" }
            ]}
          />

          <SkillCategory
            title="Web"
            skills={[
              { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
              { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
              { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", url: "https://www.php.net/" },
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
              { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", url: "https://nextjs.org/" },
              { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", url: "https://vercel.com/" }
            ]}
          />

          <SkillCategory
            title="AI / ML"
            skills={[
              { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", url: "https://pytorch.org/" },
              { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", url: "https://www.tensorflow.org/" },
              { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", url: "https://scikit-learn.org/" },
              { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", url: "https://numpy.org/" },
              { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", url: "https://pandas.pydata.org/" },
              { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C", url: "https://www.langchain.com/" }
            ]}
          />

          <SkillCategory
            title="Visualization"
            skills={[
              { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", url: "https://matplotlib.org/" },
              { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
              { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", url: "https://powerbi.microsoft.com/" },
              { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", url: "https://streamlit.io/" },
              { name: "Pygame", icon: "https://www.pygame.org/docs/_static/pygame_logo.svg", url: "https://www.pygame.org/" }
            ]}
          />

          <SkillCategory
            title="Dev Tools"
            skills={[
              { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", url: "https://code.visualstudio.com/" },
              { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", url: "https://github.com/" },
              { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", url: "https://git-scm.com/" },
              { name: "Ollama", icon: "https://avatars.githubusercontent.com/u/151674099", url: "https://ollama.com/" },
              { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4C89", url: "https://n8n.io/" },
              { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626", url: "https://jupyter.org/" }
            ]}
          />

          <SkillCategory
            title="Hardware"
            skills={[
              { name: "CUDA", icon: "https://cdn.simpleicons.org/nvidia/76B900", url: "https://developer.nvidia.com/cuda-zone" },
              { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A", url: "https://www.raspberrypi.com/" },
              { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D", url: "https://www.arduino.cc/" },
              { name: "ESP32", icon: "https://cdn.simpleicons.org/espressif/000000", url: "https://www.espressif.com/en/products/socs/esp32" },
              { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", url: "https://www.linux.org/" },
              { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", url: "https://www.docker.com/" }
            ]}
          />
        </section>

        {/* GitHub Statistics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56]">
            📊 My GitHub Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Thibault-GAREL&show_icons=true&theme=transparent&hide_border=true"
                alt="GitHub Stats"
                className="dark:hidden"
                height="180"
              />
              <img
                src="https://github-readme-stats.vercel.app/api?username=Thibault-GAREL&show_icons=true&theme=tokyonight&hide_border=true"
                alt="GitHub Stats"
                className="hidden dark:block"
                height="180"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Thibault-GAREL&theme=transparent"
                alt="Most Used Languages"
                className="dark:hidden"
                height="180"
              />
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Thibault-GAREL&theme=tokyonight"
                alt="Most Used Languages"
                className="hidden dark:block"
                height="180"
              />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="https://streak-stats.demolab.com?user=Thibault-GAREL&theme=transparent&hide_border=true"
              alt="GitHub Streak"
              className="dark:hidden"
              height="180"
            />
            <img
              src="https://streak-stats.demolab.com?user=Thibault-GAREL&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              className="hidden dark:block"
              height="180"
            />
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Thibault-GAREL&theme=transparent"
              alt="Profile Details"
              className="dark:hidden w-full max-w-4xl"
            />
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Thibault-GAREL&theme=tokyonight"
              alt="Profile Details"
              className="hidden dark:block w-full max-w-4xl"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://komarev.com/ghpvc/?username=Thibault-GAREL&label=Profile%20Views&color=0e75b6&style=flat"
              alt="Profile Views"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-streamlit-border dark:border-[#444c56] pt-8 mt-16">
          <div className="text-center">
            <p className="text-gray-600 dark:text-[#768390] mb-4">
              Code created by me, Thibault GAREL - {' '}
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
              <a
                href="https://www.linkedin.com/in/thibaultgarel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/Thibault-GAREL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                🐱 GitHub
              </a>
              <a
                href="https://huggingface.co/Thibault-GAREL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline"
              >
                🤗 Hugging Face
              </a>
              <a
                href="mailto:thibault.garel@edu.ece.fr"
                className="text-green-600 hover:underline"
              >
                📬 Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

// Projects sorted by category
function ProjectsByCategory() {
  return (
    <>
      {/* Generative AI */}
      <ProjectCategory
        title="Generative AI"
        projects={[
          {
            name: "Image Generator - GAN",
            description: "Generative Adversarial Network built from scratch for image generation",
            link: "https://github.com/Thibault-GAREL/Image_generator_GAN",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Image_generator_GAN/main/Img/Titre.png",
            date: "Feb - Sep 2025",
            year: "4th year"
          },
          {
            name: "Language Models",
            description: "Bigram & Transformer Models coded from scratch",
            link: "https://github.com/Thibault-GAREL/Language_Models",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Language_Models/main/img/Titre-GPT_from_scratch.png",
            date: "Sep - Dec 2025",
            year: "4th year"
          },
          {
            name: "RAG - PDF ChatBot",
            description: "Retrieval Augmented Generation - A chatbot that reads PDFs",
            link: "https://github.com/Thibault-GAREL/RAG_pdf",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/RAG_pdf/main/Video/Gif-video.gif",
            date: "Oct 2025",
            year: "4th year"
          },
          {
            name: "CLIP Embedding Tools",
            description: "Opposite Embedding Finder and Embedding Arithmetic",
            link: "https://github.com/Thibault-GAREL/CLIP_Embedding_Tools",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/CLIP_Embedding_Tools/main/img/Logo-Embedding_Tools.png",
            date: "Dec 2025",
            year: "4th year"
          }
        ]}
      />

      {/* Neural Networks */}
      <ProjectCategory
        title="Neural Networks"
        projects={[
          {
            name: "Neural Networks Library",
            description: "Built from scratch in C",
            link: "https://github.com/Thibault-GAREL/Neural_Network_from_Scratch",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Neural_Network_from_Scratch/main/Images/Gif-neural-network.gif",
            date: "Jul 2023 - May 2024",
            year: "1st - 2nd year"
          }
        ]}
      />

      {/* Reinforcement Learning */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">Reinforcement Learning</h3>

        {/* Decision Tree */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-[#adbac7] mb-4 ml-4">🌳 Decision Tree</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Snake AI - Decision Tree",
                description: "Snake game AI using a Decision Tree",
                link: "https://github.com/Thibault-GAREL/AI_snake_decision_tree_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_decision_tree_version/main/img/Snake_arbre_de_decision-Score_31.gif",
                date: "Sep - Oct 2024",
                year: "3rd year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={{ ...project, category: '🌳 Decision Tree' }} />
            ))}
          </div>
        </div>

        {/* Genetic Algorithm */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-[#adbac7] mb-4 ml-4">🧬 Genetic Algorithm</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Snake AI - Genetic Algorithm",
                description: "Snake game AI using genetic algorithms",
                link: "https://github.com/Thibault-GAREL/AI_snake_genetic_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_genetic_version/main/Images/score13.gif",
                date: "Aug - Oct 2024",
                year: "3rd year"
              },
              {
                name: "Driving AI - Genetic Algorithm",
                description: "Self-driving car using genetic algorithms",
                link: "https://github.com/Thibault-GAREL/AI_driving_genetic_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_genetic_version/main/Img/Driving_NEAT_gif.gif",
                date: "Jan - Sep 2025",
                year: "4th year"
              },
              {
                name: "Walking AI - Genetic Algorithm",
                description: "AI learning to walk with complete physics engine (Box2D)",
                link: "https://github.com/Thibault-GAREL/test_box2D_pygame",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/test_box2D_pygame/main/img/logo.png",
                
                date: "Oct 2025 - Present",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={{ ...project, category: '🧬 Genetic Algorithm' }} />
            ))}
          </div>
        </div>

        {/* Q-Learning */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-[#adbac7] mb-4 ml-4">📈 Q-Learning</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Q-Learning Pathfinding",
                description: "Q-Learning algorithm to find optimal paths",
                link: "https://github.com/Thibault-GAREL/Q-Learning",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Q-Learning/main/img/Gif-DQN.gif",
                date: "Sep 2023",
                year: "2nd year"
              },
              {
                name: "Snake AI - Deep Q-Learning",
                description: "Snake game AI using Deep Q-Learning",
                link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",
                
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_DQN_version/main/Images/SnakeDQL-Score36.gif",
                date: "Jul 2024 - Present",
                year: "3rd - 4th year"
              },
              {
                name: "Driving AI - Deep Q-Learning",
                description: "Self-driving car using Deep Q-Learning",
                link: "https://github.com/Thibault-GAREL/AI_driving_DQN_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_DQN_version/main/Images/gif-driving.gif",
                date: "Jan - Sep 2025",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={{ ...project, category: '📈 Q-Learning' }} />
            ))}
          </div>
        </div>

        {/* PPO */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-[#adbac7] mb-4 ml-4">🎯 PPO</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Snake AI - PPO",
                description: "Snake game AI using Proximal Policy Optimization",
                link: "https://github.com/Thibault-GAREL/AI_snake_PPO_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_PPO_version/main/img/SnakePPO-Score54.gif",
                
                date: "Dec 2025 - Present",
                year: "4th year"
              },
              {
                name: "StarCraft 2 AI (VLM + RL)",
                description: "A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning",
                link: "https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/rl_starcraft2.gif",
                imageDark: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/rl_starcraft2_dark.gif",
                
                date: "Oct 2025 - Present",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={{ ...project, category: '🎯 PPO' }} />
            ))}
          </div>
        </div>

        {/* Unity ML-Agents */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 dark:text-[#adbac7] mb-4 ml-4">🎮 Unity ML-Agents</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Unity AI - Movement",
                description: "Unity AI learning to move using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_move",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_move/main/img/Gif-Unity_move.gif",
                date: "2025",
                year: "4th year"
              },
              {
                name: "Unity AI - Greedy",
                description: "Unity AI learning to catch coins using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_greedy",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_greedy/main/img_greedy/Greedy-gif-X9.gif",
                date: "2025",
                year: "4th year"
              },
              {
                name: "Unity AI - Driving",
                description: "Unity AI learning to drive using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_drive",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_drive/main/img_drive/Driving-maze-gif.gif",
                date: "2025",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={{ ...project, category: '🎮 Games' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Speech Recognition */}
      <ProjectCategory
        title="Speech Recognition"
        projects={[
          {
            name: "ASR - Automatic Speech Recognition",
            description: "School project on speech recognition",
            link: "https://github.com/Thibault-GAREL/Speech_recognition",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Speech_recognition/main/logo.png",
            date: "Apr - Jun 2025",
            year: "4th year"
          }
        ]}
      />

      {/* Robotics */}
      <ProjectCategory
        title="Robotics"
        projects={[
          {
            name: "Bot controlled by ChatBot RAG",
            description: "Two-wheeled robot controlled by a RAG chatbot",
            link: "https://github.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG/main/img/Gif-bot.gif",
            date: "Jul - Oct 2025",
            year: "4th year"
          }
        ]}
      />

      {/* Games */}
      <ProjectCategory
        title="Games (for training AI)"
        projects={[
          {
            name: "Snake Game",
            description: "Classic snake game for AI training",
            link: "https://github.com/Thibault-GAREL/snake_game",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/snake_game/main/img/Snake-game.gif",
            date: "Jul 2024 - Sep 2025",
            year: "3rd - 4th year"
          },
          {
            name: "Driving Game",
            description: "Driving simulation for AI training",
            link: "https://github.com/Thibault-GAREL/driving_game",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/driving_game/main/img/Gif_driving_game.gif",
            date: "Jan - Sep 2025",
            year: "4th year"
          },
          {
            name: "Human Sandbox",
            description: "Natural Selection Simulation Engine",
            link: "https://github.com/Thibault-GAREL/human_sandbox",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/human_sandbox/main/img/Gif-human-sandbox.gif",
            date: "Jun - Sep 2025",
            year: "4th year"
          },
          {
            name: "Star Wars - ECE World",
            description: "Star Wars minigames in an open world (C++)",
            link: "https://github.com/Thibault-GAREL/Game_ECE_World_Minigame",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Game_ECE_World_Minigame/main/img/Menu.png",
            date: "Jan - Jun 2024",
            year: "2nd year"
          },
          {
            name: "Maze - Asterix & Obélix",
            description: "Maze game with BFS pathfinding (C + Allegro 5)",
            link: "https://github.com/Thibault-GAREL/Game_maze_Asterix-Obelix",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Game_maze_Asterix-Obelix/main/img/menu_screen.png",
            date: "Jan - Jun 2024",
            year: "2nd year"
          }
        ]}
      />

      {/* Physics Simulation */}
      <ProjectCategory
        title="Physics Simulation"
        projects={[
          {
            name: "Gravity Simulation 2D",
            description: "2D gravity and orbital mechanics simulation",
            link: "https://github.com/Thibault-GAREL/gravity_simulation",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/gravity_simulation/main/img/Gif-gravity.gif",
            date: "Jun - Aug 2023",
            year: "2nd year"
          },
          {
            name: "Attraction/Repulsion Simulation",
            description: "Particle attraction and repulsion physics",
            link: "https://github.com/Thibault-GAREL/Attraction_repulsion",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Attraction_repulsion/main/img/Gif-orbit.gif",
            date: "Jan - Sep 2025",
            year: "4th year"
          },
          {
            name: "2D Muscular Simulation",
            description: "2D muscular physics simulation with Box2D",
            link: "https://github.com/Thibault-GAREL/2D-Muscular-Simulation",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/physics_muscular_simulation.png",
            date: "Apr - Jun 2025",
            year: "4th year"
          }
        ]}
      />

      {/* n8n Projects */}
      <ProjectCategory
        title="n8n Automation"
        projects={[
          {
            name: "WhatsApp AI",
            description: "My own local AI accessible through WhatsApp",
            link: "https://github.com/Thibault-GAREL/n8n_Whatsapp_LLM",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/n8n_Whatsapp_LLM/main/img/img.png",
            date: "Jul 2025",
            year: "4th year"
          },
          {
            name: "Smart Mail Labeling",
            description: "Automatic and intelligent email sorting with labeling",
            link: "https://github.com/Thibault-GAREL/n8n_smart_mail_labeling",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/n8n_smart_mail_labeling/main/img/logo.png",
            date: "Jul 2025",
            year: "4th year"
          }
        ]}
      />

      {/* Data Analysis */}
      <ProjectCategory
        title="Data Analysis"
        projects={[
          {
            name: "ISS Analysis with Spark",
            description: "Real-time ISS data analysis using Apache Spark",
            link: "https://github.com/Thibault-GAREL/ISS_Analysis_Spark",
            image: "https://raw.githubusercontent.com/Thibault-GAREL/ISS_Analysis_Spark/master/Img/ISS-img.jpg",
            date: "Nov - Dec 2025",
            year: "4th year"
          }
        ]}
      />
    </>
  )
}

// Projects sorted by date
function ProjectsByDate() {
  // In Progress projects
  const inProgressProjects = [
    {
      name: "Snake AI - PPO",
      description: "Snake game AI using Proximal Policy Optimization",
      link: "https://github.com/Thibault-GAREL/AI_snake_PPO_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_PPO_version/main/img/SnakePPO-Score54.gif",

      date: "Dec 2025 - Present",
      year: "4th year",
      category: "PPO"
    },
    {
      name: "StarCraft 2 AI (VLM + RL)",
      description: "A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning",
      link: "https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/rl_starcraft2.gif",
      imageDark: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/rl_starcraft2_dark.gif",

      date: "Oct 2025 - Present",
      year: "4th year",
      category: "PPO"
    },
    {
      name: "Walking AI - Genetic Algorithm",
      description: "AI learning to walk with complete physics engine (Box2D)",
      link: "https://github.com/Thibault-GAREL/test_box2D_pygame",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/test_box2D_pygame/main/img/logo.png",

      date: "Oct 2025 - Present",
      year: "4th year",
      category: "Genetic Algorithm"
    },
    {
      name: "Snake AI - Deep Q-Learning",
      description: "Snake game AI using DQN (in progress)",
      link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",

      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_DQN_version/main/Images/SnakeDQL-Score36.gif",
      date: "Jul 2024 - Present",
      year: "3rd - 4th year",
      category: "Q-Learning"
    }
  ]

  // 4th year projects (sorted by start date)
  const fourthYearProjects = [
    {
      name: "Unity AI - Movement",
      description: "Unity AI learning to move using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_move",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_move/main/img/Gif-Unity_move.gif",
      date: "2025",
      year: "4th year",
      category: "Unity ML-Agents"
    },
    {
      name: "Unity AI - Greedy",
      description: "Unity AI learning to catch money using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_greedy",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_greedy/main/img_greedy/Greedy-gif-X9.gif",
      date: "2025",
      year: "4th year",
      category: "Unity ML-Agents"
    },
    {
      name: "Unity AI - Driving",
      description: "Unity AI learning to drive using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_drive",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Unity_drive/main/img_drive/Driving-maze-gif.gif",
      date: "2025",
      year: "4th year",
      category: "Unity ML-Agents"
    },
    {
      name: "Driving AI - Deep Q-Learning",
      description: "Self-driving car using Deep Q-Learning",
      link: "https://github.com/Thibault-GAREL/AI_driving_DQN_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_DQN_version/main/Images/gif-driving.gif",
      date: "Jan - Sep 2025",
      year: "4th year",
      category: "Q-Learning"
    },
    {
      name: "Driving AI - Genetic Algorithm",
      description: "Self-driving car using genetic algorithms",
      link: "https://github.com/Thibault-GAREL/AI_driving_genetic_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_genetic_version/main/Img/Driving_NEAT_gif.gif",
      date: "Jan - Sep 2025",
      year: "4th year",
      category: "Genetic Algorithm"
    },
    {
      name: "Attraction/Repulsion Simulation",
      description: "Particle attraction and repulsion physics",
      link: "https://github.com/Thibault-GAREL/Attraction_repulsion",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Attraction_repulsion/main/img/Gif-orbit.gif",
      date: "Jan - Sep 2025",
      year: "4th year",
      category: "Physics Simulation"
    },
    {
      name: "Driving Game",
      description: "Driving simulation for AI training",
      link: "https://github.com/Thibault-GAREL/driving_game",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/driving_game/main/img/Gif_driving_game.gif",
      date: "Jan - Sep 2025",
      year: "4th year",
      category: "Games"
    },
    {
      name: "Image Generator - GAN",
      description: "Generative Adversarial Network built from scratch for image generation",
      link: "https://github.com/Thibault-GAREL/Image_generator_GAN",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Image_generator_GAN/main/Img/Titre.png",
      date: "Feb - Sep 2025",
      year: "4th year",
      category: "Generative AI"
    },
    {
      name: "ASR - Automatic Speech Recognition",
      description: "School project on speech recognition",
      link: "https://github.com/Thibault-GAREL/Speech_recognition",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Speech_recognition/main/logo.png",
      date: "Apr - Jun 2025",
      year: "4th year",
      category: "Speech Recognition"
    },
    {
      name: "2D Muscular Simulation",
      description: "2D muscular physics simulation with Box2D",
      link: "https://github.com/Thibault-GAREL/2D-Muscular-Simulation",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Featured_Projects/physics_muscular_simulation.png",
      date: "Apr - Jun 2025",
      year: "4th year",
      category: "Physics Simulation"
    },
    {
      name: "Human Sandbox",
      description: "Natural Selection Simulation Engine",
      link: "https://github.com/Thibault-GAREL/human_sandbox",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/human_sandbox/main/img/Gif-human-sandbox.gif",
      date: "Jun - Sep 2025",
      year: "4th year",
      category: "Games"
    },
    {
      name: "WhatsApp AI",
      description: "My own local AI accessible through WhatsApp",
      link: "https://github.com/Thibault-GAREL/n8n_Whatsapp_LLM",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/n8n_Whatsapp_LLM/main/img/img.png",
      date: "Jul 2025",
      year: "4th year",
      category: "n8n Automation"
    },
    {
      name: "Smart Mail Labeling",
      description: "Automatic and intelligent email sorting with labeling",
      link: "https://github.com/Thibault-GAREL/n8n_smart_mail_labeling",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/n8n_smart_mail_labeling/main/img/logo.png",
      date: "Jul 2025",
      year: "4th year",
      category: "n8n Automation"
    },
    {
      name: "Bot controlled by ChatBot RAG",
      description: "Two-wheeled robot controlled by a RAG chatbot",
      link: "https://github.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG/main/img/Gif-bot.gif",
      date: "Jul - Oct 2025",
      year: "4th year",
      category: "Robotics"
    },
    {
      name: "Language Models",
      description: "Bigram & Transformer Models coded from scratch",
      link: "https://github.com/Thibault-GAREL/Language_Models",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Language_Models/main/img/Titre-GPT_from_scratch.png",
      date: "Sep - Dec 2025",
      year: "4th year",
      category: "Generative AI"
    },
    {
      name: "RAG - PDF ChatBot",
      description: "Retrieval Augmented Generation - A chatbot that reads PDFs",
      link: "https://github.com/Thibault-GAREL/RAG_pdf",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/RAG_pdf/main/Video/Gif-video.gif",
      date: "Oct 2025",
      year: "4th year",
      category: "Generative AI"
    },
    {
      name: "ISS Analysis with Spark",
      description: "Real-time ISS data analysis using Apache Spark",
      link: "https://github.com/Thibault-GAREL/ISS_Analysis_Spark",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/ISS_Analysis_Spark/master/Img/ISS-img.jpg",
      date: "Nov - Dec 2025",
      year: "4th year",
      category: "Data Analysis"
    },
    {
      name: "CLIP Embedding Tools",
      description: "Opposite Embedding Finder and Embedding Arithmetic",
      link: "https://github.com/Thibault-GAREL/CLIP_Embedding_Tools",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/CLIP_Embedding_Tools/main/img/Logo-Embedding_Tools.png",
      date: "Dec 2025",
      year: "4th year",
      category: "Generative AI"
    }
  ]

  // 3rd year projects
  const thirdYearProjects = [
    {
      name: "Snake Game",
      description: "Classic snake game for AI training",
      link: "https://github.com/Thibault-GAREL/snake_game",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/snake_game/main/img/Snake-game.gif",
      date: "Jul 2024 - Sep 2025",
      year: "3rd - 4th year",
      category: "Games"
    },
    {
      name: "Snake AI - Genetic Algorithm",
      description: "Snake game AI using genetic algorithms",
      link: "https://github.com/Thibault-GAREL/AI_snake_genetic_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_genetic_version/main/Images/score13.gif",
      date: "Aug - Oct 2024",
      year: "3rd year",
      category: "Genetic Algorithm"
    },
    {
      name: "Snake AI - Decision Tree",
      description: "Snake game AI using a Decision Tree",
      link: "https://github.com/Thibault-GAREL/AI_snake_decision_tree_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_decision_tree_version/main/img/Snake_arbre_de_decision-Score_31.gif",
      date: "Sep - Oct 2024",
      year: "3rd year",
      category: "Decision Tree"
    }
  ]

  // 2nd year projects
  const secondYearProjects = [
    {
      name: "Gravity Simulation 2D",
      description: "2D gravity and orbital mechanics simulation",
      link: "https://github.com/Thibault-GAREL/gravity_simulation",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/gravity_simulation/main/img/Gif-gravity.gif",
      date: "Jun - Aug 2023",
      year: "2nd year",
      category: "Physics Simulation"
    },
    {
      name: "Q-Learning Pathfinding",
      description: "Q-Learning algorithm to find optimal paths",
      link: "https://github.com/Thibault-GAREL/Q-Learning",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Q-Learning/main/img/Gif-DQN.gif",
      date: "Sep 2023",
      year: "2nd year",
      category: "Q-Learning"
    },
    {
      name: "Star Wars - ECE World",
      description: "Star Wars minigames in an open world (C++)",
      link: "https://github.com/Thibault-GAREL/Game_ECE_World_Minigame",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Game_ECE_World_Minigame/main/img/Menu.png",
      date: "Jan - Jun 2024",
      year: "2nd year",
      category: "Games"
    },
    {
      name: "Maze - Asterix & Obélix",
      description: "Maze game with BFS pathfinding (C + Allegro 5)",
      link: "https://github.com/Thibault-GAREL/Game_maze_Asterix-Obelix",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Game_maze_Asterix-Obelix/main/img/menu_screen.png",
      date: "Jan - Jun 2024",
      year: "2nd year",
      category: "Games"
    }
  ]

  // 1st year projects
  const firstYearProjects = [
    {
      name: "Neural Networks Library",
      description: "Built from scratch in C",
      link: "https://github.com/Thibault-GAREL/Neural_Network_from_Scratch",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Neural_Network_from_Scratch/main/Images/Gif-neural-network.gif",
      date: "Jul 2023 - May 2024",
      year: "1st - 2nd year",
      category: "Neural Networks"
    }
  ]

  return (
    <>
      {/* 1st Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">1st Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {firstYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 2nd Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">2nd Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {secondYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 3rd Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">3rd Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {thirdYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 4th Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">4th Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {fourthYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* In Progress Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-6">🚧 In Progress</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {inProgressProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Project Timeline - Gantt Chart (hidden on mobile and tablet, visible on desktop) */}
      <div className="mt-16 hidden lg:block">
        <details className="group">
          <summary className="cursor-pointer list-none mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56] hover:opacity-80 transition-opacity">
            <h3 className="text-3xl font-bold text-streamlit-text dark:text-[#cdd9e5] flex items-center gap-3">
              <span className="inline-block transition-transform duration-200 group-open:rotate-90 text-2xl">▶</span>
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

// Component for project categories
function ProjectCategory({
  title,
  projects
}: {
  title: string
  projects: Array<{
    name: string
    description: string
    link: string
    image?: string
    imageDark?: string
    date?: string
    year?: string
    category?: string
  }>
}) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-4">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={{ ...project, category: title }} />
        ))}
      </div>
    </div>
  )
}

// Category shadow colors mapping
const categoryShadowColors = {
  '🤖 Generative AI': { r: 110, g: 64, b: 201 },     // #6e40c9
  '🧠 Neural Networks': { r: 37, g: 99, b: 235 },    // #2563eb
  '🌳 Decision Tree': { r: 34, g: 197, b: 94 },      // #22c55e
  '🧬 Genetic Algorithm': { r: 22, g: 163, b: 74 },  // #16a34a
  '📈 Q-Learning': { r: 16, g: 185, b: 129 },        // #10b981
  '🎯 PPO': { r: 5, g: 150, b: 105 },                // #059669
  '🎮 Unity ML-Agents': { r: 15, g: 118, b: 110 },   // #0f766e
  '🎮 Games': { r: 8, g: 145, b: 178 },              // #0891b2
  '📊 Data Analysis': { r: 217, g: 119, b: 6 },      // #d97706
  '🦾 Robotics': { r: 220, g: 38, b: 38 },           // #dc2626
  '🎙 Speech Recognition': { r: 234, g: 88, b: 12 }, // #ea580c
  '👥 Group Projects': { r: 0, g: 180, b: 194 },     // #00b4c2
  '⚡ N8N Automation': { r: 219, g: 39, b: 119 },    // #db2777
  '⚙ Physics Simulation': { r: 13, g: 148, b: 136 } // #0d9488
}

// Helper function to normalize category names to match the shadow color keys
function normalizeCategoryName(category?: string): string | undefined {
  if (!category) return undefined

  // Mapping from various title formats to the standardized emoji format
  const categoryMap: Record<string, string> = {
    'Generative AI': '🤖 Generative AI',
    '🤖 Generative AI': '🤖 Generative AI',
    'Neural Networks': '🧠 Neural Networks',
    '🧠 Neural Networks': '🧠 Neural Networks',
    'Decision Tree': '🌳 Decision Tree',
    '🌳 Decision Tree': '🌳 Decision Tree',
    'Genetic Algorithm': '🧬 Genetic Algorithm',
    '🧬 Genetic Algorithm': '🧬 Genetic Algorithm',
    'Q-Learning': '📈 Q-Learning',
    '📈 Q-Learning': '📈 Q-Learning',
    'PPO': '🎯 PPO',
    '🎯 PPO': '🎯 PPO',
    'Unity ML-Agents': '🎮 Unity ML-Agents',
    '🎮 Unity ML-Agents': '🎮 Unity ML-Agents',
    'Games (for training AI)': '🎮 Games',
    'Games': '🎮 Games',
    '🎮 Games': '🎮 Games',
    'Data Analysis': '📊 Data Analysis',
    '📊 Data Analysis': '📊 Data Analysis',
    'Robotics': '🦾 Robotics',
    '🦾 Robotics': '🦾 Robotics',
    'Speech Recognition': '🎙 Speech Recognition',
    '🎙 Speech Recognition': '🎙 Speech Recognition',
    'Group Projects': '👥 Group Projects',
    '👥 Group Projects': '👥 Group Projects',
    'n8n Automation': '⚡ N8N Automation',
    'N8N Automation': '⚡ N8N Automation',
    '⚡ N8N Automation': '⚡ N8N Automation',
    'Physics Simulation': '⚙ Physics Simulation',
    '⚙ Physics Simulation': '⚙ Physics Simulation'
  }

  return categoryMap[category] || category
}

// Helper function to get shadow style based on category
function getCategoryShadowStyle(category?: string, isHovered: boolean = false, isDark: boolean = false): React.CSSProperties {
  const normalizedCategory = normalizeCategoryName(category)

  if (!normalizedCategory || !categoryShadowColors[normalizedCategory as keyof typeof categoryShadowColors]) {
    // Default gray shadow if no category
    const opacity = isHovered ? (isDark ? 0.4 : 0.2) : (isDark ? 0.3 : 0.15)
    const blur = isHovered ? '16px' : '12px'
    return {
      boxShadow: `0 4px ${blur} rgba(0,0,0,${opacity})`
    }
  }

  const color = categoryShadowColors[normalizedCategory as keyof typeof categoryShadowColors]
  const opacity = isHovered ? (isDark ? 0.6 : 0.4) : (isDark ? 0.4 : 0.3)
  const blur = isHovered ? '16px' : '12px'

  return {
    boxShadow: `0 4px ${blur} rgba(${color.r},${color.g},${color.b},${opacity})`
  }
}

// Project card component
function ProjectCard({
  project
}: {
  project: {
    name: string
    description: string
    link: string
    image?: string
    imageDark?: string
    date?: string
    year?: string
    category?: string
  }
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-4 border border-streamlit-border dark:border-[#444c56] transition-all group flex gap-4"
      style={getCategoryShadowStyle(project.category, isHovered, isDark)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-shadow">
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover ${project.imageDark ? 'dark:hidden' : ''}`}
          />
          {project.imageDark && (
            <img
              src={project.imageDark}
              alt={project.name}
              className="w-full h-full object-cover hidden dark:block"
            />
          )}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold text-streamlit-text dark:text-[#cdd9e5] group-hover:text-blue-600 dark:group-hover:text-[#539bf5] mb-2">
          {project.name}
        </h4>
        <p className="text-gray-600 dark:text-[#768390] text-sm mb-2">{project.description}</p>
        {(project.date || project.year) && (
          <div className="flex gap-3 text-xs text-gray-500 dark:text-[#768390]">
            {project.date && <span>📅 {project.date}</span>}
            {project.year && <span>🎓 {project.year}</span>}
          </div>
        )}
      </div>
    </a>
  )
}

// Component for skills
function SkillCategory({
  title,
  skills
}: {
  title: string
  skills: Array<{ name: string; icon?: string; url?: string }>
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3 items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-streamlit-secondary dark:bg-[#2d333b] px-4 py-2 rounded-lg border border-streamlit-border dark:border-[#444c56] shadow-sm dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          >
            {skill.icon && skill.url ? (
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ) : skill.icon ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 object-contain"
              />
            ) : null}
            <span className="text-streamlit-text dark:text-[#cdd9e5]">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Gantt Chart Component
function GanttChart() {
  // Category colors - matching the category shadow colors
  const categoryColors: Record<string, string> = {
    "Generative AI": "#6e40c9",        // 🤖 Violet
    "Neural Networks": "#2563eb",      // 🧠 Bleu
    "Reinforcement Learning": "#16a34a", // 🎮 Vert (RL global)
    "Speech Recognition": "#ea580c",   // 🎙 Orange-Rouge
    "Robotics": "#dc2626",             // 🦾 Rouge
    "Games": "#0891b2",                // 🕹 Cyan
    "Physics Simulation": "#0d9488",   // ⚙ Teal
    "n8n Automation": "#db2777",       // ⚡ Rose/Magenta
    "Data Analysis": "#d97706"         // 📊 Orange
  }

  // All projects with dates and categories - with updated dates
  const allProjects = [
    // 1st - 2nd year
    { name: "Gravity Simulation 2D", start: "2023-06-06", end: "2023-08-30", category: "Physics Simulation", year: "1st year" },
    { name: "Neural Networks Library", start: "2023-08-01", end: "2024-05-31", category: "Neural Networks", year: "1st-2nd year" },
    { name: "Q-Learning Pathfinding", start: "2023-08-01", end: "2023-10-20", category: "Reinforcement Learning", year: "1st year" },

    // 2nd year games
    { name: "Star Wars - ECE", start: "2024-01-01", end: "2024-06-30", category: "Games", year: "2nd year" },
    { name: "Asterix Maze", start: "2024-01-01", end: "2024-06-30", category: "Games", year: "2nd year" },

    // 3rd year
    { name: "Snake Game", start: "2024-07-13", end: "2025-09-20", category: "Games", year: "3rd year" },
    { name: "Snake AI - DQL", start: "2024-07-13", end: "2026-04-08", category: "Reinforcement Learning",  year: "3rd year" },
    { name: "Snake AI - GA", start: "2024-08-04", end: "2024-10-14", category: "Reinforcement Learning", year: "3rd year" },
    { name: "Snake AI - DT", start: "2024-09-01", end: "2024-10-31", category: "Reinforcement Learning", year: "3rd year" },

    // 4th year
    { name: "Unity AI - Movement", start: "2025-01-01", end: "2025-01-31", category: "Reinforcement Learning", year: "4th year" },
    { name: "Unity AI - Greedy", start: "2025-01-01", end: "2025-01-31", category: "Reinforcement Learning", year: "4th year" },
    { name: "Unity AI - Driving", start: "2025-01-01", end: "2025-01-31", category: "Reinforcement Learning", year: "4th year" },
    { name: "Driving Game", start: "2025-01-04", end: "2025-09-20", category: "Games", year: "4th year" },
    { name: "Driving AI - DQL", start: "2025-01-04", end: "2025-09-09", category: "Reinforcement Learning", year: "4th year" },
    { name: "Driving AI - GA", start: "2025-01-09", end: "2025-09-28", category: "Reinforcement Learning", year: "4th year" },
    { name: "Attraction/Repulsion", start: "2025-01-23", end: "2025-01-29", category: "Physics Simulation", year: "4th year" },
    { name: "Image Generator - GAN", start: "2025-02-22", end: "2025-09-24", category: "Generative AI", year: "4th year" },
    { name: "ASR", start: "2025-04-12", end: "2025-06-11", category: "Speech Recognition", year: "4th year" },
    { name: "2D Muscular Sim.", start: "2025-04-01", end: "2025-06-30", category: "Physics Simulation", year: "4th year" },
    { name: "Human Sandbox", start: "2025-06-27", end: "2025-07-21", category: "Games", year: "4th year" },
    { name: "WhatsApp AI", start: "2025-07-11", end: "2025-07-24", category: "n8n Automation", year: "4th year" },
    { name: "Smart Mail Labeling", start: "2025-07-16", end: "2025-07-26", category: "n8n Automation", year: "4th year" },
    { name: "Bot controlled by ChatBot RAG", start: "2025-07-22", end: "2025-10-11", category: "Robotics", year: "4th year" },
    { name: "Language Models", start: "2025-09-27", end: "2025-12-24", category: "Generative AI", year: "4th year" },
    { name: "RAG - PDF ChatBot", start: "2025-10-11", end: "2025-10-12", category: "Generative AI", year: "4th year" },
    { name: "Walking AI - GA", start: "2025-10-12", end: "2026-04-08", category: "Reinforcement Learning",  year: "4th year" },
    { name: "StarCraft 2 AI", start: "2025-10-22", end: "2026-04-08", category: "Reinforcement Learning",  year: "4th year" },
    { name: "ISS Analysis", start: "2025-11-12", end: "2025-12-21", category: "Data Analysis", year: "4th year" },
    { name: "CLIP Embedding Tools", start: "2025-12-25", end: "2025-12-27", category: "Generative AI", year: "4th year" },
    { name: "Snake AI - PPO", start: "2025-12-27", end: "2026-04-08", category: "Reinforcement Learning",  year: "4th year" }
  ]

  // Sort projects by start date (oldest first for display from top to bottom)
  const projects = [...allProjects].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  // Calculate timeline bounds
  const startDate = new Date("2022-09-01")
  const endDate = new Date("2026-09-30")
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  // Function to calculate position and width
  const getBarStyle = (start: string, end: string) => {
    const projectStart = new Date(start)
    const projectEnd = new Date(end)
    const daysFromStart = Math.ceil((projectStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const projectDuration = Math.ceil((projectEnd.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24))

    const left = (daysFromStart / totalDays) * 100
    const width = (projectDuration / totalDays) * 100

    return {
      left: `${left}%`,
      width: `${Math.max(width, 0.5)}%`,
      widthValue: width
    }
  }

  // Generate monthly markers
  const monthMarkers = []
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let currentDate = new Date("2022-09-01")

  while (currentDate <= endDate) {
    const position = ((currentDate.getTime() - startDate.getTime()) / (totalDays * 24 * 60 * 60 * 1000)) * 100
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    monthMarkers.push({
      position,
      label: monthNames[month],
      month,
      year
    })

    currentDate.setMonth(currentDate.getMonth() + 1)
  }

  // Generate civil year markers (2022, 2023, 2024, 2025, 2026)
  const civilYears = [
    { label: "2022", start: "2022-09-01", end: "2022-12-31" },
    { label: "2023", start: "2023-01-01", end: "2023-12-31" },
    { label: "2024", start: "2024-01-01", end: "2024-12-31" },
    { label: "2025", start: "2025-01-01", end: "2025-12-31" },
    { label: "2026", start: "2026-01-01", end: "2026-09-30" }
  ]

  // Calculate academic year periods (engineer school years)
  const academicYears = [
    { label: "1st year", start: "2022-09-01", end: "2023-08-31", color: "#E3F2FD" },
    { label: "2nd year", start: "2023-09-01", end: "2024-08-31", color: "#F3E5F5" },
    { label: "3rd year", start: "2024-09-01", end: "2025-08-31", color: "#FFF3E0" },
    { label: "4th year", start: "2025-09-01", end: "2026-08-31", color: "#E8F5E9" }
  ]

  // Ordered categories for legend
  const orderedCategories = [
    // Featured Projects
    "Generative AI",
    "Neural Networks",
    "Reinforcement Learning",
    "Speech Recognition",
    "Robotics",
    // Projets Annexes
    "Games",
    "Physics Simulation",
    "n8n Automation",
    "Data Analysis"
  ]

  return (
    <div className="bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 border border-streamlit-border dark:border-[#444c56]">
      {/* Three-level timeline header - Sticky outside overflow container */}
      <div className="sticky top-[60px] bg-white dark:bg-[#2d333b] z-20 rounded-t-lg border border-b-0 border-streamlit-border dark:border-[#444c56] shadow-md overflow-x-auto">
        <div className="p-4 min-w-[800px]">
          {/* Level 1: Academic years (Engineer school years) */}
          <div className="mb-2 relative h-12 border-b border-gray-300">
            {academicYears.map((period, idx) => {
              const periodStyle = getBarStyle(period.start, period.end)
              return (
                <div
                  key={idx}
                  className="absolute h-10 rounded-lg border-2 border-gray-400 flex items-center justify-center shadow-sm"
                  style={{
                    left: periodStyle.left,
                    width: periodStyle.width,
                    backgroundColor: period.color,
                    top: '0px'
                  }}
                >
                  <span className="text-sm font-bold text-streamlit-text dark:text-[#cdd9e5]">{period.label}</span>
                </div>
              )
            })}
          </div>

          {/* Level 2: Civil years (2022, 2023, 2024, 2025, 2026) */}
          <div className="mb-2 relative h-10 border-b border-gray-300">
            {civilYears.map((year, idx) => {
              const yearStyle = getBarStyle(year.start, year.end)
              return (
                <div
                  key={idx}
                  className="absolute h-8 flex items-center justify-center border-r border-gray-300"
                  style={{
                    left: yearStyle.left,
                    width: yearStyle.width,
                    top: '0px'
                  }}
                >
                  <span className="text-base font-bold text-gray-700 dark:text-[#adbac7]">{year.label}</span>
                </div>
              )
            })}
          </div>

          {/* Level 3: Months */}
          <div className="relative h-12 border-b-2 border-gray-400">
            {/* Vertical grid lines for each month */}
            {monthMarkers.map((marker, idx) => (
              <div
                key={`line-${idx}`}
                className={`absolute top-0 bottom-0 ${marker.month === 0 ? 'border-l-2 border-gray-400' : 'border-l border-gray-200'}`}
                style={{ left: `${marker.position}%` }}
              />
            ))}

            {/* Month labels */}
            {monthMarkers.map((marker, idx) => (
              <div
                key={`label-${idx}`}
                className="absolute bottom-1 text-[10px] text-gray-600 dark:text-[#768390]"
                style={{
                  left: `${marker.position}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                {marker.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline content with scrollable Gantt bars */}
      <div className="bg-white dark:bg-[#22272e] rounded-b-lg border border-t-0 border-streamlit-border dark:border-[#444c56] overflow-x-auto">
        <div className="p-4 min-w-[800px]">
          {/* Gantt bars with names */}
          <div className="space-y-2 relative min-h-[600px]">
          {/* Vertical grid lines extending through bars - show year boundaries */}
          {monthMarkers.filter(m => m.month === 0).map((marker, idx) => (
            <div
              key={`grid-${idx}`}
              className="absolute top-0 bottom-0 pointer-events-none border-l border-gray-200"
              style={{ left: `${marker.position}%` }}
            />
          ))}

          {projects.map((project, idx) => {
            const barStyle = getBarStyle(project.start, project.end)
            const widthPercent = barStyle.widthValue || 0
            const isLongProject = widthPercent > 8 // If project bar is wide enough for text inside

            return (
              <div
                key={idx}
                className="relative h-8 z-10 flex items-center"
              >
                {/* Project bar */}
                <div
                  className="absolute h-7 rounded cursor-pointer flex items-center transition-all hover:shadow-lg hover:scale-105"
                  style={{
                    ...barStyle,
                    backgroundColor: categoryColors[project.category],
                    opacity: 0.85
                  }}
                  title={`${project.name} (${project.start} - ${project.end})`}
                >
                  {/* Name inside bar for long projects */}
                  {isLongProject && (
                    <div className="absolute left-0 right-0 px-2 text-xs text-white font-semibold truncate flex items-center justify-between h-full">
                      <span className="truncate">{project.name}</span>
                    </div>
                  )}
                </div>

                {/* Name next to bar for short projects */}
                {!isLongProject && (
                  <div
                    className="absolute text-xs text-streamlit-text dark:text-[#adbac7] font-medium whitespace-nowrap flex items-center gap-1"
                    style={{
                      left: `calc(${barStyle.left} + ${barStyle.width} + 8px)`
                    }}
                  >
                    {project.name}
                  </div>
                )}
              </div>
            )
          })}
          </div>
        </div>
      </div>

      {/* Legend at the bottom */}
      <div className="bg-white dark:bg-[#22272e] rounded-lg p-4 border border-streamlit-border dark:border-[#444c56] mt-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {orderedCategories.map(category => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: categoryColors[category] }}
              />
              <span className="text-sm text-streamlit-text dark:text-[#cdd9e5]">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
