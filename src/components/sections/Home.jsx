import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { Server, Database, Activity, Container, Terminal } from "lucide-react";

export const Home = () => {
  const [text, setText] = useState("");
  const fullText = `
@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: MessageDto): void {
    this.server.emit('message', {
      ...data,
      timestamp: new Date(),
      status: 'sent'
    });
  }
}`;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 40); // Typing speed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40"
    >

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left z-10">
            <RevealOnScroll>
              {/* Headlines */}
              <h1 className="text-5xl md:text-7xl font-bold mb-2 leading-none text-white tracking-tighter">
                Hi, I'm <span className="text-white">Dev</span>
                <span className="text-cyan-400 animate-pulse">.</span>
              </h1>

              <div className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 drop-shadow-lg select-none">
                  Backend
                </span>
                
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  Dev
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 mb-12">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-8 rounded-lg font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="border border-white/10 text-white py-4 px-8 rounded-lg font-bold transition-all duration-200 hover:bg-white/5 hover:text-blue-400"
                >
                  Contact Me
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Code Terminal */}
          <div className="relative group">
            <RevealOnScroll>
              {/* Glassmorphism Terminal */}
              <div className="bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    gateway.ts
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 overflow-x-auto">
                  <pre className="font-mono text-sm leading-relaxed text-gray-300">
                    <code className="language-typescript">
                      {text}
                      <span className="animate-blink inline-block w-2 h-5 bg-blue-500 align-middle ml-1" />
                    </code>
                  </pre>
                </div>
              </div>

              {/* Decorative Elements behind terminal */}
              <div className="absolute -z-10 -top-5 -right-5 w-full h-full border-2 border-blue-500/20 rounded-xl" />
            </RevealOnScroll>
          </div>
        </div>

        {/* Bottom Tech Marquee */}
        <div className="mt-24 pb-10">
          <div className="flex overflow-hidden relative w-full mask-gradient">
            <motion.div
              className="flex gap-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[
                "Java", "Spring Boot", "Docker", "PostgreSQL", "Redis", 
                "Kafka", "AWS"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-xl md:text-2xl font-bold text-gray-500/40 uppercase tracking-widest hover:text-gray-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
               {[
                "Java", "Spring Boot", "Docker", "PostgreSQL", "Redis", 
                "Kafka", "AWS"
              ].map((tech, index) => (
                <span
                  key={`duplicate-${index}`}
                  className="text-xl md:text-2xl font-bold text-gray-500/40 uppercase tracking-widest hover:text-gray-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
