import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContainer'
const Contact = () => {
  return (
    <section id='contact' className='contact'>
    <PageHeaderContent
    headerText="contact"
    icon={<BsInfoCircleFill/>}
    />
  </section>
  )
}

export default Contact