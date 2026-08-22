export type Skill = {
  name: string
  icon?: string
  url?: string
}

export type SkillGroup = {
  title: string
  skills: Skill[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', url: 'https://www.python.org/' },
      { name: 'C', icon: 'https://cdn.simpleicons.org/c/00599C', url: 'https://isocpp.org/' },
      { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', url: 'https://isocpp.org/' },
      { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', url: 'https://www.mysql.com/' },
      { name: 'Java', icon: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', url: 'https://www.java.com/' },
      { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25', url: 'https://www.gnu.org/software/bash/' }
    ]
  },
  {
    title: 'Web',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', url: 'https://www.php.net/' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', url: 'https://nextjs.org/' },
      { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000', url: 'https://vercel.com/' }
    ]
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C', url: 'https://pytorch.org/' },
      { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00', url: 'https://www.tensorflow.org/' },
      { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', url: 'https://scikit-learn.org/' },
      { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243', url: 'https://numpy.org/' },
      { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458', url: 'https://pandas.pydata.org/' },
      { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C', url: 'https://www.langchain.com/' }
    ]
  },
  {
    title: 'Visualization',
    skills: [
      { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', url: 'https://matplotlib.org/' },
      { name: 'Excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png', url: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', url: 'https://powerbi.microsoft.com/' },
      { name: 'Streamlit', icon: 'https://streamlit.io/images/brand/streamlit-mark-color.png', url: 'https://streamlit.io/' },
      { name: 'Pygame', icon: 'https://www.pygame.org/docs/_static/pygame_logo.svg', url: 'https://www.pygame.org/' }
    ]
  },
  {
    title: 'Dev Tools',
    skills: [
      { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', url: 'https://code.visualstudio.com/' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717', url: 'https://github.com/' },
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', url: 'https://git-scm.com/' },
      { name: 'Ollama', icon: 'https://avatars.githubusercontent.com/u/151674099', url: 'https://ollama.com/' },
      { name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/EA4C89', url: 'https://n8n.io/' },
      { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/F37626', url: 'https://jupyter.org/' }
    ]
  },
  {
    title: 'Hardware',
    skills: [
      { name: 'CUDA', icon: 'https://cdn.simpleicons.org/nvidia/76B900', url: 'https://developer.nvidia.com/cuda-zone' },
      { name: 'Raspberry Pi', icon: 'https://cdn.simpleicons.org/raspberrypi/C51A4A', url: 'https://www.raspberrypi.com/' },
      { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/00979D', url: 'https://www.arduino.cc/' },
      { name: 'ESP32', icon: 'https://cdn.simpleicons.org/espressif/000000', url: 'https://www.espressif.com/en/products/socs/esp32' },
      { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624', url: 'https://www.linux.org/' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', url: 'https://www.docker.com/' }
    ]
  }
]
