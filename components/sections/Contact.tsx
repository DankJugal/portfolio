import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const achievements = [
  'Top 50 among 1500 teams at ODOO Hackathon 2025',
  'FreeCodeCamp Backend Development and Data Science certifications',
  'MYSY Fellowship recipient, Government of Gujarat',
  'GUJCET 2022: 99.40 percentile | JEE Mains 2022: AIR 12,909'
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
                <a
                  href="tel:+918866172036"
                  className="flex items-center gap-4 text-base text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-light">+91-8866172036</span>
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

          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-6">Key Achievements</p>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-base text-zinc-400 leading-relaxed flex gap-4 group">
                  <span className="text-zinc-800 group-hover:text-zinc-600 transition-colors mt-1.5 min-w-fit">→</span>
                  <span className="font-light">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
          <p className="text-xs text-zinc-600 font-mono">
            © 2025 Jugal Patel. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
