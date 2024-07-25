import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Acedemics from './Components/Acedemics/Acedemics'
import About from './Components/About/About'

import Title from './Components/Title/Title'
import Admission from './Components/Admission/Admission'
import Faculty from './Components/Faculty/Faculty'
import Campus  from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import  Student  from './Components/Student/Student'

const App = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <div className='container'>
   <About/>
    <Title  subtitle="Our curriculum" title="What We Offer"/>
   <Acedemics/>
   <Admission/>
   <Title  subtitle="Dedicated Educators Committed to Excellence" title="Meet Our Faculty"/> 
   <Faculty/>
   <Title  subtitle="Empowering aur student for Success" title="Students"/>
   <Student/> 
   <Title  subtitle="Gallery" title="Campus Photos"/> 
   <Campus/>
   <Title  subtitle="Contact Us" title="Get in Touch"/> 
   <Contact/>
   <Footer/>
   </div>
  
   </>
  )
}

export default App