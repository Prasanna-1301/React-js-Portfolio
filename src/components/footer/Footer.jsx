import React from 'react'
import './footer.css'
import {BsLinkedin, BsMailbox, BsPhone} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Prasanna lakshmi</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/prasanna-lakshmi-095643201/"><BsLinkedin/></a>
          <a href="https://github.com/Prasanna-1301"><BsGithub/></a>
          <a href="prasannalakshmigogu55@gmail.com"><BsMailbox/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Prasanna lakshmi gogu. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer