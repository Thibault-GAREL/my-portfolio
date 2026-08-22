import type { Skill } from '@/data/skills'

export default function SkillCategory({
  title,
  skills
}: {
  title: string
  skills: Skill[]
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-streamlit-text dark:text-[#cdd9e5] mb-3 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-streamlit-secondary dark:bg-[#2d333b] px-4 py-2 rounded-lg border border-streamlit-border dark:border-[#444c56] shadow-sm dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          >
            {skill.icon && skill.url ? (
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
              </a>
            ) : skill.icon ? (
              <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
            ) : null}
            <span className="text-streamlit-text dark:text-[#cdd9e5]">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
