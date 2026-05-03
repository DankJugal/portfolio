'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Developer & Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-zinc-100 mb-6 leading-tight">
              Jugal Patel
            </h1>
            <p className="text-base md:text-lg text-zinc-400 mb-8 leading-relaxed max-w-lg">
              Final-year Computer Science student at IIIT Surat.
GSoC 2026 contributor at Debian. I build across the stack —
embedded systems, full-stack web, and open source infrastructure.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <a
                href="mailto:jugalp6103@gmail.com"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">Email</span>
              </a>
              <a
                href="https://github.com/DankJugal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jugalpatel6103/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono">LinkedIn</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 border border-zinc-700 text-zinc-100 text-sm font-mono hover:bg-zinc-900 transition-colors"
              >
                View Work
              </a>
            
            </div>
          </div>

          <div className="flex-1 relative w-full h-96 md:h-full md:min-h-[500px] flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="hexPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                    <polygon
                      points="12.5,0 25,7.2 25,21.6 12.5,28.8 0,21.6 0,7.2"
                      fill="none"
                      stroke="#27272a"
                      strokeWidth="0.6"
                      opacity="0.4"
                    />
                  </pattern>
                  <radialGradient id="fadeLeft" cx="0%" cy="50%">
                    <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0 }} />
                  </radialGradient>
                  <radialGradient id="fadeRight" cx="100%" cy="50%">
                    <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
                  </radialGradient>
                </defs>

                <rect width="400" height="400" fill="url(#hexPattern)" />
                <rect width="200" height="400" fill="url(#fadeLeft)" />
                <rect x="200" width="200" height="400" fill="url(#fadeRight)" />
              </svg>

              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/Gemini_Generated_Image_9qbkcl9qbkcl9qbk (1).png"
                  alt="Jugal Patel"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
