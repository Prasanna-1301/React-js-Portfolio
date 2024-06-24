import React from 'react'
import './about.css'
import myImage from '../../assets/image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bsc.(Computers)  <br /><i>Acharya nagarjuna univercity</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Percentage</h5>
                  <small>75%</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Basic java,c</li>
                      <li>Html,Css</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I am a dedicated and enthusiastic<b> Web developer</b> with a <b>BSc degree in Computer Science</b>. I have
                     a strong foundation in HTML, CSS, and JavaScript, complemented by hands-on experience with modern frameworks like React and Node.js. My <br/>
                     portfolio showcases a variety of projects, from responsive websites to dynamic
                      web applications, highlighting my ability to deliver clean,
                       efficient, and user-friendly code. I am eager to leverage my technical skills
                        and passion for web development to contribute to innovative projects and 
                        grow within a dynamic team.


            </p>

          </div>
      </div>
    </section>
  )
}

export default About