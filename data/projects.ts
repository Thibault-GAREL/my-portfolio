// Single source of truth for every project on the site.
//
// The three views read from this list and never carry their own copy:
//   - "By Category" groups on `category` (and renders `variants` when present)
//   - "By Date" groups on the derived academic year and sorts on `start`
//   - the Gantt chart positions the bars from `start` and `end`
//
// Dates are the only thing typed by hand. Both the date label and the academic
// year printed on a card are computed from `start` and `end`, so neither can
// disagree with the Gantt bar again.
// Dates come from PROJECT_DATES_REFERENCE.md.

import { ACADEMIC_YEARS, academicYearFor, yearBlockTitle } from './academic-years'
import type { CategoryId } from './categories'
import { compareByStartDate } from '@/lib/format'

/**
 * An extra card shown in the "By Category" view only. OPENER is one project on
 * the timeline but three destinations (paper, models, code) in the grid.
 */
export type ProjectVariant = {
  name: string
  description: string
  link: string
  image?: string
}

export type Project = {
  id: string
  name: string
  description: string
  link: string
  image?: string
  /** Alternate artwork swapped in by the dark theme. */
  imageDark?: string
  /** ISO start date, drives both the card label and the Gantt bar. */
  start: string
  /** ISO end date. */
  end: string
  category: CategoryId
  /** Shorter label for the Gantt bars, where the full name would overflow. */
  ganttLabel?: string
  variants?: ProjectVariant[]
}

const RAW = 'https://raw.githubusercontent.com/Thibault-GAREL'
const PROFILE_ASSETS = `${RAW}/Thibault-GAREL/main`

/** Declared oldest first. Every view sorts explicitly, so this is for reading. */
export const PROJECTS: Project[] = [
  {
    id: 'maze-asterix',
    name: 'Maze - Asterix & Obélix',
    description: 'Maze game with BFS pathfinding (C + Allegro 5)',
    link: 'https://github.com/Thibault-GAREL/Game_maze_Asterix-Obelix',
    image: `${RAW}/Game_maze_Asterix-Obelix/main/img/menu_screen.png`,
    start: '2022-12-01',
    end: '2023-01-17',
    category: 'Games',
    ganttLabel: 'Asterix Maze'
  },
  {
    id: 'star-wars-ece-world',
    name: 'Star Wars - ECE World',
    description: 'Star Wars minigames in an open world (C++)',
    link: 'https://github.com/Thibault-GAREL/Game_ECE_World_Minigame',
    image: `${RAW}/Game_ECE_World_Minigame/main/img/Menu.png`,
    start: '2023-04-06',
    end: '2023-05-08',
    category: 'Games',
    ganttLabel: 'Star Wars - ECE'
  },
  {
    id: 'gravity-simulation-2d',
    name: 'Gravity Simulation 2D',
    description: '2D gravity and orbital mechanics simulation',
    link: 'https://github.com/Thibault-GAREL/gravity_simulation',
    image: `${RAW}/gravity_simulation/main/img/Gif-gravity.gif`,
    start: '2023-06-06',
    end: '2023-08-30',
    category: 'Physics Simulation'
  },
  {
    id: 'neural-network-from-scratch',
    name: 'Neural Networks Library',
    description: 'Built from scratch in C',
    link: 'https://github.com/Thibault-GAREL/Neural_Network_from_Scratch',
    image: `${RAW}/Neural_Network_from_Scratch/main/Images/Gif-neural-network.gif`,
    start: '2023-08-01',
    end: '2024-05-31',
    category: 'Neural Networks'
  },
  {
    id: 'q-learning-pathfinding',
    name: 'Q-Learning Pathfinding',
    description: 'Q-Learning algorithm to find optimal paths',
    link: 'https://github.com/Thibault-GAREL/Q-Learning',
    image: `${RAW}/Q-Learning/main/img/Gif-DQN.gif`,
    start: '2023-08-01',
    end: '2023-10-20',
    category: 'Q-Learning'
  },
  {
    id: 'snake-game',
    name: 'Snake Game',
    description: 'Classic snake game for AI training',
    link: 'https://github.com/Thibault-GAREL/snake_game',
    image: `${RAW}/snake_game/main/img/Snake-game.gif`,
    start: '2024-07-13',
    end: '2025-09-20',
    category: 'Games'
  },
  {
    id: 'snake-ai-genetic',
    name: 'Snake AI - Genetic Algorithm',
    description: 'Snake game AI using genetic algorithms',
    link: 'https://github.com/Thibault-GAREL/AI_snake_genetic_version',
    image: `${RAW}/AI_snake_genetic_version/main/Images/score13.gif`,
    start: '2024-08-04',
    end: '2024-10-14',
    category: 'Genetic Algorithm',
    ganttLabel: 'Snake AI - GA'
  },
  {
    id: 'unity-ai-movement',
    name: 'Unity AI - Movement',
    description: 'Unity AI learning to move using PPO',
    link: 'https://github.com/Thibault-GAREL/Unity_move',
    image: `${RAW}/Unity_move/main/img/Gif-Unity_move.gif`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'unity-ai-greedy',
    name: 'Unity AI - Greedy',
    description: 'Unity AI learning to catch coins using PPO',
    link: 'https://github.com/Thibault-GAREL/Unity_greedy',
    image: `${RAW}/Unity_greedy/main/img_greedy/Greedy-gif-X9.gif`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'unity-ai-driving',
    name: 'Unity AI - Driving',
    description: 'Unity AI learning to drive using PPO',
    link: 'https://github.com/Thibault-GAREL/Unity_drive',
    image: `${RAW}/Unity_drive/main/img_drive/Driving-maze-gif.gif`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'driving-ai-dqn',
    name: 'Driving AI - Deep Q-Learning',
    description: 'Self-driving car using Deep Q-Learning',
    link: 'https://github.com/Thibault-GAREL/AI_driving_DQN_version',
    image: `${RAW}/AI_driving_DQN_version/main/Images/gif-driving.gif`,
    start: '2025-01-04',
    end: '2025-09-09',
    category: 'Q-Learning',
    ganttLabel: 'Driving AI - DQL'
  },
  {
    id: 'driving-game',
    name: 'Driving Game',
    description: 'Driving simulation for AI training',
    link: 'https://github.com/Thibault-GAREL/driving_game',
    image: `${RAW}/driving_game/main/img/Gif_driving_game.gif`,
    start: '2025-01-04',
    end: '2025-09-20',
    category: 'Games'
  },
  {
    id: 'driving-ai-genetic',
    name: 'Driving AI - Genetic Algorithm',
    description: 'Self-driving car using genetic algorithms',
    link: 'https://github.com/Thibault-GAREL/AI_driving_genetic_version',
    image: `${RAW}/AI_driving_genetic_version/main/Img/Driving_NEAT_gif.gif`,
    start: '2025-01-09',
    end: '2025-09-28',
    category: 'Genetic Algorithm',
    ganttLabel: 'Driving AI - GA'
  },
  {
    id: 'attraction-repulsion',
    name: 'Attraction/Repulsion Simulation',
    description: 'Particle attraction and repulsion physics',
    link: 'https://github.com/Thibault-GAREL/Attraction_repulsion',
    image: `${RAW}/Attraction_repulsion/main/img/Gif-orbit.gif`,
    start: '2025-01-23',
    end: '2025-01-29',
    category: 'Physics Simulation',
    ganttLabel: 'Attraction/Repulsion'
  },
  {
    id: 'image-generator-gan',
    name: 'Image Generator - GAN',
    description:
      'Generative Adversarial Network built from scratch for image generation',
    link: 'https://github.com/Thibault-GAREL/Image_generator_GAN',
    image: `${RAW}/Image_generator_GAN/main/Img/Titre.png`,
    start: '2025-02-22',
    end: '2025-09-24',
    category: 'Generative AI'
  },
  {
    id: 'asr-speech-recognition',
    name: 'ASR - Automatic Speech Recognition',
    description: 'School project on speech recognition',
    link: 'https://github.com/Thibault-GAREL/Speech_recognition',
    image: `${RAW}/Speech_recognition/main/logo.png`,
    start: '2025-04-12',
    end: '2025-06-11',
    category: 'Neural Networks',
    ganttLabel: 'ASR'
  },
  {
    id: 'human-sandbox',
    name: 'Human Sandbox',
    description: 'Natural Selection Simulation Engine',
    link: 'https://github.com/Thibault-GAREL/human_sandbox',
    image: `${RAW}/human_sandbox/main/img/Gif-human-sandbox.gif`,
    start: '2025-06-27',
    end: '2025-07-21',
    category: 'Games'
  },
  {
    id: 'whatsapp-ai',
    name: 'WhatsApp AI',
    description: 'My own local AI accessible through WhatsApp',
    link: 'https://github.com/Thibault-GAREL/n8n_Whatsapp_LLM',
    image: `${RAW}/n8n_Whatsapp_LLM/main/img/img.png`,
    start: '2025-07-11',
    end: '2025-07-24',
    category: 'Applied AI Workflows'
  },
  {
    id: 'smart-mail-labeling',
    name: 'Smart Mail Labeling',
    description: 'Automatic and intelligent email sorting with labeling',
    link: 'https://github.com/Thibault-GAREL/n8n_smart_mail_labeling',
    image: `${RAW}/n8n_smart_mail_labeling/main/img/logo.png`,
    start: '2025-07-16',
    end: '2025-07-26',
    category: 'Applied AI Workflows'
  },
  {
    id: 'bot-chatbot-rag',
    name: 'Bot controlled by ChatBot RAG',
    description: 'Two-wheeled robot controlled by a RAG chatbot',
    link: 'https://github.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG',
    image: `${RAW}/Bot_controlled_by_a_Chatbot_RAG/main/img/Gif-bot.gif`,
    start: '2025-07-22',
    end: '2025-10-11',
    category: 'Robotics'
  },
  {
    id: 'language-models',
    name: 'Language Models',
    description: 'Bigram & Transformer Models coded from scratch',
    link: 'https://github.com/Thibault-GAREL/Language_Models',
    image: `${RAW}/Language_Models/main/img/Titre-GPT_from_scratch.png`,
    start: '2025-09-27',
    end: '2025-12-24',
    category: 'Generative AI'
  },
  {
    id: 'rag-pdf-chatbot',
    name: 'RAG - PDF ChatBot',
    description: 'Retrieval Augmented Generation - A chatbot that reads PDFs',
    link: 'https://github.com/Thibault-GAREL/RAG_pdf',
    image: `${RAW}/RAG_pdf/main/Video/Gif-video.gif`,
    start: '2025-10-11',
    end: '2025-10-12',
    category: 'Generative AI'
  },
  {
    id: 'walking-ai-genetic',
    name: 'Walking AI - Genetic Algorithm',
    description: 'AI learning to walk with complete physics engine (Box2D)',
    link: 'https://github.com/Thibault-GAREL/Quadruped-AI',
    image: `${RAW}/Quadruped-AI/main/assets/logo.png`,
    start: '2025-10-24',
    end: '2025-12-24',
    category: 'Genetic Algorithm',
    ganttLabel: 'Walking AI - GA'
  },
  {
    id: '2d-muscular-simulation',
    name: '2D Muscular Simulation',
    description: '2D muscular physics simulation with Box2D',
    link: 'https://github.com/Thibault-GAREL/2D-Muscular-Simulation',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects/physics_muscular_simulation.png`,
    start: '2025-10-24',
    end: '2025-12-24',
    category: 'Physics Simulation',
    ganttLabel: '2D Muscular Sim.'
  },
  {
    id: 'iss-analysis-spark',
    name: 'ISS Analysis with Spark',
    description: 'Real-time ISS data analysis using Apache Spark',
    link: 'https://github.com/Thibault-GAREL/ISS_Analysis_Spark',
    image: `${RAW}/ISS_Analysis_Spark/master/Img/ISS-img.jpg`,
    start: '2025-11-12',
    end: '2025-12-21',
    category: 'Data Analysis',
    ganttLabel: 'ISS Analysis'
  },
  {
    id: 'starcraft2-vlm-rl',
    name: 'StarCraft 2 AI (VLM + RL)',
    description:
      'A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning',
    link: 'https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects/rl_starcraft2.gif`,
    imageDark: `${PROFILE_ASSETS}/Logo_Featured_Projects/rl_starcraft2_dark.gif`,
    start: '2025-11-24',
    end: '2026-01-24',
    category: 'PPO',
    ganttLabel: 'StarCraft 2 AI'
  },
  {
    id: 'clip-embedding-tools',
    name: 'CLIP Embedding Tools',
    description: 'Opposite Embedding Finder and Embedding Arithmetic',
    link: 'https://github.com/Thibault-GAREL/CLIP_Embedding_Tools',
    image: `${RAW}/CLIP_Embedding_Tools/main/img/Logo-Embedding_Tools.png`,
    start: '2025-12-25',
    end: '2025-12-27',
    category: 'Generative AI'
  },
  {
    id: 'snake-ai-dqn',
    name: 'Snake AI - Deep Q-Learning',
    description: 'Snake game AI using Deep Q-Learning',
    link: 'https://github.com/Thibault-GAREL/AI_snake_DQN_version',
    image: `${RAW}/AI_snake_DQN_version/main/Images/SnakeDQL-Score36.gif`,
    start: '2026-03-19',
    end: '2026-04-17',
    category: 'Q-Learning',
    ganttLabel: 'Snake AI - DQL'
  },
  {
    id: 'snake-ai-decision-tree',
    name: 'Snake AI - Decision Tree',
    description: 'Snake game AI using a Decision Tree',
    link: 'https://github.com/Thibault-GAREL/AI_snake_decision_tree_version',
    image: `${RAW}/AI_snake_decision_tree_version/main/img/Snake_arbre_de_decision-Score_31.gif`,
    start: '2026-03-23',
    end: '2026-04-01',
    category: 'Decision Tree',
    ganttLabel: 'Snake AI - DT'
  },
  {
    id: 'snake-ai-ppo',
    name: 'Snake AI - PPO',
    description: 'Snake game AI using Proximal Policy Optimization',
    link: 'https://github.com/Thibault-GAREL/AI_snake_PPO_version',
    image: `${RAW}/AI_snake_PPO_version/main/img/SnakePPO-Score54.gif`,
    start: '2026-03-23',
    end: '2026-04-07',
    category: 'PPO'
  },
  {
    id: 'lora-stable-diffusion',
    name: 'Fine-tuning LoRA Stable Diffusion',
    description:
      'Fine-tuning Stable Diffusion 1.5 with LoRA on 15 hand-drawn chibi self-portraits. Trained on RunPod for under 1 €.',
    link: 'https://github.com/Thibault-GAREL/ILab_Formation_Fine-tuning',
    image: `${RAW}/ILab_Formation_Fine-tuning/main/data/1-raw/my_drawings/Capture%20Bienvenu.PNG`,
    start: '2026-05-12',
    end: '2026-05-15',
    category: 'Generative AI'
  },
  {
    id: 'gravity-general-relativity',
    name: 'Gravity & Relativity',
    description:
      'Newton vs General Relativity (Schwarzschild): Mercury precession, light deflection',
    link: 'https://github.com/Thibault-GAREL/simulation_gravity-general_relativity',
    image:
      'https://media.githubusercontent.com/media/Thibault-GAREL/simulation_gravity-general_relativity/main/assets/hero.gif',
    start: '2026-05-17',
    end: '2026-05-21',
    category: 'Physics Simulation'
  },
  {
    id: 'opener',
    name: 'OPENER',
    description: 'Open NER from pre-trained bricks. 40.1 AMI e2e, 39.5 zero-shot.',
    link: 'https://github.com/Thibault-GAREL/LyRIDS_OPENER',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_code_sq.png`,
    start: '2026-05-20',
    end: '2026-07-22',
    category: 'Research paper',
    variants: [
      {
        name: 'OPENER Paper',
        description: 'Open NER from pre-trained bricks. 40.1 AMI e2e, 39.5 zero-shot.',
        link: 'https://scholar.google.com.au/citations?hl=fr&user=VEBOeF4AAAAJ',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_paper_sq.png`
      },
      {
        name: 'OPENER Models',
        description: 'opener-zs and opener-sup, ready to use from the HF Hub.',
        link: 'https://huggingface.co/collections/Thibault-GAREL/opener-open-partitioning-embedding-for-named-entity-recogn',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_model_sq.png`
      },
      {
        name: 'OPENER Code',
        description: 'Full pipeline and the 13-dataset benchmark on quality, latency, energy.',
        link: 'https://github.com/Thibault-GAREL/LyRIDS_OPENER',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_code_sq.png`
      }
    ]
  },
  {
    id: 'snake-world-model',
    name: 'Snake World Model',
    description:
      'JEPA world model built from scratch. Plans in latent space by MPC, with no learned policy.',
    link: 'https://github.com/Thibault-GAREL/World_model_from_scratch-Snake',
    image: `${RAW}/World_model_from_scratch-Snake/main/assets/snake_gameplay.gif`,
    start: '2026-06-23',
    end: '2026-08-11',
    category: 'World Model'
  }
]

/** Projects of one category, oldest first. */
export function projectsInCategory(category: CategoryId): Project[] {
  return PROJECTS.filter((project) => project.category === category).sort(
    compareByStartDate
  )
}

/**
 * Academic year blocks of the "By Date" view, earliest year first. A project
 * lands in the year its period is centred on, and a year with no project at all
 * is left out.
 */
export function projectsByAcademicYear(): { title: string; projects: Project[] }[] {
  return ACADEMIC_YEARS.map((year) => ({
    title: yearBlockTitle(year),
    projects: PROJECTS.filter(
      (project) =>
        academicYearFor(project.start, project.end).ordinal === year.ordinal
    ).sort(compareByStartDate)
  })).filter((block) => block.projects.length > 0)
}
