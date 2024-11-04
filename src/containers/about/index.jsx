import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContainer'
import { Animate } from 'react-simple-animate';
import { FaJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact, FaJava, FaGithubSquare } from "react-icons/fa";
import './styles.scss'
const personalDetails = [
  {
    label: "Name",
    value: "Yash Pravin Hadade"
  },
  {
    label: "Age",
    value: "22"
  },
  {
    label: "Address",
    value: "Mumbai, India"
  },
  {
    label: "Email",
    value: "yashhadade613@gmail.com"
  },
  {
    label: "GitHub",
    value: "yashhadade"
  },
  {
    label: "Linkedin",
    value: "Yash Hadade"
  },
  {
    label: "Twitter",
    value: "yaashh04"
  },
  {
    label: "Instagram",
    value: "yashh.04"
  },
  // {
  //   label:"Phone",
  //   value:"+91 7900103177"
  // }

];
const jobSummery = `As a Frontend Developer with three months of experience, I successfully completed a project for Raymond, developing an Inspection Scheduling System that enhances operational efficiency. In this role, I collaborated with cross-functional teams to gather requirements, designed intuitive UI components, and integrated APIs for seamless data flow. This project allowed me to apply my skills in modern JavaScript frameworks while deepening my understanding of user-centered design and agile methodologies.`

const About = () => {
  return (
    <section id='about' className='about'>

      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40}/>}
      />

      <div className="about_content">
        <div className='about_content_personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummery}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, index) => (
                  <li key={index}>
                    <span className='title'>{item.label}:</span>
                    <span className='value'>{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className='about_content_serviseWrapper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
          <div className='about_content_serviseWrapper_innerContent'>
         
            <div> <FaJs size={60} color='var(--yello-theme-main-color)' /></div>
            <div> <SiMysql size={60} color='var(--yello-theme-main-color)' /></div>
            <div> <FaReact size={60} color='var(--yello-theme-main-color)' /></div>
            <div> <FaJava size={60} color='var(--yello-theme-main-color)' /></div>
            <div>< FaGithubSquare size={60} color='var(--yello-theme-main-color)' /></div>
           
          </div>
          </Animate>
        </div>

      </div>

    </section>
  )
}

export default About