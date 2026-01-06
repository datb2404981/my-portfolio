import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            technologies: ["React", "Vue", "Next.js", "TailwindCSS"],
        },
        {
            category: "Backend",
            technologies: ["Node.js", "Python", "Django", "Go"],
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 relative">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Skills
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {skill.technologies.map((tech, key) => (
                                         <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                            "
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
