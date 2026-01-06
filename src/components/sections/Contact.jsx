import { RevealOnScroll } from "../RevealOnScroll";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight text-white">
            Get in{" "}
            <span className="text-blue-500">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <a
              href="mailto:dat7092006@gmail.com"
              className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div className="p-5 rounded-full bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 break-all">
                dat7092006@gmail.com
              </h3>
              <span className="text-slate-400 text-sm">Email Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nguyen-van-dat-nguyễn-9280ab377"
              target="_blank"
              rel="noopener noreferrer"
              className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div className="p-5 rounded-full bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Linkedin size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Nguyen Van Dat
              </h3>
              <span className="text-slate-400 text-sm">Connect on LinkedIn</span>
            </a>

            {/* Phone */}
            <a
              href="tel:0794266321"
              className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div className="p-5 rounded-full bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Phone size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                0794266321
              </h3>
              <span className="text-slate-400 text-sm">Call Me</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
