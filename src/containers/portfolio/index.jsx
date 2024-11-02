import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageHeaderContainer'
const PortFolio = () => {
  return (
    <section id='portFolio' className='portfolio'>
    <PageHeaderContent
    headerText="Portfolio"
    icon={<BsInfoCircleFill/>}
    />
  </section>
  )
}

export default PortFolio