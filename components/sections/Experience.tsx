const experiences = [
  {
    title: 'Summer Intern',
    company: 'SRIP IIT Gandhinagar',
    location: 'Gandhinagar, India',
    period: 'May 2025 – July 2025',
    description: 'Developed AtmoSync (Wi-Fi environmental monitor) and HubVolt (USB hub power controller) using microcontrollers and sensors, Node.js backend, MySQL, and PHP dashboard for remote monitoring and control.',
    tags: ['ESP32', 'Node.js', 'MySQL', 'PHP', 'IoT']
  },
  {
    title: 'Frontend Developer',
    company: 'IIIT Surat Website Development',
    location: 'Surat, India',
    period: 'July 2024 – August 2025',
    description: 'Migrated legacy PHP system to React + Django stack, deployed on ERNET server using Apache, and added 10+ new pages with upgraded MySQL schema for departments and faculty data.',
    tags: ['React', 'Django', 'Apache', 'MySQL']
  },
  {
    title: 'Junior Intern',
    company: 'Insource IT',
    location: 'Surat, India',
    period: 'June 2024 – July 2024',
    description: 'Made self-ordering kiosk system in Delphi Pascal and connected it with ESP32-based hardware payment box with SIM module for secure transaction processing.',
    tags: ['Delphi', 'ESP32', 'Hardware Integration']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l border-zinc-800 pl-8 pb-8 relative group">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-1.5 top-2 group-hover:bg-zinc-400 transition-colors" />

              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-light text-zinc-100">{exp.title}</h3>
                  <p className="text-base text-zinc-400">{exp.company}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-mono">
                  <span>{exp.period}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-base text-zinc-400 leading-relaxed max-w-3xl">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-black border border-zinc-800 text-zinc-400 font-mono hover:border-zinc-700 hover:text-zinc-300 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
