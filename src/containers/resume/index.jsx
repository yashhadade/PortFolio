import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContainer'
const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <PageHeaderContent
    headerText="Resume"
    icon={<BsInfoCircleFill/>}
    />
  </section>
  )
}

export default Resume