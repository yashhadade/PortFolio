import { label } from 'framer-motion/client'
import React from 'react'
import {FaBars,FaReact} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.scss'
const data=[
    {
        label:"HOME",
        to:"/"
    },
    {
        label:"ABOUT ME",
        to:"/about"
    },
    {
        label:"SKILLS",
        to:"/skill"
    },
    {
        label:"RESUME",
        to:"/resume"
    },
    {
        label:"PORTFOLIO",
        to:"/portfolio"
    },
    
    {
        label:"CONTACT",
        to:"/contact"
    }
]
const NavBar = () => {
    const [toggle, setToggle] = React.useState(false)
    const handleToogle = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <nav className='navbar'>
        <div className='navbar_container'>
        <Link to={'/'}className='navbar_container_logo'>
        <FaReact size={30}/>
        </Link>
        </div>
        <ul className={`navbar_container_menu${toggle ?'active':''}`}>
            {
                data.map((item,index)=>(
                    <li key={index} className='navbar_container_menu_item'>
                        
                            <Link to={item.to} className='navbar_container_menu_item_link'>
                            {item.label}
                            </Link>
                       
                    </li>
                ))
            }
        </ul>
        <div className='nav-icon' onClick={handleToogle}>
            {
                toggle? <HiX size={30} /> : <FaBars size={30}/>
            }
        </div>
        </nav>
    </div>
  )
}

export default NavBar