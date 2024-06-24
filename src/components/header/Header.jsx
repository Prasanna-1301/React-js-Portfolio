import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/pic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Prasanna lakshmi Gogu</h1>
          <h3 className="text-light">Web developer</h3>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          
        </div>
      </header>

    
    
  )
}

export default Header