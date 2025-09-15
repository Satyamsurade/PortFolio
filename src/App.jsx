import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* ---------- Background Section ---------- */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        
        {/* Optional background image (faint for texture) */}
        <div className="absolute inset-0 bg-[url('/bg.jpeg')] bg-cover bg-center opacity-20"></div>

        {/* ===== Choose ONE of these gradient combos ===== */}
        {/* 1️⃣ Deep Blue + Purple */}
        {/*<div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-black"></div>8/}

        {/* 2️⃣ Teal + Cyan (Fresh Techy look) */}
        { /*<div className="absolute inset-0 bg-gradient-to-b from-teal-900 via-cyan-800 to-black"></div> */}

        {/* 3️⃣ Red + Orange Glow (Bold Creative) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-orange-900 via-red-800 to-black"></div> */}

        {/* 4️⃣ Space Night (Galaxy feel) */}
        {/*<div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-blue-900"></div>*/}

        {/* 5️⃣ Soft Ocean (Calm and natural) */}
        {<div className="absolute inset-0 bg-gradient-to-b from-sky-900 via-emerald-900 to-black"></div> }
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-24">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Certificate />
        {/* <Experience /> */}  {/* Uncomment if needed */}
        <Projects />
        <Education />
        <Contact />
            
      </div>
    </div>
  );
};

export default App;
