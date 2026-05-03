type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  stats: string;
  link: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'GSoC 2026 — Debusine: Debuginfod Server',
    subtitle: 'Google Summer of Code 2026 · Debian / Freexian',
    description:
      "Selected for GSoC 2026 to add debuginfod server support to Debusine, a CI platform used by Debian developers to build and host package repositories. The project makes GDB automatically fetch debug symbols on crashes — so developers get useful stack traces without manually hunting for the right package. Before writing the proposal, I built a working prototype that extracts build-IDs from real Ubuntu debug packages and serves them over HTTP. Mentored by Colin Watson and Stefano Rivera (Freexian / Debian core team).",
    tech: ['Python', 'Django', 'Debian', 'Open Source', 'GSoC 2026'],
    stats: 'Selected out of thousands of applicants globally',
    link: 'https://summerofcode.withgoogle.com/programs/2026/projects/Qx3OtgKl',
    image: '/gsoc.png',
    featured: true,
  },
  {
    title: 'AtmoSync',
    subtitle: 'Real-Time Environmental Monitoring System',
    description:
      'Wi-Fi IoT sensor using ESP32 and SHT31 measuring temperature and humidity, with live data on an 8×32 LED matrix and logging to MySQL through a Node.js backend. Built during SRIP internship under Prof. Rajat Moona and Prof. Dinesh Sharma. Deployed at IIT Bombay Nanofabrication Facility, with 95+ units in progress at IIT Gandhinagar.',
    tech: ['ESP32', 'SHT31', 'Node.js', 'MySQL', 'PHP'],
    stats: '5+ units deployed · 95+ in progress',
    link: '#',
    image: '/atmosync.jpeg',
  },
  {
    title: 'HubVolt',
    subtitle: 'Wi-Fi Controlled USB Hub Power Manager',
    description:
      'Remote-controlled USB power hub built with ESP32, 2N2222 transistors, and LM2596 buck converters. Port-level power toggling over Wi-Fi via a Node.js backend and PHP dashboard. Built during SRIP internship under Prof. Rajat Moona and Prof. Dinesh Sharma. Installed at IIT Bombay Nanofabrication Facility.',
    tech: ['ESP32', 'Node.js', 'MySQL', 'PHP', 'LM2596'],
    stats: '20+ units deployed at IIT Bombay',
    link: '#',
    image: '/hubvolt.jpeg',
  },
  {
    title: 'Job Recommendation API',
    subtitle: 'ML-Powered Resume Matching System',
    description:
      'FastAPI backend that matches resumes to job listings using fine-tuned MiniLM-L6-v2 embeddings and real-time job fetching via Google SerpAPI. Containerized with Docker for portable deployment.',
    tech: ['Python', 'FastAPI', 'Transformers', 'Docker', 'SerpAPI'],
    stats: '120+ Docker Hub pulls',
    link: '#',
    image: '/image.png',
  },
  {
    title: 'Cricket Batting Analysis',
    subtitle: 'Computer Vision for Sports Biomechanics',
    description:
      'Computer vision pipeline using YOLOv11 pose detection to analyze cricket batting mechanics in real time — tracking weight transfer, swing velocity, and center of mass with frame-by-frame biomechanical feedback.',
    tech: ['Python', 'YOLOv11', 'OpenCV', 'NumPy'],
    stats: 'Real-time biomechanical feedback',
    link: '#',
    image: '/image copy.png',
  },
  {
    title: 'Envor',
    subtitle: 'NPM Package for Environment Variable Management',
    description:
      'Published NPM package for secure, structured environment variable handling in Node.js projects. Adopted by the community with 460+ downloads.',
    tech: ['Node.js', 'TypeScript', 'NPM'],
    stats: '461+ downloads',
    link: '#',
    image: '/image copy 2.png',
  },
  {
    title: 'ESP32 Redis Client Library',
    subtitle: 'Redis Client for Embedded Systems',
    description:
      'Full-featured Redis client for ESP32 with TCP communication, complete RESP protocol support (Strings, Lists, Hashes), NVS persistent storage, and Wi-Fi connectivity.',
    tech: ['ESP32', 'Arduino', 'Redis', 'C++'],
    stats: 'Full RESP protocol support',
    link: '#',
    image: '/IMG_5223.JPG',
  },
];

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="lg:col-span-2 group border border-zinc-700 hover:border-zinc-500 bg-zinc-950 hover:bg-zinc-900/60 rounded-lg overflow-hidden transition-all duration-300">
      {/* Image area */}
      <div className="relative h-48 overflow-hidden border-b border-zinc-800 group-hover:border-zinc-700 transition-colors">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* subtle dark overlay so badge stays readable */}
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          /* Decorative fallback if no image */
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gsocGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3f3f46" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="800" height="200" fill="url(#gsocGrid)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 border border-zinc-700 group-hover:border-zinc-500 rounded-full flex items-center justify-center bg-black/60 group-hover:scale-105 transition-all duration-300">
                  <span className="text-xl font-light text-zinc-300">Deb</span>
                </div>
                <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Debian</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-10 bg-zinc-800" />
                <span className="text-xs font-mono text-zinc-700">×</span>
                <div className="w-px h-10 bg-zinc-800" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 border border-zinc-700 group-hover:border-zinc-500 rounded-full flex items-center justify-center bg-black/60 group-hover:scale-105 transition-all duration-300">
                  <span className="text-xl font-light text-zinc-300">JP</span>
                </div>
                <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Jugal Patel</span>
              </div>
            </div>
          </div>
        )}

        {/* GSoC badge — always on top */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-mono text-zinc-300 border border-zinc-600 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
            GSoC 2026
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col md:flex-row gap-6 md:items-end justify-between">
        <div className="space-y-3 flex-1">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-1">{project.title}</h3>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{project.subtitle}</p>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-black border border-zinc-700 text-zinc-300 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end shrink-0">
          <span className="text-xs text-zinc-600 font-mono">{project.stats}</span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-300 hover:text-zinc-100 font-mono border border-zinc-700 hover:border-zinc-500 px-4 py-2 transition-all inline-block text-center"
          >
            View on GSoC →
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col border border-zinc-900 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900/50 rounded-lg overflow-hidden transition-all duration-300">
      <div className="relative aspect-video bg-zinc-900 overflow-hidden border-b border-zinc-900 group-hover:border-zinc-800 transition-colors">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
            <span className="text-4xl font-light text-zinc-700 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col space-y-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-2">{project.title}</h3>
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-wider">{project.subtitle}</p>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-black border border-zinc-800 text-zinc-400 font-mono hover:text-zinc-200 hover:border-zinc-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-zinc-900">
          <span className="text-xs text-zinc-600 font-mono">{project.stats}</span>
          <a
            href={project.link}
            className="text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100">Notable Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <FeaturedProjectCard key={`featured-${index}`} project={project} />
          ))}
          {rest.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
