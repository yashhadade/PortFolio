import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import { data } from './utils'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { CgProfile } from "react-icons/cg";
import PageHeaderContent from '../../components/pageHeaderContainer'
import './styles.scss'
import { MdWork } from 'react-icons/md';

const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <PageHeaderContent
    headerText="Resume"
    icon={<CgProfile size={40}/>}
    />
    <div className="timeline">
      <div className="timeline_experiance">
        <h3 className='timeline_experiance_header-text'>Exprience</h3>
        <VerticalTimeline
        layout={'1-coulum'}
        lineColor='var(--yello-theme-main-color)'
       
        >
          {
            data.experiance.map((item,index)=>(
              <VerticalTimelineElement
              key={index}
              className='timeline_experiance_vertical-timeline-element'
              contentStyle={{
                background: 'none',
                color: 'var(--yello-theme-sub-text-color)',
                border:'1.5px solid var( --yello-theme-main-color)'
              }}
              icon={<MdWork/>}
              iconStyle={{
                background:'#181818',
                color:'var( --yello-theme-main-color)'
              }}
              >
               <div className='vertical-timeline-element-title-wrapper'>
                    <h3 className='vertical-timeline-element-title'>{item.title}</h3>
                    <h4 className='vertical-timeline-element-subTitle'>{item.subtitle}</h4>
                    
               </div>
               <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                    <h3>{item.duration}</h3>
              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
      </div>
      <div className="timeline_eduction">
        <h3 className='timeline_eduction_header-text'>Eduction</h3>
        <VerticalTimeline
        layout={'1-coulum'}
        lineColor='var(--yello-theme-main-color)'
        >
          {
            data.eduction.map((item,index)=>(
              <VerticalTimelineElement
              key={index}
              className='timeline_eduction_vertical-timeline-element'
              contentStyle={{
                background: 'none',
                color: 'var(--yello-theme-sub-text-color)',
                border:'1.5px solid var( --yello-theme-main-color)'
              }}
              
              icon={<MdWork/>}
              iconStyle={{
                background:'#181818',
                color:'var( --yello-theme-main-color)'
              }}
              >
               <div className='vertical-timeline-element-title-wrapper'>
                    <h3 className='vertical-timeline-element-title'>{item.title}</h3>
                    <h4 className='vertical-timeline-element-subTitle'>{item.subtitle}</h4>
                    
               </div>
               <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                    <h3>{item.duration}</h3>
              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
      </div>
    </div>
  </section>
  )
}

export default Resume