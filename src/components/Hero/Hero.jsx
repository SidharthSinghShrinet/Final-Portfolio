import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src="https://media.licdn.com/dms/image/v2/D5603AQE1zhvoksEtgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723828613838?e=1737590400&v=beta&t=CTOg_uNReDV7Hyyd5lsHM7JC4W0I-Urg46CUJvOpXRs" alt=''/>
        <h1><span>I'm Bhavya Bansal,</span> working as CTO in Persist Ventures, USA</h1>
        <p>
        Transforming ideas into cutting-edge AI solutions, with expertise in Python, AI, and DevOps to drive innovation and growth.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div 
            className="hero-resume" 
            onClick={()=>{
              const link = document.createElement("a");
              link.href = "./My_resume.pdf";
              link.download = "My_Resume.pdf";
              link.click();
            }}>My resume</div>
        </div>
    </div>
  )
}

export default Hero