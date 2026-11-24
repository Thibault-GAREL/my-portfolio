import type { Localized } from '@/lib/i18n'

export type LearningNote = {
  emoji: string
  name: string
  link: string
  description: Localized
}

/**
 * Documentation-first repositories, with no shipped code yet. They are not
 * projects, so they stay out of projects.ts (no card, no date, no Gantt bar).
 */
export const LEARNING_NOTES: LearningNote[] = [
  {
    emoji: '🔁',
    name: 'LLM Harness',
    link: 'https://github.com/Thibault-GAREL/LLM_harness',
    description: {
      en: 'How the loop, the tools and the context engineering turn a stateless language model into an agent',
      fr: "Comment la boucle, les outils et l'ingénierie du contexte transforment un modèle de langage sans mémoire en agent"
    }
  },
  {
    emoji: '🌊',
    name: 'Transformer Alternatives',
    link: 'https://github.com/Thibault-GAREL/Transformer_alternative',
    description: {
      en: 'State space models, linear attention, modern RNNs and hybrids, or what replaces attention once the KV cache stops fitting',
      fr: "Modèles à espace d'états, attention linéaire, RNN modernes et hybrides, ou ce qui remplace l'attention quand le cache KV ne tient plus en mémoire"
    }
  },
  {
    emoji: '💭',
    name: 'J-space',
    link: 'https://github.com/Thibault-GAREL/J-space',
    description: {
      en: 'The J-space explained, how the J-lens reads the thoughts a language model never writes, and how it could apply to a local Qwen 3.5',
      fr: "Le J-space expliqué, comment le J-lens lit les pensées qu'un modèle de langage n'écrit jamais, et comment l'appliquer à un Qwen 3.5 en local"
    }
  }
]
