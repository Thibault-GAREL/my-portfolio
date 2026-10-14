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
//
// Each description carries its French translation. Names stay in English, as
// on the GitHub repos and the profile README.

import { ACADEMIC_YEARS, academicYearFor, yearBlockTitle } from './academic-years'
import type { CategoryId } from './categories'
import { compareByStartDate } from '@/lib/format'
import type { Localized } from '@/lib/i18n'

/**
 * An extra card shown in the "By Category" view only. OPENER is one project on
 * the timeline but three destinations (paper, models, code) in the grid.
 */
export type ProjectVariant = {
  name: string
  description: Localized
  link: string
  image?: string
}

export type Project = {
  id: string
  name: string
  description: Localized
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
    description: {
      en: 'Maze game with BFS pathfinding (C + Allegro 5)',
      fr: 'Jeu de labyrinthe avec recherche de chemin en BFS (C + Allegro 5)'
    },
    link: 'https://github.com/Thibault-GAREL/Game_maze_Asterix-Obelix',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/game_maze_asterix.png`,
    start: '2022-12-01',
    end: '2023-01-17',
    category: 'Games',
    ganttLabel: 'Asterix Maze'
  },
  {
    id: 'star-wars-ece-world',
    name: 'Star Wars - ECE World',
    description: {
      en: 'Star Wars minigames in an open world (C++)',
      fr: 'Mini-jeux Star Wars dans un monde ouvert (C++)'
    },
    link: 'https://github.com/Thibault-GAREL/Game_ECE_World_Minigame',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/game_star_wars.png`,
    start: '2023-04-06',
    end: '2023-05-08',
    category: 'Games',
    ganttLabel: 'Star Wars - ECE'
  },
  {
    id: 'gravity-simulation-2d',
    name: 'Gravity Simulation 2D',
    description: {
      en: '2D gravity and orbital mechanics simulation',
      fr: 'Simulation 2D de la gravité et de la mécanique orbitale'
    },
    link: 'https://github.com/Thibault-GAREL/gravity_simulation',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/physics_gravity.webp`,
    start: '2023-06-06',
    end: '2023-08-30',
    category: 'Physics Simulation'
  },
  {
    id: 'neural-network-from-scratch',
    name: 'Neural Networks Library',
    description: {
      en: 'Built from scratch in C',
      fr: 'Codée de zéro en C'
    },
    link: 'https://github.com/Thibault-GAREL/Neural_Network_from_Scratch',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/neural_net_from_scratch.webp`,
    start: '2023-08-01',
    end: '2024-05-31',
    category: 'Neural Networks'
  },
  {
    id: 'q-learning-pathfinding',
    name: 'Q-Learning Pathfinding',
    description: {
      en: 'Q-Learning algorithm to find optimal paths',
      fr: 'Algorithme de Q-Learning pour trouver les chemins optimaux'
    },
    link: 'https://github.com/Thibault-GAREL/Q-Learning',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_q_learning.webp`,
    start: '2023-08-01',
    end: '2023-10-20',
    category: 'Q-Learning'
  },
  {
    id: 'snake-game',
    name: 'Snake Game',
    description: {
      en: 'Classic snake game for AI training',
      fr: 'Le jeu du serpent classique, pour entraîner des IA'
    },
    link: 'https://github.com/Thibault-GAREL/snake_game',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/game_snake.webp`,
    start: '2024-07-13',
    end: '2025-09-20',
    category: 'Games'
  },
  {
    id: 'snake-ai-genetic',
    name: 'Snake AI - Genetic Algorithm',
    description: {
      en: 'Snake game AI using genetic algorithms',
      fr: 'IA du jeu Snake par algorithmes génétiques'
    },
    link: 'https://github.com/Thibault-GAREL/AI_snake_genetic_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_snake_genetic.webp`,
    start: '2024-08-04',
    end: '2024-10-14',
    category: 'Genetic Algorithm',
    ganttLabel: 'Snake AI - GA'
  },
  {
    id: 'unity-ai-movement',
    name: 'Unity AI - Movement',
    description: {
      en: 'Unity AI learning to move using PPO',
      fr: 'IA Unity qui apprend à se déplacer avec PPO'
    },
    link: 'https://github.com/Thibault-GAREL/Unity_move',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_unity_move.webp`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'unity-ai-greedy',
    name: 'Unity AI - Greedy',
    description: {
      en: 'Unity AI learning to catch coins using PPO',
      fr: 'IA Unity qui apprend à attraper des pièces avec PPO'
    },
    link: 'https://github.com/Thibault-GAREL/Unity_greedy',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_unity_greedy.webp`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'unity-ai-driving',
    name: 'Unity AI - Driving',
    description: {
      en: 'Unity AI learning to drive using PPO',
      fr: 'IA Unity qui apprend à conduire avec PPO'
    },
    link: 'https://github.com/Thibault-GAREL/Unity_drive',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_unity_drive.webp`,
    start: '2025-01-01',
    end: '2025-01-31',
    category: 'Unity ML-Agents'
  },
  {
    id: 'driving-ai-dqn',
    name: 'Driving AI - Deep Q-Learning',
    description: {
      en: 'Self-driving car using Deep Q-Learning',
      fr: 'Voiture autonome par Deep Q-Learning'
    },
    link: 'https://github.com/Thibault-GAREL/AI_driving_DQN_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_driving_dql.webp`,
    start: '2025-01-04',
    end: '2025-09-09',
    category: 'Q-Learning',
    ganttLabel: 'Driving AI - DQL'
  },
  {
    id: 'driving-game',
    name: 'Driving Game',
    description: {
      en: 'Driving simulation for AI training',
      fr: 'Simulation de conduite pour entraîner des IA'
    },
    link: 'https://github.com/Thibault-GAREL/driving_game',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/game_driving.webp`,
    start: '2025-01-04',
    end: '2025-09-20',
    category: 'Games'
  },
  {
    id: 'driving-ai-genetic',
    name: 'Driving AI - Genetic Algorithm',
    description: {
      en: 'Self-driving car using genetic algorithms',
      fr: 'Voiture autonome par algorithmes génétiques'
    },
    link: 'https://github.com/Thibault-GAREL/AI_driving_genetic_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_driving_genetic.webp`,
    start: '2025-01-09',
    end: '2025-09-28',
    category: 'Genetic Algorithm',
    ganttLabel: 'Driving AI - GA'
  },
  {
    id: 'attraction-repulsion',
    name: 'Attraction/Repulsion Simulation',
    description: {
      en: 'Particle attraction and repulsion physics',
      fr: "Physique d'attraction et de répulsion entre particules"
    },
    link: 'https://github.com/Thibault-GAREL/Attraction_repulsion',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/physics_attraction_repulsion.webp`,
    start: '2025-01-23',
    end: '2025-01-29',
    category: 'Physics Simulation',
    ganttLabel: 'Attraction/Repulsion'
  },
  {
    id: 'image-generator-gan',
    name: 'Image Generator - GAN',
    description: {
      en: 'Generative Adversarial Network built from scratch for image generation',
      fr: 'Réseau antagoniste génératif (GAN) codé de zéro pour générer des images'
    },
    link: 'https://github.com/Thibault-GAREL/Image_generator_GAN',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/vision_gan.png`,
    start: '2025-02-22',
    end: '2025-09-24',
    category: 'Vision Models'
  },
  {
    id: 'asr-speech-recognition',
    name: 'ASR - Automatic Speech Recognition',
    description: {
      en: 'School project on speech recognition',
      fr: "Projet d'école sur la reconnaissance vocale"
    },
    link: 'https://github.com/Thibault-GAREL/Speech_recognition',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/neural_asr.png`,
    start: '2025-04-12',
    end: '2025-06-11',
    category: 'Neural Networks',
    ganttLabel: 'ASR'
  },
  {
    id: 'human-sandbox',
    name: 'Human Sandbox',
    description: {
      en: 'Natural Selection Simulation Engine',
      fr: 'Moteur de simulation de la sélection naturelle'
    },
    link: 'https://github.com/Thibault-GAREL/human_sandbox',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/game_human_sandbox.webp`,
    start: '2025-06-27',
    end: '2025-07-21',
    category: 'Games'
  },
  {
    id: 'whatsapp-ai',
    name: 'WhatsApp AI',
    description: {
      en: 'My own local AI accessible through WhatsApp',
      fr: 'Ma propre IA locale, accessible depuis WhatsApp'
    },
    link: 'https://github.com/Thibault-GAREL/n8n_Whatsapp_LLM',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/n8n_whatsapp_ai.png`,
    start: '2025-07-11',
    end: '2025-07-24',
    category: 'Applied AI Workflows'
  },
  {
    id: 'smart-mail-labeling',
    name: 'Smart Mail Labeling',
    description: {
      en: 'Automatic and intelligent email sorting with labeling',
      fr: 'Tri automatique et intelligent des e-mails par libellés'
    },
    link: 'https://github.com/Thibault-GAREL/n8n_smart_mail_labeling',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/n8n_mail_sorting.png`,
    start: '2025-07-16',
    end: '2025-07-26',
    category: 'Applied AI Workflows'
  },
  {
    id: 'robot-local-llm',
    name: 'Robot Controlled by Local LLM',
    description: {
      en: 'Two-wheel robot driven by a local Mistral, which turns plain sentences into motor commands sent to a Raspberry Pi and an Arduino',
      fr: 'Robot à deux roues piloté par un Mistral local, qui traduit des phrases simples en commandes moteur envoyées à un Raspberry Pi et à un Arduino'
    },
    link: 'https://github.com/Thibault-GAREL/Robot_Controlled_by_Local_LLM',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/lm_robot_local_llm.webp`,
    start: '2025-07-22',
    end: '2025-10-11',
    category: 'Language Models',
    ganttLabel: 'Robot - Local LLM'
  },
  {
    id: 'original-llm',
    name: 'Original LLM',
    description: {
      en: 'Bigram & Transformer Models coded from scratch',
      fr: 'Modèles Bigram et Transformer codés de zéro'
    },
    link: 'https://github.com/Thibault-GAREL/Language_Models',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/lm_original_llm.png`,
    start: '2025-09-27',
    end: '2025-12-24',
    category: 'Language Models'
  },
  {
    id: 'rag-pdf-chatbot',
    name: 'RAG - PDF ChatBot',
    description: {
      en: 'Retrieval Augmented Generation - A chatbot that reads PDFs',
      fr: 'Retrieval Augmented Generation - Un chatbot qui lit des PDF'
    },
    link: 'https://github.com/Thibault-GAREL/RAG_pdf',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/lm_rag.webp`,
    start: '2025-10-11',
    end: '2025-10-12',
    category: 'Language Models'
  },
  {
    id: 'walking-ai-genetic',
    name: 'Walking AI - Genetic Algorithm',
    description: {
      en: 'AI learning to walk with complete physics engine (Box2D)',
      fr: 'IA qui apprend à marcher avec un moteur physique complet (Box2D)'
    },
    link: 'https://github.com/Thibault-GAREL/Quadruped-AI',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_walking_quadruped.png`,
    start: '2025-10-24',
    end: '2025-12-24',
    category: 'Genetic Algorithm',
    ganttLabel: 'Walking AI - GA'
  },
  {
    id: '2d-muscular-simulation',
    name: '2D Muscular Simulation',
    description: {
      en: '2D muscular physics simulation with Box2D',
      fr: 'Simulation physique musculaire en 2D avec Box2D'
    },
    link: 'https://github.com/Thibault-GAREL/2D-Muscular-Simulation',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/physics_muscular_simulation.png`,
    start: '2025-10-24',
    end: '2025-12-24',
    category: 'Physics Simulation',
    ganttLabel: '2D Muscular Sim.'
  },
  {
    id: 'iss-analysis-spark',
    name: 'ISS Analysis with Spark',
    description: {
      en: 'Real-time ISS data analysis using Apache Spark',
      fr: "Analyse en temps réel des données de l'ISS avec Apache Spark"
    },
    link: 'https://github.com/Thibault-GAREL/ISS_Analysis_Spark',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/data_iss_analysis.png`,
    start: '2025-11-12',
    end: '2025-12-21',
    category: 'Data Analysis',
    ganttLabel: 'ISS Analysis'
  },
  {
    id: 'starcraft2-vlm-rl',
    name: 'StarCraft 2 AI (VLM + RL)',
    description: {
      en: 'A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning',
      fr: "Une IA StarCraft 2 qui combine un modèle vision-langage et l'apprentissage par renforcement"
    },
    link: 'https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_starcraft2.webp`,
    start: '2025-11-24',
    end: '2026-01-24',
    category: 'PPO',
    ganttLabel: 'StarCraft 2 AI'
  },
  {
    id: 'clip-embedding-tools',
    name: 'CLIP Embedding Tools',
    description: {
      en: 'Opposite Embedding Finder and Embedding Arithmetic',
      fr: "Recherche d'embeddings opposés et arithmétique d'embeddings"
    },
    link: 'https://github.com/Thibault-GAREL/CLIP_Embedding_Tools',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/lm_clip_embedding.png`,
    start: '2025-12-25',
    end: '2025-12-27',
    category: 'Language Models'
  },
  {
    id: 'snake-ai-dqn',
    name: 'Snake AI - Deep Q-Learning',
    description: {
      en: 'Snake game AI using Deep Q-Learning',
      fr: 'IA du jeu Snake par Deep Q-Learning'
    },
    link: 'https://github.com/Thibault-GAREL/AI_snake_DQN_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_snake_dql.webp`,
    start: '2026-03-19',
    end: '2026-04-17',
    category: 'Q-Learning',
    ganttLabel: 'Snake AI - DQL'
  },
  {
    id: 'snake-ai-decision-tree',
    name: 'Snake AI - Decision Tree',
    description: {
      en: 'Snake game AI using a Decision Tree',
      fr: 'IA du jeu Snake par arbre de décision'
    },
    link: 'https://github.com/Thibault-GAREL/AI_snake_decision_tree_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_snake_decision_tree.webp`,
    start: '2026-03-23',
    end: '2026-04-01',
    category: 'Decision Tree',
    ganttLabel: 'Snake AI - DT'
  },
  {
    id: 'snake-ai-ppo',
    name: 'Snake AI - PPO',
    description: {
      en: 'Snake game AI using Proximal Policy Optimization',
      fr: 'IA du jeu Snake par Proximal Policy Optimization'
    },
    link: 'https://github.com/Thibault-GAREL/AI_snake_PPO_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_snake_ppo.webp`,
    start: '2026-03-23',
    end: '2026-04-07',
    category: 'PPO'
  },
  {
    id: 'lora-stable-diffusion',
    name: 'Fine-tuning LoRA Stable Diffusion',
    description: {
      en: 'Fine-tuning Stable Diffusion 1.5 with LoRA on 15 hand-drawn chibi self-portraits. Trained on RunPod for under 1 €.',
      fr: 'Fine-tuning de Stable Diffusion 1.5 en LoRA sur 15 autoportraits chibi dessinés à la main. Entraîné sur RunPod pour moins de 1\u00a0€.'
    },
    link: 'https://github.com/Thibault-GAREL/ILab_Formation_Fine-tuning',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/vision_lora.png`,
    start: '2026-05-12',
    end: '2026-05-15',
    category: 'Vision Models'
  },
  {
    id: 'gravity-general-relativity',
    name: 'Gravity & Relativity',
    description: {
      en: 'Newton vs General Relativity (Schwarzschild): Mercury precession, light deflection',
      fr: 'Newton contre la relativité générale (Schwarzschild)\u00a0: précession de Mercure, déviation de la lumière'
    },
    link: 'https://github.com/Thibault-GAREL/simulation_gravity-general_relativity',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/physics_general_relativity.webp`,
    start: '2026-05-17',
    end: '2026-05-21',
    category: 'Physics Simulation'
  },
  {
    id: 'opener',
    name: 'OPENER',
    description: {
      en: 'Open NER from pre-trained bricks. 40.1 AMI e2e, 39.5 zero-shot.',
      fr: 'NER ouverte à partir de briques pré-entraînées. 40,1 AMI e2e, 39,5 en zero-shot.'
    },
    link: 'https://github.com/Thibault-GAREL/LyRIDS_OPENER',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_code.png`,
    start: '2026-05-20',
    end: '2026-07-22',
    category: 'Research paper',
    variants: [
      {
        name: 'OPENER Paper',
        description: {
          en: 'Open NER from pre-trained bricks. 40.1 AMI e2e, 39.5 zero-shot.',
          fr: 'NER ouverte à partir de briques pré-entraînées. 40,1 AMI e2e, 39,5 en zero-shot.'
        },
        link: 'https://scholar.google.com.au/citations?hl=fr&user=VEBOeF4AAAAJ',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_paper.png`
      },
      {
        name: 'OPENER Models',
        description: {
          en: 'opener-zs and opener-sup, ready to use from the HF Hub.',
          fr: "opener-zs et opener-sup, prêts à l'emploi depuis le HF Hub."
        },
        link: 'https://huggingface.co/collections/Thibault-GAREL/opener-open-partitioning-embedding-for-named-entity-recogn',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_model.png`
      },
      {
        name: 'OPENER Code',
        description: {
          en: 'Full pipeline and the 13-dataset benchmark on quality, latency, energy.',
          fr: 'Pipeline complet et benchmark sur 13 jeux de données\u00a0: qualité, latence, énergie.'
        },
        link: 'https://github.com/Thibault-GAREL/LyRIDS_OPENER',
        image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/research_opener_code.png`
      }
    ]
  },
  {
    id: 'snake-world-model',
    name: 'Snake AI - World Model',
    description: {
      en: 'JEPA world model built from scratch. Plans in latent space by MPC, with no learned policy.',
      fr: "World model JEPA codé de zéro. Planifie dans l'espace latent par MPC, sans politique apprise."
    },
    link: 'https://github.com/Thibault-GAREL/AI_snake_world_model_version',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/rl_snake_world_model.webp`,
    start: '2026-06-23',
    end: '2026-08-11',
    category: 'World Model',
    ganttLabel: 'Snake AI - WM'
  },
  {
    id: 'modern-llm',
    name: 'Modern LLM',
    description: {
      en: 'GPT-style LLM trained with every modern upgrade since Attention Is All You Need, each one ablated.',
      fr: 'LLM de type GPT entraîné avec toutes les améliorations modernes depuis Attention Is All You Need, chacune testée en ablation.'
    },
    link: 'https://github.com/Thibault-GAREL/LLMs_modern_from_scratch',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/lm_modern_llm.png`,
    start: '2026-08-04',
    end: '2026-08-15',
    category: 'Language Models'
  },
  {
    id: 'world-models',
    name: 'World Models',
    description: {
      en: 'Guide to world models and JEPA, explained with Meta FAIR figures. Model training for the IntPhys 2 leaderboard coming soon.',
      fr: "Guide des world models et de JEPA, expliqué avec les figures de Meta FAIR. Entraînement d'un modèle pour le leaderboard IntPhys 2 à venir."
    },
    link: 'https://github.com/Thibault-GAREL/World_model_from_scratch',
    image: `${PROFILE_ASSETS}/Logo_Featured_Projects_compressed/vision_world_models.png`,
    start: '2026-08-28',
    end: '2026-09-17',
    category: 'Vision Models'
  }
]

/**
 * Display order of the "By Category" view, mirroring the README of the GitHub
 * profile. Only the categories whose README order differs from the date order
 * are listed: every other category already reads the same both sides. An id
 * that is not listed comes after the listed ones, by date.
 * The "By Date" view and the Gantt chart keep sorting by date.
 */
const CATEGORY_CARD_ORDER: Partial<Record<CategoryId, string[]>> = {
  'Language Models': [
    'original-llm',
    'modern-llm',
    'rag-pdf-chatbot',
    'clip-embedding-tools',
    'robot-local-llm'
  ],
  'Q-Learning': ['q-learning-pathfinding', 'snake-ai-dqn', 'driving-ai-dqn'],
  PPO: ['snake-ai-ppo', 'starcraft2-vlm-rl'],
  Games: [
    'snake-game',
    'driving-game',
    'human-sandbox',
    'star-wars-ece-world',
    'maze-asterix'
  ]
}

/** Projects of one category, in the README order when there is one, else oldest first. */
export function projectsInCategory(category: CategoryId): Project[] {
  const order = CATEGORY_CARD_ORDER[category]
  const projects = PROJECTS.filter((project) => project.category === category)

  if (!order) return projects.sort(compareByStartDate)

  const rank = (project: Project) => {
    const i = order.indexOf(project.id)
    return i === -1 ? order.length : i
  }
  return projects.sort(
    (a, b) => rank(a) - rank(b) || compareByStartDate(a, b)
  )
}

/**
 * Academic year blocks of the "By Date" view, earliest year first. A project
 * lands in the year its period is centred on, and a year with no project at all
 * is left out.
 */
export function projectsByAcademicYear(): {
  ordinal: string
  title: Localized
  projects: Project[]
}[] {
  return ACADEMIC_YEARS.map((year) => ({
    ordinal: year.ordinal,
    title: yearBlockTitle(year),
    projects: PROJECTS.filter(
      (project) =>
        academicYearFor(project.start, project.end).ordinal === year.ordinal
    ).sort(compareByStartDate)
  })).filter((block) => block.projects.length > 0)
}
