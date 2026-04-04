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
    <section className="py-24 px-4 md:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider font-mono mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-zinc-800 pl-6 pb-8 relative">
              <div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[5px] top-1.5" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">{exp.title}</h3>
                  <p className="text-sm text-zinc-400">{exp.company}</p>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-zinc-500 font-mono">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500 font-mono">
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
