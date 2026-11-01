# 🌐 Thibault GAREL's Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-000000.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-06B6D4.svg)
![Vercel](https://img.shields.io/badge/deployed_on-Vercel-000000.svg)

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange.svg)

<p align="center">
  <a href="https://thibault-garel.vercel.app/">
    <img src="https://github.com/Thibault-GAREL.png" alt="Thibault GAREL" width="200">
  </a>
</p>

<p align="center">
  <a href="https://thibault-garel.vercel.app/"><strong>👉 thibault-garel.vercel.app</strong></a>
</p>

---

## 📝 Project Description

My personal portfolio, built with **Next.js 14** (App Router), **TypeScript** and **Tailwind CSS**, deployed on **Vercel**. It gathers my academic background, my professional experience, my 33 personal projects, my group projects, my skills, my GitHub statistics and my hobbies on a single page.

Several sections started their life as Markdown and SVG in my [GitHub profile README](https://github.com/Thibault-GAREL), then were rebuilt here as native React components so they can be responsive and follow the site dark mode instead of the operating system one.

The whole site is exported as static HTML at build time, so nothing runs on a server in production.

---

## Example Outputs

One project is typed once in `data/projects.ts`:

```ts
{
  id: 'snake-ai-decision-tree',
  name: 'Snake AI - Decision Tree',
  description: {
    en: 'Snake game AI using a Decision Tree',
    fr: 'IA du jeu Snake par arbre de décision'
  },
  link: 'https://github.com/Thibault-GAREL/AI_snake_decision_tree_version',
  image: `${RAW}/AI_snake_decision_tree_version/main/img/Snake_arbre_de_decision-Score_31.gif`,
  start: '2026-03-23',
  end: '2026-04-01',
  category: 'Decision Tree',
  ganttLabel: 'Snake AI - DT'
}
```

And the rest of the site builds itself from that entry:

| Where | What the entry produces |
|---|---|
| Card | A 🌳 **Decision Tree** badge, the green shadow of that category, the label **Mar - Apr 2026** and the mention **4th year** (*mars - avr. 2026* and *4e année* in French) |
| By Category | The card lands in the *Reinforcement Learning* section, sorted by start date |
| By Date | The card lands in the **4th Year** block |
| Gantt | A bar labelled *Snake AI - DT*, from 23 March to 1 April 2026 |

### 📝 Notes & Observations

  📆 The academic year of a project is decided by the **middle** of its period, not by its start or its end. A project running from July to October belongs to the year opening in September.

  🚫 Nothing that can be derived from a date is ever typed by hand (neither the `Mar - Apr 2026` label nor the school year), which is what used to make the three views disagree with each other.

---

## 🗺️ How it works

Everything flows one way, from the data folder to the three views:

```text
data/projects.ts        the 33 projects, ISO dates typed once
data/categories.ts      emoji, colour and section order
data/academic-years.ts  school year boundaries
lib/format.ts           the "Mar - Apr 2026" labels
        │
        ▼
ProjectCard  +  ProjectsByCategory  +  ProjectsByDate  +  GanttChart
        │
        ▼
ProjectsSection         'use client', the only stateful wrapper
        │
        ▼
app/page.tsx            assembles every section, on the server
        │
        ▼
out/index.html          one static page, served by Vercel
```

---

## 📂 Repository structure

```bash
├── app/
│   ├── page.tsx          # Assembles every section (server component)
│   ├── layout.tsx        # Metadata, SEO, JSON-LD and the anti-flash theme and language scripts
│   ├── globals.css       # Tailwind, card shadows, language rule, reveal keyframes
│   └── icon.png          # Favicon, picked up automatically by Next.js
│
├── components/           # One file per component
│   ├── ProjectsSection.tsx      # 'use client', the By Category / By Date toggle
│   ├── ProjectsByCategory.tsx
│   ├── ProjectsByDate.tsx
│   ├── ProjectCard.tsx
│   ├── GanttChart.tsx
│   ├── AcademicTimeline.tsx
│   ├── ProfessionalExperience.tsx
│   ├── GroupProjects.tsx
│   ├── SkillCategory.tsx
│   ├── LanguageToggle.tsx       # 'use client', flips the html lang
│   └── ThemeToggle.tsx          # 'use client', flips the html class
│
├── data/                 # Single source of every piece of content
│   ├── projects.ts       # The 33 projects, typed once
│   ├── categories.ts     # Emoji, colours, section order
│   ├── academic-years.ts # School year boundaries and the year of a project
│   └── skills.ts         # Skills and tools
│
├── lib/
│   ├── format.ts         # formatDateRange, compareByStartDate, in both languages
│   ├── i18n.tsx          # The T component that renders a text in English and French
│   └── reveal.ts         # The circle reveal shared by both switches
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── next.config.js        # output: 'export' (static site)
├── tailwind.config.js    # darkMode: 'class' + the streamlit palette
├── tsconfig.json
├── package.json
│
├── PROJECT_DATES_REFERENCE.md   # Reference of the real project dates
├── LICENSE
└── README.md
```

---

## 💻 Run it on Your PC

You need **Node.js 18.17 or newer** (built and tested on Node 22.17 with npm 10.9).

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Thibault-GAREL/my-portfolio.git
cd my-portfolio

npm install

npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The page reloads on every save.

### Build the static site

```bash
npm run build     # writes the exported site into out/
npx serve out     # serves that build on http://localhost:3000
```

⚠️ `npm run start` does **not** work in this project. `next.config.js` uses `output: 'export'`, and `next start` refuses that configuration, so preview the build with any static server (`npx serve out`, or `python -m http.server 3000` from inside `out/`).

### Check the types

```bash
npx tsc --noEmit -p .
```

Worth running after any change, since a type error stops the Vercel build too.

### Add a project

Add one entry to `PROJECTS` in `data/projects.ts` (dates in `YYYY-MM-DD`), and the card, the year block and the Gantt bar follow on their own. A brand new category goes into `data/categories.ts` first, with its emoji, its colour and its place in `CATEGORY_SECTIONS`.

### Deploy

Vercel builds and publishes on every push. To do it from the terminal instead:

```bash
npx vercel --prod
```

---

## 📖 Inspiration / Sources

The design is inspired by [Streamlit](https://streamlit.io/), whose white cards and soft borders I like a lot. The content mirrors my [GitHub profile README](https://github.com/Thibault-GAREL).

The statistics come from open services:
- 📊 [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- 🗂️ [github-profile-summary-cards](https://github.com/vn7n24fzkq/github-profile-summary-cards)
- 🔥 [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats)

Code created by me 😎, Thibault GAREL - [Github](https://github.com/Thibault-GAREL)
