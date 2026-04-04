import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const achievements = [
  'Top 50 among 1500 teams at ODOO Hackathon 2025',
  'FreeCodeCamp Backend Development and Data Science certifications',
  'MYSY Fellowship recipient, Government of Gujarat',
  'GUJCET 2022: 99.40 percentile | JEE Mains 2022: AIR 12,909'
];

export default function Contact() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider font-mono mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-4">Contact</p>
              <div className="space-y-3">
                <a
                  href="mailto:jugalp6103@gmail.com"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>jugalp6103@gmail.com</span>
                </a>
                <a
                  href="tel:+918866172036"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91-8866172036</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-4">Social</p>
              <div className="space-y-3">
                <a
                  href="https://github.com/jugalp6103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/jugalpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-4">Achievements</p>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                  <span className="text-zinc-700">•</span>
                  <span>{achievement}</span>
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
