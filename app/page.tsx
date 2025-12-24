import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-streamlit-bg">
      {/* Header */}
      <header className="border-b border-streamlit-border bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-streamlit-text">Thibault GAREL</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-streamlit-text mb-6">
            Hi! My name is Thibault GAREL
          </h1>

          <div className="text-xl text-gray-700 mb-6 leading-relaxed">
            <p className="mb-4">
              I am currently in my 4th year at <strong>ECE</strong>, an engineering school,
              where I am pursuing a Major in <strong>Data & AI</strong>.
            </p>

            <p className="mb-4">
              Since 2022, I've been building personal projects mostly on <strong>AI</strong> 🤖.
            </p>

            <p className="mb-4 text-2xl font-semibold text-streamlit-accent">
              I'm looking for an <strong>internship</strong> in AI for 4 months starting <strong>April 13, 2026</strong>!
            </p>

            <p className="mb-6">
              I'm a maker in <a href="https://github.com/intelligenceLab-ECE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Intelligence Lab</a>!
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/thibaultgarel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://huggingface.co/Thibault-GAREL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              🤗 Hugging Face
            </a>
            <a
              href="mailto:thibault.garel@edu.ece.fr"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              📬 Contact
            </a>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
            ✨ Featured Projects
          </h2>

          {/* Generative AI */}
          <ProjectCategory
            title="Generative AI"
            projects={[
              {
                name: "Image Generator - GAN",
                description: "Generative Adversarial Network for image generation",
                link: "https://github.com/Thibault-GAREL/Image_generator_GAN"
              },
              {
                name: "Language Models",
                description: "Bigram & Transformer Models implementation",
                link: "https://github.com/Thibault-GAREL/Language_Models"
              },
              {
                name: "RAG - PDF ChatBot",
                description: "Retrieval Augmented Generation - A chatbot that reads PDFs",
                link: "https://github.com/Thibault-GAREL/RAG_pdf"
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
                link: "https://github.com/Thibault-GAREL/Neural_Network_from_Scratch"
              }
            ]}
          />

          {/* Reinforcement Learning */}
          <ProjectCategory
            title="Reinforcement Learning"
            projects={[
              {
                name: "Snake AI - Genetic Algorithm",
                description: "Snake game AI using genetic algorithms",
                link: "https://github.com/Thibault-GAREL/AI_snake_genetic_version"
              },
              {
                name: "Driving AI - Genetic Algorithm",
                description: "Self-driving car using genetic algorithms",
                link: "https://github.com/Thibault-GAREL/AI_driving_genetic_version"
              },
              {
                name: "Walking AI - Genetic Algorithm",
                description: "AI learning to walk with complete physics engine (Box2D)",
                link: "https://github.com/Thibault-GAREL/test_box2D_pygame"
              },
              {
                name: "Snake AI - Deep Q-Learning",
                description: "Snake game AI using DQN (in progress)",
                link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",
                inProgress: true
              },
              {
                name: "Driving AI - Deep Q-Learning",
                description: "Self-driving car using Deep Q-Learning",
                link: "https://github.com/Thibault-GAREL/AI_driving_DQN_version"
              },
              {
                name: "Q-Learning Pathfinding",
                description: "Q-Learning algorithm to find optimal paths",
                link: "https://github.com/Thibault-GAREL/Q-Learning"
              }
            ]}
          />

          {/* Speech Recognition */}
          <ProjectCategory
            title="Speech Recognition"
            projects={[
              {
                name: "ASR - Automatic Speech Recognition",
                description: "School project on speech recognition",
                link: "https://github.com/Thibault-GAREL/Speech_recognition"
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
                link: "https://github.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG"
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
                link: "https://github.com/Thibault-GAREL/snake_game"
              },
              {
                name: "Driving Game",
                description: "Driving simulation for AI training",
                link: "https://github.com/Thibault-GAREL/driving_game"
              },
              {
                name: "Human Sandbox",
                description: "Natural Selection Simulation Engine",
                link: "https://github.com/Thibault-GAREL/human_sandbox"
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
                link: "https://github.com/Thibault-GAREL/gravity_simulation"
              },
              {
                name: "Attraction/Repulsion Simulation",
                description: "Particle attraction and repulsion physics",
                link: "https://github.com/Thibault-GAREL/Attraction_repulsion"
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
                link: "https://github.com/Thibault-GAREL/n8n_Whatsapp_LLM"
              },
              {
                name: "Smart Mail Labeling",
                description: "Automatic and intelligent email sorting with labeling",
                link: "https://github.com/Thibault-GAREL/"
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
                link: "https://github.com/Thibault-GAREL/ISS_Analysis_Spark"
              }
            ]}
          />
        </section>

        {/* Group Projects */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-streamlit-text mb-8 pb-2 border-b-2 border-streamlit-border">
            👥 Projects in Group
          </h2>

          <div className="bg-streamlit-secondary rounded-xl p-6 mb-6 border border-streamlit-border">
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

            <p className="text-lg mb-4">
              AI system to detect anomalies and breakdowns in French army logs
            </p>

            <div className="mb-4">
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

            <div className="flex gap-4">
              <a
                href="https://github.com/Rqbln/dirisi25-hackathon-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Frontend Code →
              </a>
              <a
                href="https://github.com/Rqbln/dirisi25-hackathon-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Backend Code →
              </a>
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
            skills={["Python", "C", "C++", "SQL", "Java"]}
          />

          <SkillCategory
            title="Web"
            skills={["HTML5", "CSS3", "PHP", "JavaScript"]}
          />

          <SkillCategory
            title="Libraries"
            skills={["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas"]}
          />

          <SkillCategory
            title="Visualization"
            skills={["Matplotlib", "Power BI", "Pygame", "Allegro"]}
          />

          <SkillCategory
            title="Other Tools"
            skills={["GitHub", "Git", "Excel", "Ollama", "n8n", "Raspberry Pi", "CUDA", "Arduino", "ESP32"]}
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
  }>
}) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-streamlit-text mb-4">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-streamlit-secondary rounded-xl p-5 border border-streamlit-border hover:shadow-lg transition-shadow group"
          >
            <h4 className="text-lg font-semibold text-streamlit-text group-hover:text-blue-600 mb-2">
              {project.name}
              {project.inProgress && (
                <span className="ml-2 text-sm text-orange-600">🚧 In Progress</span>
              )}
            </h4>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

// Component for skills
function SkillCategory({
  title,
  skills
}: {
  title: string
  skills: string[]
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-streamlit-text mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-streamlit-secondary px-4 py-2 rounded-lg border border-streamlit-border text-streamlit-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
