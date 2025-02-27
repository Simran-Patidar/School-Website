import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-scroll'
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

  const[sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 450 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
   <nav className={`container ${sticky? 'dark-nav' : ''}`}>
   {/* <nav className="container dark-nav"> */}
    <img src={logo} alt="" className='logo'></img>
    <ul className={mobileMenu ? '' : `hide-mobile-menu`}>
        <li><Link to='hero' smooth='true' offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth='true' offset={-150} duration={500}>About us</Link></li>
        <li><Link to='acedemics' smooth='true' offset={-260} duration={500}>Acedemics</Link></li>
        <li><Link to='admission' smooth='true' offset={-150} duration={500}>Admission</Link></li>
        <li><Link to='faculty' smooth='true' offset={-260} duration={500}>Faculty</Link></li>
        <li><Link to='student' smooth='true' offset={-260} duration={500}>Student</Link></li>
        <li><Link to='campus' smooth='true' offset={-260 } duration={500}>Campus</Link></li>
        <li><Link to='contact' smooth='true' offset={-260} duration={500} className='btn'>Contact us</Link></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu} />
   </nav>
  )
}

export default Navbar