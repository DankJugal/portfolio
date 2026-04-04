const skillCategories = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    category: 'ML & Data Science',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'YOLOv11', 'OpenCV', 'Pandas', 'NumPy']
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Node.js', 'Django', 'FastAPI', 'Express.js']
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB']
  },
  {
    category: 'IoT & Embedded',
    skills: ['ESP32', 'Arduino', 'MQTT', 'Embedded Linux', 'Kernel Development']
  },
  {
    category: 'Cloud & Deployment',
    skills: ['Google Cloud Platform', 'Docker']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'NPM', 'Postman']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xs text-zinc-600 uppercase tracking-wider font-mono border-b border-zinc-900 pb-3">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="text-sm text-zinc-400 font-light hover:text-zinc-200 transition-colors py-1 pl-3 border-l border-zinc-900 hover:border-zinc-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
