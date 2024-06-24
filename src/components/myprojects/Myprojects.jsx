import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/dices.jpeg'
import IMG2 from '../../assets/imgesslider.jpg'
import IMG3 from '../../assets/gallary.jpeg'
import IMG4 from '../../assets/stop.png'
import IMG5 from '../../assets/amazon.jpeg'
import IMG6 from '../../assets/admit.jpg'
const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Dice Roll</h3>
            <small className='text-light'>HTML | CSS | JS</small>
            <div className="Dice_roll">
              <a href="https://github.com/Prasanna-1301/Dice-roll" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>ImageSlider</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Prasanna-1301/Imageslider" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Gallarie</h3>
            <small className='text-light'>HTML | CSS | JS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Prasanna-1301/Gallarie" target="_blank" rel='noreferrer' className='btn'>Github</a>
             
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>StopWatch</h3>
            <small className='text-light'>HTML | CSS | JS | </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Prasanna-1301/StopWatch" target="_blank" rel='noreferrer' className='btn'>Github</a>
               
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Amazon</h3>
            <small className='text-light'>HTML | CSS  </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Prasanna-1301/Amazon" target="_blank" rel='noreferrer' className='btn'>Github</a>
               
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>AdmitCard</h3>
            <small className='text-light'>HTML | CSS | JS | </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Prasanna-1301/Admit-card-" target="_blank" rel='noreferrer' className='btn'>Github</a>
               
            </div>
            
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects