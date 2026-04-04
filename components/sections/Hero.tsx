'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center py-20">
        <div className="text-left space-y-6 order-2 lg:order-1">
          <div className="space-y-2">
            <p className="text-sm text-zinc-500 uppercase tracking-wider font-mono">Developer & Engineer</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Jugal Patel
            </h1>
          </div>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
            Computer Science student at IIIT Surat specializing in full-stack development, IoT systems, and machine learning applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:jugalp6103@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono">Email</span>
            </a>
            <a
              href="https://github.com/jugalp6103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/jugalpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-mono">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />

            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.03) 2px,
                  rgba(255, 255, 255, 0.03) 4px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.03) 2px,
                  rgba(255, 255, 255, 0.03) 4px
                )`
              }} />
            </div>

            <Image
              src="/Gemini_Generated_Image_9qbkcl9qbkcl9qbk_(1).png"
              alt="Jugal Patel"
              fill
              className="object-cover rounded-lg"
              priority
            />

            <div className="absolute inset-0 border border-zinc-800 rounded-lg" />
          </div>
        </div>

        <div className="text-left lg:text-right space-y-6 order-3">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-1">Education</p>
              <p className="text-sm text-zinc-300 font-medium">IIIT Surat</p>
              <p className="text-xs text-zinc-500">BTech CSE • CGPA 9.12</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-1">Current Role</p>
              <p className="text-sm text-zinc-300 font-medium">Club Lead</p>
              <p className="text-xs text-zinc-500">Modern Automation & Robotics</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider font-mono mb-1">Location</p>
              <p className="text-sm text-zinc-300">Surat, India</p>
            </div>
          </div>

          <a
            href="/JugalPatel_Resume.pdf"
            download
            className="inline-block px-6 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded text-sm font-mono transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
