import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import PortFolio from './containers/portfolio'
import Skill from './containers/skills'
import Resume from './containers/resume'
import Contact from './containers/contact'
import NavBar from './components/navBar'

function App() {
  const NotFound = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full height of the viewport
      textAlign: 'center'
    }}>
      <h1>404</h1>
    </div>
  );

  return (
    <>
     
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      
    </>
  )
}

export default App
