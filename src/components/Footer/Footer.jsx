import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt=''/>
                <p>I’m Bhavya Bansal, CTO at Persist Ventures, with expertise in AI, software development, and a passion for innovation.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Bhavya Bansal. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p><a href='https://www.linkedin.com/in/bhavya-bansal98/?originalSubdomain=in' target='_blank'>Connect with me</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer