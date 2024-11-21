import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='about-sections'>
          <div className="about-left">
            <img src="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/66bfabd5b965742ba40eae59_Bhavya%20Bansal%20(2).png" alt=''/>
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I am an experienced technology leader with a diverse background spanning across AI, Full Stack Development, and DevOps. With a career built on innovation, I’ve had the opportunity to contribute to prestigious organizations, driving their growth and technological advancements.</p>
              <p>My passion for technology and leadership is reflected not only in my expertise but also in the energy and dedication I bring to every project.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>MySQL</p><hr style={{width:"45%"}}/></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>2.5+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>28+</h1>
            <p>SKILLS & EXPERTISE</p>
          </div>
          <hr/>
          <div className="about-achievement">
            <h1>12+</h1>
            <p>LICENSES & CERTIFICATIONS</p>
          </div>
        </div>
    </div>
  )
}

export default About