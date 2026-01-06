import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: NestChat */}
            <div className="p-0 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src="/NestChat.png"
                  alt="NestChat"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                {/* Gradient fade to blend image with card background */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  NestChat
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Scalable Realtime Messaging Infrastructure designed to handle
                  complex WebSocket events and large data loads.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["NestJS", "MongoDB", "Socket.IO", "TypeScript", "Redis"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-auto">
                  <a
                    href="https://github.com/datb2404981/Chat_Nexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium hover:translate-x-1 duration-200"
                  >
                    View Project <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: LaptopShop */}
            <div className="p-0 rounded-2xl bg-[#1a1a1a] border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src="/LaptopShop.png"
                  alt="LaptopShop"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                {/* Gradient fade to blend image with card background */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  LaptopShop
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Full-stack E-Commerce platform with strict data consistency and
                  relational modeling.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Node.js", "Express", "MySQL", "Prisma", "TypeScript"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-auto">
                  <a
                    href="https://github.com/datb2404981/LaptopShop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium hover:translate-x-1 duration-200"
                  >
                    View Project <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
