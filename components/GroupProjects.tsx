import { GROUP_PROJECTS_COLOR } from '@/data/categories'

type TeamMember = { name: string; link: string }
type RepoLink = { label: string; link: string }

type GroupProject = {
  title: string
  titleLink: string
  award?: string
  description: string
  period: string
  logo: string
  logoAlt: string
  /** The CND crest is transparent and must not be cropped, unlike the others. */
  logoFit: 'contain' | 'cover'
  team: TeamMember[]
  repos: RepoLink[]
}

const GROUP_PROJECTS: GroupProject[] = [
  {
    title: 'Hackathon with the CND',
    titleLink:
      'https://www.linkedin.com/feed/update/urn:li:activity:7397600929350336512/',
    award: '🏆 3rd / 15 schools',
    description: 'AI system to detect anomalies and breakdowns in French army logs',
    period: '📅 November 18-20, 2025 • 4th year',
    logo: 'https://www.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/cnd/Logo_CND_PA.png?itok=MRux1fZ_',
    logoAlt: 'CND Logo',
    logoFit: 'contain',
    team: [
      { name: 'Thibault GAREL', link: 'https://github.com/Thibault-GAREL' },
      { name: 'Alfred de Vulpian', link: 'https://github.com/Alfred0404' },
      { name: 'Axel Bröns', link: 'https://github.com/axelbrons' },
      { name: 'Robin Quériaux', link: 'https://github.com/Rqbln' },
      { name: 'Ziyad Amzil', link: 'https://github.com/ziyadamz2' }
    ],
    repos: [
      {
        label: '🐱 Phase 1 - Frontend',
        link: 'https://github.com/Rqbln/dirisi25-hackathon-frontend'
      },
      {
        label: '🐱 Phase 1 - Backend',
        link: 'https://github.com/Rqbln/dirisi25-hackathon-backend'
      },
      {
        label: '🐱 Phase 2 - Cyberattack AI',
        link: 'https://github.com/Thibault-GAREL/ILab-Hackaton_CND-Phase2-Cyberattack_AI_detection'
      }
    ]
  },
  {
    title: 'PPE - Smart Contract AI Analysis',
    titleLink: 'https://www.ece.fr/la-pedagogie-par-projets/',
    description:
      'LLM benchmarking & LoRA fine-tuning for Solidity smart contract vulnerability analysis',
    period: '📅 2024 - 2025 • 3rd - 4th year',
    logo: 'https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Group_Projects/group_ppe_smart_contract.jpg',
    logoAlt: 'PPE Logo',
    logoFit: 'cover',
    team: [
      { name: 'Thibault GAREL', link: 'https://github.com/Thibault-GAREL' },
      { name: 'Axel Bröns', link: 'https://github.com/axelbrons' },
      { name: 'Valentin Kocijancic', link: 'https://github.com/valentinkocijancic' },
      { name: 'Hugo Rivière', link: 'https://github.com/hugoriviere' },
      { name: 'Antoine Goudedranche', link: 'https://github.com/Antoine31G' },
      {
        name: 'Omar El Alami',
        link: 'https://github.com/omarelalamielfellousse'
      }
    ],
    repos: [
      {
        label: '🐱 LLM Benchmark',
        link: 'https://github.com/Thibault-GAREL/PPE_LLM_test_Smart_contract'
      },
      {
        label: '🐱 LoRA Fine-tune',
        link: 'https://github.com/Thibault-GAREL/PPE_LoRa_Smart_contract'
      },
      {
        label: '🐱 CodeBERT Graphs (Axel)',
        link: 'https://github.com/axelbrons/graphs-ppe'
      }
    ]
  },
  {
    title: 'Resilient AI Challenge',
    titleLink: 'https://www.sustainableaicoalition.org/resilient-ai-challenge/',
    description: 'International AI competition on resilient and sustainable AI systems',
    period: '📅 2025 • 4th year',
    logo: 'https://raw.githubusercontent.com/Thibault-GAREL/Thibault-GAREL/main/Logo_Group_Projects/REs.png',
    logoAlt: 'Resilient AI Logo',
    logoFit: 'cover',
    team: [
      { name: 'Thibault GAREL', link: 'https://github.com/Thibault-GAREL' },
      { name: 'Axel Bröns', link: 'https://github.com/axelbrons' },
      { name: 'Mathis Lacombe', link: 'https://www.linkedin.com/in/mathis-lacombe34/' },
      {
        name: 'Jarfino Houngbadji',
        link: 'https://www.linkedin.com/in/jarfino-houngbadji/'
      },
      {
        name: 'Achta Sow Demba',
        link: 'https://www.linkedin.com/in/demba-sow-achta/'
      },
      {
        name: 'Djebril Laouedj',
        link: 'https://www.linkedin.com/in/djebril-laouedj-9684b4219/'
      },
      {
        name: 'Bikram Bhuyan',
        link: 'https://www.linkedin.com/in/bikram-pratim-bhuyan-01887589/'
      }
    ],
    repos: [
      {
        label: '🐱 Test Repo',
        link: 'https://github.com/Thibault-GAREL/ILab_Hackathon-Resiliant_AI-test'
      },
      {
        label: '🐱 Dataset & Benchmark',
        link: 'https://github.com/Thibault-GAREL/ILab_Hackathon-Resiliant_AI-Dataset_unifi-Benchmark'
      }
    ]
  }
]

function GroupProjectCard({ project }: { project: GroupProject }) {
  return (
    <div className="group-project-card bg-streamlit-secondary dark:bg-[#2d333b] rounded-xl p-6 mb-6 border border-streamlit-border dark:border-[#444c56]">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 mb-4">
        {/* Logo on the left, desktop only */}
        <img
          src={project.logo}
          alt={project.logoAlt}
          className={`hidden lg:block w-24 h-24 shadow-lg dark:shadow-[0_8px_16px_rgba(0,0,0,0.4)] ${
            project.logoFit === 'cover' ? 'object-cover rounded-lg' : 'object-contain'
          }`}
        />

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">
            <a
              href={project.titleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {project.title}
            </a>
            {project.award && (
              <span className="text-lg text-green-600 ml-3">{project.award}</span>
            )}
          </h3>

          <p className="text-lg mb-2 dark:text-[#adbac7]">{project.description}</p>
          <p className="text-sm text-gray-600 dark:text-[#768390] mb-4">
            {project.period}
          </p>

          <div>
            <p className="font-semibold mb-2 dark:text-[#cdd9e5]">Team:</p>
            <div className="flex flex-wrap gap-2">
              {project.team.map((member) => (
                <a
                  key={member.name}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#2d333b] px-3 py-1 rounded-md text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors"
                >
                  {member.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Repository links */}
        <div className="flex flex-col gap-3 justify-center">
          {project.repos.map((repo) => (
            <a
              key={repo.label}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-[#2d333b] px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-streamlit-border dark:border-[#444c56] text-blue-600 dark:text-[#539bf5] hover:bg-blue-50 dark:hover:bg-[#316dca20] transition-colors text-center text-sm lg:text-base"
            >
              {repo.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function GroupProjects() {
  return (
    <section className="mb-16">
      <h2
        className="text-4xl font-bold mb-8 pb-2 border-b-2 border-streamlit-border dark:border-[#444c56] flex items-center gap-3"
        style={{ color: GROUP_PROJECTS_COLOR }}
      >
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: GROUP_PROJECTS_COLOR }}
        />
        👥 Group Projects
      </h2>

      {GROUP_PROJECTS.map((project) => (
        <GroupProjectCard key={project.title} project={project} />
      ))}
    </section>
  )
}
