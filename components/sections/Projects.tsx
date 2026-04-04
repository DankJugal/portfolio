const projects = [
  {
    title: 'AtmoSync',
    subtitle: 'Real-Time Environmental Monitoring System',
    description: 'Wi-Fi IoT sensor using ESP32 and SHT31 measuring temperature and humidity, displaying live data via 8×32 LED matrix and logging to MySQL through Node.js backend.',
    tech: ['ESP32', 'SHT31', 'Node.js', 'MySQL', 'PHP'],
    stats: '95+ units in progress at IIT Gandhinagar',
    link: '#'
  },
  {
    title: 'HubVolt',
    subtitle: 'Wi-Fi Controlled USB Hub Power Manager',
    description: 'Remote-controlled USB power hub using ESP32, 2N2222 transistors, and LM2596 buck converters with Node.js backend and PHP dashboard for port-level power toggling over Wi-Fi.',
    tech: ['ESP32', 'Node.js', 'MySQL', 'PHP', 'LM2596'],
    stats: '20+ units at IIT Bombay Nanofabrication Facility',
    link: '#'
  },
  {
    title: 'Job Recommendation API',
    subtitle: 'ML-Powered Resume Matching System',
    description: 'Scalable FastAPI backend matching resumes with job listings using fine-tuned MiniLM embeddings and Google SerpAPI for real-time fetching.',
    tech: ['Python', 'FastAPI', 'Transformers', 'Docker', 'SerpAPI'],
    stats: '10+ Docker Hub pulls',
    link: '#'
  },
  {
    title: 'Cricket Weight Transfer Analysis',
    subtitle: 'Computer Vision for Sports Biomechanics',
    description: 'Computer vision system using YOLOv11 pose detection to analyze cricket batting mechanics with algorithms for center of mass calculation and real-time feedback.',
    tech: ['Python', 'YOLOv11', 'OpenCV', 'NumPy'],
    stats: 'Real-time biomechanical analysis',
    link: '#'
  },
  {
    title: 'Envor',
    subtitle: 'NPM Package for Environment Variables',
    description: 'Published NPM package for secure environment variable handling in Node.js applications, demonstrating community adoption and utility.',
    tech: ['Node.js', 'TypeScript', 'NPM'],
    stats: '461+ downloads',
    link: '#'
  },
  {
    title: 'ESP32 Redis Client Library',
    subtitle: 'Redis Client for Embedded Systems',
    description: 'Comprehensive Redis client for ESP32 featuring local NVS storage, TCP communication, and full RESP protocol support with multi-client handling and WiFi connectivity.',
    tech: ['ESP32', 'Arduino', 'Redis', 'C++'],
    stats: 'Full RESP protocol support',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider font-mono mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-zinc-900 hover:border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50 rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-zinc-800 rounded-lg group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-zinc-800/20 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-1">{project.title}</h3>
                  <p className="text-xs text-zinc-500 font-mono">{project.subtitle}</p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-black border border-zinc-800 rounded text-zinc-500 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-zinc-600 font-mono">{project.stats}</span>
                  <a
                    href={project.link}
                    className="text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
