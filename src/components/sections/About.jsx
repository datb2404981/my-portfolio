import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML/CSS",
    "TailwindCSS",
    "EJS",
  ];

  const backendSkills = ["Node.js", "NestJS", "Express.js", "MongoDB", "MySQL","Docker","Socket.IO"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 drop-shadow-lg">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Me
            </span>
            <span className="text-cyan-400 animate-pulse">.</span>
          </h2>

          <div className="rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-4 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a second-year <span className="font-bold text-blue-400">Software Engineering student</span> at Can Tho University with a strong passion for <span className="font-bold text-purple-400">Backend Development</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey focuses on building <span className="text-white font-medium">scalable APIs</span>, managing databases, and optimizing server-side performance. I am eager to apply my skills in <span className="text-white font-medium">Node.js</span> and <span className="text-white font-medium">NestJS</span> to solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-900/10 text-blue-300 py-2 px-4 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all cursor-default text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  Backend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-900/10 text-purple-300 py-2 px-4 rounded-full text-sm border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-default text-center flex items-center justify-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-blue-400 text-3xl">🏫</span> Education
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                  <strong>Software Engineering</strong>
                  <br />
                  <span className="text-sm text-gray-400">Can Tho University (2023 – Present)</span>
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                  <strong>Relevant Coursework:</strong>
                  <br />
                  <span className="text-sm text-gray-400">Backend Development (NodeJS, NestJS)</span>
                  <span className="text-sm text-gray-400">Database Management (MySQL, MongoDB)</span>
                  <span className="text-sm text-gray-400">Data Structures & Algorithms</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-purple-400 text-3xl">💼</span> Experience
              </h3>
              <div className="space-y-6 text-gray-300">
                <div className="relative pl-6 border-l-2 border-white/10">
                  <h4 className="font-bold text-lg text-white">Sales & Marketing Assistant</h4>
                  <p className="text-sm text-blue-400 mb-2">The Gioi So Sinh Store (07/2024 – 11/2024)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Managed e-commerce website content and optimized user interface.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-white/10">
                  <h4 className="font-bold text-lg text-white">Math Tutor</h4>
                  <p className="text-sm text-blue-400 mb-2">HATC Education (01/2025 – 05/2025)</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Developed logical thinking and problem-solving skills for students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
