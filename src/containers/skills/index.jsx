import React from 'react'
import { Line } from 'rc-progress'
import { GiSkills } from "react-icons/gi";

import PageHeaderContent from '../../components/pageHeaderContainer'
import { skillData } from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { transform } from 'framer-motion'
import "./styles.scss"

const Skill = () => {
  return (
    <section id='skill' className='skill'>
    <PageHeaderContent
    headerText="My Skill"
    icon={<GiSkills size={40}/>}
    />
    <div className="skill_content-wrapper">
      {
        skillData.map((item,index)=>(
          <div key={index} className="skill_content-wrapper_inner-content">
          <Animate 
          play
          duration={1}
          delay={0.3}
          start={{
            transform:'translateX(-200px)'
          }}
          end={{
            transform:'translateX(0)'
          }}
          >
            <h3 className='skill_content-wrapper_inner-content_category-text'>{item.label}</h3>
            <div className='skill_content-wrapper_inner-content_progressbar-container'>
              {
                item.data.map((skillItem, index)=>(
                  <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity:1", "opacity:0"]}
                  iterationCount="1"
                  >
                    <div className='progressbar-wrapper' key={index}>
                        <p>{skillItem.skillName}</p>
                        <Line 
                        percent={skillItem.percentage}
                        strokeWidth={"2"}
                        strokeColor="var(--yello-theme-main-color)"
                        trailWidth={"2"}
                        strokeLinecap="square"
                        />
                    </div>

                  </AnimateKeyframes>
                ))
              }
            </div>

          </Animate>
          </div>
        ))

        
      }
    </div>
  </section>
  )
}

export default Skill