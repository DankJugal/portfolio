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
    <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider font-mono mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xs text-zinc-600 uppercase tracking-wider font-mono">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-black border border-zinc-800 hover:border-zinc-700 rounded text-zinc-400 font-mono transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
