import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const achievements = [
  {
    label: 'Google Summer of Code 2026',
    detail: 'Selected contributor — open source project under Google',
    link: 'https://summerofcode.withgoogle.com/programs/2026/projects/Qx3OtgKl',
    highlight: true,
  },
  {
    label: 'Top 50 at ODOO Hackathon 2025',
    detail: 'Among 1500+ competing teams nationwide',
    link: null,
    highlight: false,
  }
];

const scholarships = [
  {
    label: 'MYSY Fellowship',
    detail: 'Merit-cum-Means Scholarship, Government of Gujarat',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono">Direct Contact</p>
              <div className="space-y-3">
                <a
                  href="mailto:jugalp6103@gmail.com"
                  className="flex items-center gap-4 text-base text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">jugalp6103@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono">Social Links</p>
              <div className="space-y-3">
                <a
                  href="https://github.com/jugalp6103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">GitHub Profile</span>
                </a>
                <a
                  href="https://linkedin.com/in/jugalpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-6">Achievements</p>
              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <li key={index} className="group">
                    {item.highlight ? (
                      <a
                        href={item.link!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 items-start border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:bg-zinc-900/60 rounded-lg p-4 transition-all duration-200"
                      >
                        <div className="mt-0.5 min-w-fit">
                          <div className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-zinc-200 transition-colors" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-zinc-200 font-medium leading-snug">{item.label}</p>
                          <p className="text-xs text-zinc-500 font-light">{item.detail}</p>
                          <p className="text-xs text-zinc-600 font-mono mt-1">View Project →</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex gap-4 items-start group">
                        <span className="text-zinc-800 group-hover:text-zinc-600 transition-colors mt-1.5 min-w-fit">→</span>
                        <div className="space-y-0.5">
                          <p className="text-sm text-zinc-300 font-light leading-snug">{item.label}</p>
                          <p className="text-xs text-zinc-600 font-light">{item.detail}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-6">Scholarships</p>
              <ul className="space-y-4">
                {scholarships.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start group">
                    <span className="text-zinc-800 group-hover:text-zinc-600 transition-colors mt-1.5 min-w-fit">→</span>
                    <div className="space-y-0.5">
                      <p className="text-sm text-zinc-300 font-light leading-snug">{item.label}</p>
                      <p className="text-xs text-zinc-600 font-light">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
