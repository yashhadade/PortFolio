import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from '@tsparticles/react'
import { loadFull } from 'tsparticles'
import Home from './containers/home'
import About from './containers/about'
import PortFolio from './containers/portfolio'
import Skill from './containers/skills'
import Resume from './containers/resume'
import Contact from './containers/contact'
import NavBar from './components/navBar'
import particles from './utils/particles'

function App() {
  const location = useLocation
  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticlesJsInHomePage = location.pathname === "/";
  return (
    <>
      <div className='App'>
        {
          renderParticlesJsInHomePage && <Particles
            id="particles"
            init={handleInit}
            options={particles}
          />
        }

        <NavBar />
        <div className="App_main_page_content">
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortFolio />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes> */}
        </div>
      </div>
    </>
  )
}

export default App
