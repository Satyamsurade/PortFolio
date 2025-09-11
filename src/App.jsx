import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased
         selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen  bg-[url('/bg.jpeg')] bg-cover bg-center  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_00%,rgba(00,38,170,0.4),rgba(0,0,0,0))]"></div>
            </div>
            <div className="container mx-auto px-8">
                <Navbar />
                <Hero />
                <About />
                <Technologies/>
                {/*<Experience />*/}
                <Projects />
                <Contact/>
            </div>
        </div>
    );
};

export default App;