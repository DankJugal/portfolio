export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-100">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-zinc-400 leading-relaxed">
            <p className="text-lg text-zinc-300 font-light">
              Third-year Computer Science student at IIIT Surat specializing in full-stack development, IoT systems, and machine learning applications.
            </p>

            <p>
              My experience spans developing production-grade IoT environmental monitoring systems deployed across IIT Bombay and IIT Gandhinagar, creating machine learning-powered recommendation systems, and building computer vision solutions for biomechanical analysis.
            </p>

            <p>
              I work across the entire stack: embedded systems (ESP32, Arduino), full-stack web development (React, Node.js, Django, FastAPI), kernel-level programming, and cloud infrastructure. Currently leading the Modern Automation and Robotics Club while contributing to research and development initiatives.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Education</p>
              <h3 className="text-lg text-zinc-100">IIIT Surat</h3>
              <p className="text-sm text-zinc-400">BTech in Computer Science & Engineering</p>
              <p className="text-xs text-zinc-500">CGPA: 9.12 • 2022 - 2026</p>
            </div>

            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Recognition</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>Top 50 at ODOO Hackathon 2025</li>
                <li>MYSY Fellowship, Gov. of Gujarat</li>
                <li>JEE Mains AIR 12,909</li>
              </ul>
            </div>

            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Current Role</p>
              <h3 className="text-lg text-zinc-100">Club Lead</h3>
              <p className="text-sm text-zinc-400">Modern Automation & Robotics Club, IIIT Surat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
