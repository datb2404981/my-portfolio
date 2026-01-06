import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Global Fixed Background */}
        <div className="fixed inset-0 z-0 bg-[#0a0a0a]">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
            
            {/* Ambient Gradient Orbs */}
            <div className="absolute top-0 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-70" />
            <div className="absolute top-[20%] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="relative z-10"> {/* Wrap content in z-10 to sit above background */}
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
