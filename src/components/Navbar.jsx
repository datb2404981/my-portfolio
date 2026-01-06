import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled
        ? "bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg py-4"
        : "bg-transparent border-b border-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a  
            href="#home"
            className="font-mono text-xl font-bold text-white flex items-center gap-2 cursor-pointer group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="text-2xl font-bold text-white tracking-tight flex items-center gap-1">
               <span className="text-cyan-400">&lt;</span>
               Van.Dat
               <span className="text-cyan-400">/&gt;</span>
            </span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className="relative text-gray-300 hover:text-white font-medium text-lg transition-colors group"
              >
                {link.name}
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
                {/* Glow Effect */}
                <span className="absolute inset-0 blur-lg bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
