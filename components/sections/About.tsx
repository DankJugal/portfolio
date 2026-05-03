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
              Final-year CS student at IIIT Surat with a 9.12 CGPA. I started programming in my first semester building a game with PyGame, and over time my curiosity moved down the stack — from web apps to embedded firmware to Linux kernel modules.
            </p>

            <p>
              Most recently, I was selected for Google Summer of Code 2026 with Debian, where I'm adding debuginfod server support to Debusine — a CI platform  used by Debian developers to host and manage package repositories. Before writing the proposal, I built a working prototype from scratch to make sure I actually understood the problem.
            </p>

            <p>
              Outside of that, I've deployed IoT monitoring hardware at IIT Bombay and IIT Gandhinagar under the guidance of Prof. Rajat Moona and Prof. Dinesh Sharma, published an NPM package with 460+ downloads, and led the Modern Automation and Robotics Club at my college.
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
                <li>GSoC 2026 — Selected Contributor, Debian</li>
                <li>Top 50 at ODOO Hackathon 2025</li>
                <li>MYSY Fellowship, Gov. of Gujarat</li>
              </ul>
            </div>

            <div className="space-y-2 border-l border-zinc-800 pl-6">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Previous Role</p>
              <h3 className="text-lg text-zinc-100">Club Lead</h3>
              <p className="text-sm text-zinc-400">Modern Automation & Robotics Club, IIIT Surat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
