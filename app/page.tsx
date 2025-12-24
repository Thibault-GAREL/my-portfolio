import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-streamlit-bg">
      {/* Header */}
      <header className="border-b border-streamlit-border bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-streamlit-text">Thibault GAREL&apos;s Portfolio</h1>
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

            <p className="mb-6">
              I'm a maker in <a href="https://github.com/intelligenceLab-ECE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Intelligence Lab</a>!
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 mb-8">
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
                link: "https://github.com/Thibault-GAREL/Image_generator_GAN",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Image_generator_GAN/main/Img/Titre.png"
              },
              {
                name: "Language Models",
                description: "Bigram & Transformer Models implementation",
                link: "https://github.com/Thibault-GAREL/Language_Models",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Language_Models/main/img/Titre-GPT_from_scratch.png"
              },
              {
                name: "RAG - PDF ChatBot",
                description: "Retrieval Augmented Generation - A chatbot that reads PDFs",
                link: "https://github.com/Thibault-GAREL/RAG_pdf",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/RAG_pdf/main/Video/Gif-video.gif"
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
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Neural_Network_from_Scratch/main/Images/Gif-neural-network.gif"
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
                link: "https://github.com/Thibault-GAREL/AI_snake_genetic_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_snake_genetic_version/main/Images/score13.gif"
              },
              {
                name: "Driving AI - Genetic Algorithm",
                description: "Self-driving car using genetic algorithms",
                link: "https://github.com/Thibault-GAREL/AI_driving_genetic_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_genetic_version/main/Img/Driving_NEAT_gif.gif"
              },
              {
                name: "Walking AI - Genetic Algorithm",
                description: "AI learning to walk with complete physics engine (Box2D)",
                link: "https://github.com/Thibault-GAREL/test_box2D_pygame",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/test_box2D_pygame/main/img/logo.png"
              },
              {
                name: "Snake AI - Deep Q-Learning",
                description: "Snake game AI using DQN (in progress)",
                link: "https://github.com/Thibault-GAREL/AI_snake_DQN_version",
                inProgress: true,
                image: "https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
              },
              {
                name: "Driving AI - Deep Q-Learning",
                description: "Self-driving car using Deep Q-Learning",
                link: "https://github.com/Thibault-GAREL/AI_driving_DQN_version",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/AI_driving_DQN_version/main/Images/gif-driving.gif"
              },
              {
                name: "Q-Learning Pathfinding",
                description: "Q-Learning algorithm to find optimal paths",
                link: "https://github.com/Thibault-GAREL/Q-Learning",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Q-Learning/main/img/Gif-DQN.gif"
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
                link: "https://github.com/Thibault-GAREL/Speech_recognition",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Speech_recognition/main/logo.png"
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
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Bot_controlled_by_a_Chatbot_RAG/main/img/Gif-bot.gif"
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
                image: "https://raw.githubusercontent.com/Thibault-GAREL/snake_game/main/img/Snake-game.gif"
              },
              {
                name: "Driving Game",
                description: "Driving simulation for AI training",
                link: "https://github.com/Thibault-GAREL/driving_game",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/driving_game/main/img/Gif_driving_game.gif"
              },
              {
                name: "Human Sandbox",
                description: "Natural Selection Simulation Engine",
                link: "https://github.com/Thibault-GAREL/human_sandbox",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/human_sandbox/main/img/Gif-human-sandbox.gif"
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
                image: "https://raw.githubusercontent.com/Thibault-GAREL/gravity_simulation/main/img/Gif-gravity.gif"
              },
              {
                name: "Attraction/Repulsion Simulation",
                description: "Particle attraction and repulsion physics",
                link: "https://github.com/Thibault-GAREL/Attraction_repulsion",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/Attraction_repulsion/main/img/Gif-orbit.gif"
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
                image: "https://raw.githubusercontent.com/Thibault-GAREL/n8n_Whatsapp_LLM/main/img/img.png"
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
                link: "https://github.com/Thibault-GAREL/ISS_Analysis_Spark",
                image: "https://raw.githubusercontent.com/Thibault-GAREL/ISS_Analysis_Spark/master/Img/ISS-img.jpg"
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
            <div className="flex items-start gap-6 mb-4">
              <img
                src="https://www.defense.gouv.fr/sites/default/files/styles/homepage_medallion/public/cnd/Logo_CND_PA.png?itok=MRux1fZ_"
                alt="CND Logo"
                className="w-24 h-24 object-contain"
              />
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

                <p className="text-lg">
                  AI system to detect anomalies and breakdowns in French army logs
                </p>
              </div>
            </div>

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
              { name: "Pygame", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pygame_logo.svg", url: "https://www.pygame.org/" },
              { name: "Allegro", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Allegro-logo.svg", url: "https://liballeg.org/" },
              { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", url: "https://streamlit.io/" }
            ]}
          />

          <SkillCategory
            title="Other Tools"
            skills={[
              { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", url: "https://github.com/" },
              { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", url: "https://git-scm.com/" },
              { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
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
    image?: string
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
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
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
