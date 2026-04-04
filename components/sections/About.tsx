export default function About() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-zinc-500 uppercase tracking-wider font-mono mb-8">About</h2>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p className="text-lg md:text-xl text-zinc-300">
            Third-year Computer Science student at Indian Institute of Information Technology, Surat with a strong focus on building practical solutions at the intersection of hardware and software.
          </p>

          <p>
            My work spans from developing IoT environmental monitoring systems deployed at IIT Bombay and IIT Gandhinagar, to creating machine learning-powered job recommendation APIs and computer vision systems for sports analytics. I specialize in full-stack development with experience in React, Node.js, Django, and FastAPI.
          </p>

          <p>
            Beyond development, I work extensively with embedded systems (ESP32, Arduino), kernel-level programming, and cloud infrastructure. Currently leading the Modern Automation and Robotics Club while contributing to multiple research and development projects.
          </p>
        </div>
      </div>
    </section>
  );
}
