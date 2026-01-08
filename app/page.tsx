'use client'

import React, { useState } from 'react'

export default function Home() {
  const [sortBy, setSortBy] = useState<'category' | 'date'>('category')

  return (
    <main className="min-h-screen bg-streamlit-bg">
      {/* Header */}
      <header className="border-b border-streamlit-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-streamlit-text">Thibault GAREL&apos;s Portfolio</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <img
              src="https://github.com/Thibault-GAREL.png"
              alt="Thibault GAREL"
              className="w-32 h-32 rounded-full border-4 border-streamlit-border shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold text-streamlit-text mb-4">
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

          <div className="text-xl text-gray-700 mb-6 leading-relaxed">
            <p className="mb-4">
              I am currently in my 4th year at <strong>ECE</strong>, an engineering school,
              where I am pursuing a Major in <strong>Data & AI</strong>.
            </p>

            <p className="mb-4">
              Since 2023, I've been building personal projects mostly on <strong>AI</strong> 🤖.
            </p>

            <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
              <span>I'm an AI maker in</span>
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-streamlit-secondary px-4 py-3 rounded-lg border border-streamlit-border">
                <div className="flex items-center gap-3">
                  <img
                    src="https://github.com/intelligenceLab-ECE.png"
                    alt="Intelligence Lab"
                    className="w-8 h-8 rounded-full"
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
                    className="text-gray-600 hover:underline text-sm"
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-4xl font-bold text-streamlit-text pb-2 border-b-2 border-streamlit-border">
              ✨ Featured Projects
            </h2>

            {/* Sort Toggle */}
            <div className="flex gap-2 bg-streamlit-secondary rounded-lg p-1 border border-streamlit-border">
              <button
                onClick={() => setSortBy('category')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  sortBy === 'category'
                    ? 'bg-white text-streamlit-text font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-streamlit-text'
                }`}
              >
                By Category
              </button>
              <button
                onClick={() => setSortBy('date')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  sortBy === 'date'
                    ? 'bg-white text-streamlit-text font-semibold shadow-sm'
                    : 'text-gray-600 hover:text-streamlit-text'
                }`}
              >
                By Date
              </button>
            </div>
          </div>

          {sortBy === 'category' ? (
            <ProjectsByCategory />
          ) : (
            <ProjectsByDate />
          )}
        </section>

        {/* Group Projects */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
            👥 Project in Group
          </h2>

          <div className="bg-streamlit-secondary rounded-xl p-6 mb-6 border border-streamlit-border">
            <div className="grid grid-cols-[auto_1fr_auto] gap-6 mb-4">
              {/* Logo on the left */}
              <img
                src="https://www.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/cnd/Logo_CND_PA.png?itok=MRux1fZ_"
                alt="CND Logo"
                className="w-24 h-24 object-contain"
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

                <p className="text-lg mb-2">
                  AI system to detect anomalies and breakdowns in French army logs
                </p>
                <p className="text-sm text-gray-600 mb-4">📅 November 18-20, 2025 • 4th year</p>

                <div>
                  <p className="font-semibold mb-2">Team:</p>
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
                        className="bg-white px-3 py-1 rounded-md text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {member.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code links in a column on the right */}
              <div className="flex flex-col gap-3 justify-center">
                <a
                  href="https://github.com/Rqbln/dirisi25-hackathon-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-3 rounded-lg border border-streamlit-border text-blue-600 hover:bg-blue-50 transition-colors text-center whitespace-nowrap"
                >
                  🐱 Frontend Code
                </a>
                <a
                  href="https://github.com/Rqbln/dirisi25-hackathon-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-4 py-3 rounded-lg border border-streamlit-border text-blue-600 hover:bg-blue-50 transition-colors text-center whitespace-nowrap"
                >
                  🐱 Backend Code
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
            🛠️ Skills & Tools
          </h2>

          <SkillCategory
            title="Languages"
            skills={[
              { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", url: "https://www.python.org/" },
              { name: "C", icon: "https://cdn.simpleicons.org/c/00599C", url: "https://isocpp.org/" },
              { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", url: "https://isocpp.org/" },
              { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", url: "https://www.mysql.com/" },
              { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", url: "https://www.java.com/" }
            ]}
          />

          <SkillCategory
            title="Web"
            skills={[
              { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
              { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
              { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", url: "https://www.php.net/" },
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
            ]}
          />

          <SkillCategory
            title="Libraries"
            skills={[
              { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", url: "https://www.tensorflow.org/" },
              { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", url: "https://pytorch.org/" },
              { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", url: "https://scikit-learn.org/" },
              { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", url: "https://numpy.org/" },
              { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", url: "https://pandas.pydata.org/" }
            ]}
          />

          <SkillCategory
            title="Visualization"
            skills={[
              { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", url: "https://matplotlib.org/" },
              { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", url: "https://powerbi.microsoft.com/" },
              { name: "Pygame", icon: "https://www.pygame.org/docs/_static/pygame_logo.svg", url: "https://www.pygame.org/" },
              { name: "Allegro", icon: "https://avatars.githubusercontent.com/u/5460870?s=200&v=4", url: "https://liballeg.org/" },
              { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", url: "https://streamlit.io/" }
            ]}
          />

          <SkillCategory
            title="Other Tools"
            skills={[
              { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", url: "https://github.com/" },
              { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", url: "https://git-scm.com/" },
              { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
              { name: "Ollama", icon: "https://avatars.githubusercontent.com/u/151674099", url: "https://ollama.com/" },
              { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4C89", url: "https://n8n.io/" },
              { name: "Raspberry Pi", icon: "https://cdn.simpleicons.org/raspberrypi/C51A4A", url: "https://www.raspberrypi.com/" },
              { name: "CUDA", icon: "https://cdn.simpleicons.org/nvidia/76B900", url: "https://developer.nvidia.com/cuda-zone" },
              { name: "Arduino", icon: "https://cdn.simpleicons.org/arduino/00979D", url: "https://www.arduino.cc/" },
              { name: "ESP32", icon: "https://cdn.simpleicons.org/espressif/000000", url: "https://www.espressif.com/en/products/socs/esp32" }
            ]}
          />
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
            🚀 Next Steps
          </h2>

          <div className="space-y-4">
            <div className="bg-streamlit-secondary rounded-xl p-6 border border-streamlit-border">
              <p className="text-lg">
                Finish the Snake game using Deep Q-learning (hyperparameters optimization)
              </p>
            </div>
            <div className="bg-streamlit-secondary rounded-xl p-6 border border-streamlit-border">
              <p className="text-lg">
                Complete Walking AI with Genetic Algorithm and StarCraft2 VLM-RL project
              </p>
            </div>
            <div className="bg-streamlit-secondary rounded-xl p-6 border border-streamlit-border">
              <p className="text-lg">
                Develop a voice cloner for end-to-end speech-to-speech synthesis (Speech→Text ✅, Text→Text ✅, Text→Speech 🚧)
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-streamlit-border pt-8 mt-16">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Code created by me, Thibault GAREL - {' '}
              <a
                href="https://github.com/Thibault-GAREL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-lg mb-4">Feel free to contact me! 😊</p>
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
            image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
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
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">Reinforcement Learning</h3>

        {/* Genetic Algorithm */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4 ml-4">🧬 Genetic Algorithm</h4>
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
                inProgress: true,
                date: "Oct 2025 - Present",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Deep Q-Learning */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4 ml-4">🎯 Deep Q-Learning</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Snake AI - Deep Q-Learning",
                description: "Snake game AI using DQN (in progress)",
                link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",
                inProgress: true,
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
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
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Q-Learning */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4 ml-4">🗺️ Q-Learning</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <ProjectCard
              project={{
                name: "Q-Learning Pathfinding",
                description: "Q-Learning algorithm to find optimal paths",
                link: "https://github.com/Thibault-GAREL/Q-Learning",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Q-Learning/main/img/Gif-DQN.gif",
                date: "Sep 2023",
                year: "2nd year"
              }}
            />
          </div>
        </div>

        {/* PPO */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4 ml-4">🚀 PPO (Proximal Policy Optimization)</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Snake AI - PPO",
                description: "Snake game AI using Proximal Policy Optimization",
                link: "https://github.com/Thibault-GAREL/AI_snake_PPO_version",
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
                inProgress: true,
                date: "Dec 2025 - Present",
                year: "4th year"
              },
              {
                name: "StarCraft 2 AI (VLM + RL)",
                description: "A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning",
                link: "https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL",
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
                inProgress: true,
                date: "Oct 2025 - Present",
                year: "4th year"
              },
              {
                name: "Unity AI - Movement",
                description: "Unity AI learning to move using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_move",
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
                date: "2025",
                year: "4th year"
              },
              {
                name: "Unity AI - Greedy",
                description: "Unity AI learning to catch money using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_greedy",
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
                date: "2025",
                year: "4th year"
              },
              {
                name: "Unity AI - Driving",
                description: "Unity AI learning to drive using PPO",
                link: "https://github.com/Thibault-GAREL/Unity_drive",
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
                date: "2025",
                year: "4th year"
              }
            ].map((project) => (
              <ProjectCard key={project.name} project={project} />
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
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      inProgress: true,
      date: "Dec 2025 - Present",
      year: "4th year"
    },
    {
      name: "StarCraft 2 AI (VLM + RL)",
      description: "A StarCraft 2 AI combining Vision-Language Model and Reinforcement Learning",
      link: "https://github.com/Thibault-GAREL/AI-StarCraft2-VLM-RL",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      inProgress: true,
      date: "Oct 2025 - Present",
      year: "4th year"
    },
    {
      name: "Walking AI - Genetic Algorithm",
      description: "AI learning to walk with complete physics engine (Box2D)",
      link: "https://github.com/Thibault-GAREL/test_box2D_pygame",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/test_box2D_pygame/main/img/logo.png",
      inProgress: true,
      date: "Oct 2025 - Present",
      year: "4th year"
    },
    {
      name: "Snake AI - Deep Q-Learning",
      description: "Snake game AI using DQN (in progress)",
      link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",
      inProgress: true,
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      date: "Jul 2024 - Present",
      year: "3rd - 4th year"
    }
  ]

  // 4th year projects (sorted by start date)
  const fourthYearProjects = [
    {
      name: "Unity AI - Movement",
      description: "Unity AI learning to move using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_move",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      date: "2025",
      year: "4th year"
    },
    {
      name: "Unity AI - Greedy",
      description: "Unity AI learning to catch money using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_greedy",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      date: "2025",
      year: "4th year"
    },
    {
      name: "Unity AI - Driving",
      description: "Unity AI learning to drive using PPO",
      link: "https://github.com/Thibault-GAREL/Unity_drive",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      date: "2025",
      year: "4th year"
    },
    {
      name: "Driving AI - Deep Q-Learning",
      description: "Self-driving car using Deep Q-Learning",
      link: "https://github.com/Thibault-GAREL/AI_driving_DQN_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_DQN_version/main/Images/gif-driving.gif",
      date: "Jan - Sep 2025",
      year: "4th year"
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
      name: "Attraction/Repulsion Simulation",
      description: "Particle attraction and repulsion physics",
      link: "https://github.com/Thibault-GAREL/Attraction_repulsion",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Attraction_repulsion/main/img/Gif-orbit.gif",
      date: "Jan - Sep 2025",
      year: "4th year"
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
      name: "Image Generator - GAN",
      description: "Generative Adversarial Network built from scratch for image generation",
      link: "https://github.com/Thibault-GAREL/Image_generator_GAN",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Image_generator_GAN/main/Img/Titre.png",
      date: "Feb - Sep 2025",
      year: "4th year"
    },
    {
      name: "ASR - Automatic Speech Recognition",
      description: "School project on speech recognition",
      link: "https://github.com/Thibault-GAREL/Speech_recognition",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Speech_recognition/main/logo.png",
      date: "Apr - Jun 2025",
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
    },
    {
      name: "Bot controlled by ChatBot RAG",
      description: "Two-wheeled robot controlled by a RAG chatbot",
      link: "https://github.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG/main/img/Gif-bot.gif",
      date: "Jul - Oct 2025",
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
      name: "ISS Analysis with Spark",
      description: "Real-time ISS data analysis using Apache Spark",
      link: "https://github.com/Thibault-GAREL/ISS_Analysis_Spark",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/ISS_Analysis_Spark/master/Img/ISS-img.jpg",
      date: "Nov - Dec 2025",
      year: "4th year"
    },
    {
      name: "CLIP Embedding Tools",
      description: "Opposite Embedding Finder and Embedding Arithmetic",
      link: "https://github.com/Thibault-GAREL/CLIP_Embedding_Tools",
      image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png",
      date: "Dec 2025",
      year: "4th year"
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
      year: "3rd - 4th year"
    },
    {
      name: "Snake AI - Genetic Algorithm",
      description: "Snake game AI using genetic algorithms",
      link: "https://github.com/Thibault-GAREL/AI_snake_genetic_version",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_genetic_version/main/Images/score13.gif",
      date: "Aug - Oct 2024",
      year: "3rd year"
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
      year: "2nd year"
    },
    {
      name: "Q-Learning Pathfinding",
      description: "Q-Learning algorithm to find optimal paths",
      link: "https://github.com/Thibault-GAREL/Q-Learning",
      image: "https://raw.githubusercontent.com/Thibault-GAREL/Q-Learning/main/img/Gif-DQN.gif",
      date: "Sep 2023",
      year: "2nd year"
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
      year: "1st - 2nd year"
    }
  ]

  return (
    <>
      {/* 1st Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">1st Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {firstYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 2nd Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">2nd Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {secondYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 3rd Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">3rd Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {thirdYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* 4th Year Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">4th Year</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {fourthYearProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* In Progress Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-streamlit-text mb-6">🚧 In Progress</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {inProgressProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Project Timeline - Gantt Chart (hidden on mobile and tablet, visible on desktop) */}
      <div className="mt-16 hidden lg:block">
        <h3 className="text-3xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
          📊 Project Timeline
        </h3>
        <GanttChart />
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
    inProgress?: boolean
    image?: string
    date?: string
    year?: string
  }>
}) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-streamlit-text mb-4">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

// Project card component
function ProjectCard({
  project
}: {
  project: {
    name: string
    description: string
    link: string
    inProgress?: boolean
    image?: string
    date?: string
    year?: string
  }
}) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-streamlit-secondary rounded-xl p-4 border border-streamlit-border hover:shadow-lg transition-shadow group flex gap-4"
    >
      {project.image && (
        <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-semibold text-streamlit-text group-hover:text-blue-600 mb-2">
          {project.name}
          {project.inProgress && (
            <span className="ml-2 text-sm text-orange-600">🚧 In Progress</span>
          )}
        </h4>
        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
        {(project.date || project.year) && (
          <div className="flex gap-3 text-xs text-gray-500">
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
      <h3 className="text-xl font-bold text-streamlit-text mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3 items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-streamlit-secondary px-4 py-2 rounded-lg border border-streamlit-border"
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
            <span className="text-streamlit-text">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Gantt Chart Component
function GanttChart() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  // Category colors
  const categoryColors: Record<string, string> = {
    "Generative AI": "#8B5CF6",
    "Neural Networks": "#3B82F6",
    "Reinforcement Learning": "#EF4444",
    "Speech Recognition": "#10B981",
    "Robotics": "#06B6D4",
    "Games": "#F59E0B",
    "Physics Simulation": "#EC4899",
    "n8n Automation": "#6366F1",
    "Data Analysis": "#14B8A6"
  }

  // All projects with dates and categories (ordered from oldest to newest for display)
  const allProjects = [
    // 1st - 2nd year
    { name: "Gravity Simulation 2D", start: "2023-06-06", end: "2023-08-30", category: "Physics Simulation" },
    { name: "Neural Networks Library", start: "2023-07-01", end: "2024-05-31", category: "Neural Networks" },
    { name: "Q-Learning Pathfinding", start: "2023-09-10", end: "2023-09-20", category: "Reinforcement Learning" },

    // 3rd year
    { name: "Snake Game", start: "2024-07-13", end: "2025-09-20", category: "Games" },
    { name: "Snake AI - DQL", start: "2024-07-13", end: "2026-01-08", category: "Reinforcement Learning", inProgress: true },
    { name: "Snake AI - GA", start: "2024-08-04", end: "2024-10-14", category: "Reinforcement Learning" },

    // 4th year
    { name: "Unity AI - Movement", start: "2025-01-01", end: "2025-12-31", category: "Reinforcement Learning" },
    { name: "Unity AI - Greedy", start: "2025-01-01", end: "2025-12-31", category: "Reinforcement Learning" },
    { name: "Unity AI - Driving", start: "2025-01-01", end: "2025-12-31", category: "Reinforcement Learning" },
    { name: "Driving Game", start: "2025-01-25", end: "2025-09-25", category: "Games" },
    { name: "Driving AI - DQL", start: "2025-01-04", end: "2025-09-09", category: "Reinforcement Learning" },
    { name: "Driving AI - GA", start: "2025-01-09", end: "2025-09-28", category: "Reinforcement Learning" },
    { name: "Attraction/Repulsion", start: "2025-01-23", end: "2025-09-29", category: "Physics Simulation" },
    { name: "Image Generator - GAN", start: "2025-02-22", end: "2025-09-24", category: "Generative AI" },
    { name: "ASR", start: "2025-04-12", end: "2025-06-11", category: "Speech Recognition" },
    { name: "Human Sandbox", start: "2025-06-01", end: "2025-09-30", category: "Games" },
    { name: "WhatsApp AI", start: "2025-07-11", end: "2025-07-24", category: "n8n Automation" },
    { name: "Smart Mail Labeling", start: "2025-07-16", end: "2025-07-26", category: "n8n Automation" },
    { name: "Bot controlled by ChatBot RAG", start: "2025-07-22", end: "2025-10-11", category: "Robotics" },
    { name: "Language Models", start: "2025-09-27", end: "2025-12-24", category: "Generative AI" },
    { name: "RAG - PDF ChatBot", start: "2025-10-11", end: "2025-10-12", category: "Generative AI" },
    { name: "Walking AI - GA", start: "2025-10-12", end: "2026-01-08", category: "Reinforcement Learning", inProgress: true },
    { name: "StarCraft 2 AI", start: "2025-10-22", end: "2026-01-08", category: "Reinforcement Learning", inProgress: true },
    { name: "ISS Analysis", start: "2025-11-12", end: "2025-12-21", category: "Data Analysis" },
    { name: "CLIP Embedding Tools", start: "2025-12-25", end: "2025-12-27", category: "Generative AI" },
    { name: "Snake AI - PPO", start: "2025-12-27", end: "2026-01-08", category: "Reinforcement Learning", inProgress: true }
  ]

  // Sort projects by start date (oldest first for display from top to bottom)
  const projects = [...allProjects].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  // Calculate timeline bounds
  const startDate = new Date("2023-06-01")
  const endDate = new Date("2026-01-31")
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  // Function to calculate position and width
  const getBarStyle = (start: string, end: string) => {
    const projectStart = new Date(start)
    const projectEnd = new Date(end)
    const daysFromStart = Math.ceil((projectStart.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const projectDuration = Math.ceil((projectEnd.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24))

    const left = (daysFromStart / totalDays) * 100
    const width = (projectDuration / totalDays) * 100

    return { left: `${left}%`, width: `${Math.max(width, 0.5)}%` }
  }

  // Generate quarterly markers
  const timelineMarkers = []
  let currentDate = new Date("2023-06-01")
  while (currentDate <= endDate) {
    const position = ((currentDate.getTime() - startDate.getTime()) / (totalDays * 24 * 60 * 60 * 1000)) * 100
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    // Show year at the beginning of each year
    if (month === 0 || (year === 2023 && month === 6)) {
      timelineMarkers.push({
        position,
        label: year.toString(),
        isYear: true
      })
    } else if (month % 3 === 0) {
      // Show quarter markers (Q1, Q2, Q3, Q4)
      const quarter = Math.floor(month / 3) + 1
      timelineMarkers.push({
        position,
        label: `Q${quarter}`,
        isYear: false
      })
    }

    currentDate.setMonth(currentDate.getMonth() + 1)
  }

  // Group projects by category for legend
  const categories = Array.from(new Set(projects.map(p => p.category)))

  return (
    <div className="bg-streamlit-secondary rounded-xl p-6 border border-streamlit-border">
      {/* Gantt chart main container */}
      <div className="grid grid-cols-[auto_1fr] gap-4 mb-6">
        {/* Left column: Project names */}
        <div className="bg-white rounded-lg p-4 border border-streamlit-border">
          <div className="h-12 mb-4 flex items-end pb-1 font-semibold text-sm text-streamlit-text border-b-2 border-gray-300">
            Projects
          </div>
          <div className="space-y-1">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 h-8 rounded px-2 transition-colors ${
                  hoveredIndex === idx ? 'bg-blue-50' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="w-3 h-3 rounded flex-shrink-0"
                  style={{ backgroundColor: categoryColors[project.category] }}
                />
                <span className="text-xs text-streamlit-text whitespace-nowrap">
                  {project.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Timeline */}
        <div className="bg-white rounded-lg p-4 border border-streamlit-border overflow-x-auto">
          {/* Timeline header with precise markers */}
          <div className="mb-4 relative h-12 border-b-2 border-gray-300">
            {/* Vertical grid lines */}
            {timelineMarkers.map((marker, idx) => (
              <div
                key={idx}
                className="absolute top-0 bottom-0 border-l border-gray-200"
                style={{ left: `${marker.position}%` }}
              />
            ))}

            {/* Timeline labels */}
            {timelineMarkers.map((marker, idx) => (
              <div
                key={idx}
                className={`absolute bottom-1 ${marker.isYear ? 'font-bold text-sm' : 'text-xs text-gray-600'}`}
                style={{
                  left: `${marker.position}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                {marker.label}
              </div>
            ))}
          </div>

          {/* Gantt bars */}
          <div className="space-y-1 relative">
            {/* Vertical grid lines extending through bars */}
            {timelineMarkers.filter(m => m.isYear).map((marker, idx) => (
              <div
                key={idx}
                className="absolute top-0 bottom-0 border-l border-gray-100 pointer-events-none"
                style={{ left: `${marker.position}%` }}
              />
            ))}

            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative h-8 z-10"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project bar */}
                <div
                  className={`absolute h-6 rounded transition-all cursor-pointer flex items-center justify-end pr-1 ${
                    hoveredIndex === idx ? 'h-7 -translate-y-0.5 shadow-lg ring-2 ring-offset-1' : ''
                  }`}
                  style={{
                    ...getBarStyle(project.start, project.end),
                    backgroundColor: categoryColors[project.category],
                    opacity: hoveredIndex === idx ? 1 : (project.inProgress ? 0.85 : 0.7)
                  }}
                  title={`${project.name} (${project.start} - ${project.end})`}
                >
                  {/* Project name inside bar (visible on hover) */}
                  <div className={`absolute left-0 right-0 px-2 text-xs text-white font-semibold truncate leading-6 transition-opacity ${
                    hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.name}
                  </div>

                  {/* In progress indicator - three dots */}
                  {project.inProgress && (
                    <span className="text-white text-xs font-bold">...</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend at the bottom */}
      <div className="bg-white rounded-lg p-4 border border-streamlit-border">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <div key={category} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: categoryColors[category] }}
              />
              <span className="text-sm text-streamlit-text">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
