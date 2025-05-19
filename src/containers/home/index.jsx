import React from 'react'
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import About from '../about'
import Skill from '../skills'
import Resume from '../resume'
import resume from '../../assets/Yash_Hadade_resume.pdf'
import Portfolio from '../portfolio'
import Contact from '../contact'
const Home = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>

      <section id='home' className='home'>
        <div className='home_text-wrapper'>
          <h1>
            Hello I'm Yash
            <br />
            Fullstack developer
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateY(550px)'
          }}
          end={{
            transform: 'translateY(0px)'
          }}
        >
          <div className='home_contact-me'>
            <button onClick={handleScrollToContact}>Hire Me</button>
            <a href={resume} download='resume'>
              <button>
                Resume
              </button>
            </a>
          </div>
        </Animate>
      </section>
      <About />
      <Skill />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home