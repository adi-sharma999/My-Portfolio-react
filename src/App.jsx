import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Awards from './Pages/Awards';
import About from './Pages/About';
import Last from './Pages/Last';
import Header from './Components/Header';
import Loader from './Components/Loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home"><Home /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="about"><About /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="skills"><Skills /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="experience"><Experience /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="projects"><Projects /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="certificates"><Certificates /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="education"><Education /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="awards"><Awards /></div>
                <div className="flex justify-center my-4 sm:my-8 md:my-10 text-neutral-500 text-md sm:text-2xl md:text-3xl">● ● ●</div>

                <div id="last"><Last /></div>
              </>
            }
          />
          {/* Individual routes */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>

      <footer className="text-center text-neutral-500 p-4 md:p-6 text-[8px] sm:text-xs md:text-lg">
        © 2025 Aditya Sharma - All Rights Reserved <span className="text-red-500"> .</span>
      </footer>
    </>
  )
}

export default App
