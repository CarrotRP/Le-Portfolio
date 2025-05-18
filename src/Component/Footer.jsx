import github_light from "../assets/github-mark-white.png"
import tele_light from "../assets/tele-white.png"
import { Link, useLocation } from "react-router-dom"
import './Footer.css'

import tele_dark from "../assets/tele-dark.png"
import github_dark from "../assets/github-mark.png"

function Footer(props) {

    const location = useLocation();

    // usual footer bot style
    const footerBot_style = {
        marginTop: "140px",
        color: "white"
    }
    const footerBot_p_style = {
        color: "white",
    }
    // footer style in contact page
    const in_contact_page_style = {
        marginTop: 0,
        backgroundColor: "var(--primary-bg)",
        height: "15vh",
    }
    const in_contact_p_style = {
        color: "var(--footer-txt)",
    }

    return (
        <footer>
            {location.pathname == "/contact" ? <div></div> : 
            <div className="top">
                
                <h1 style={{ fontSize: 60 + 'px', marginTop: 50 + 'px', marginBottom: 10 + 'px', letterSpacing: 3 + 'px' }}>Let's work together</h1>
                <p>Let's work together to build something great.</p>
                <div className="contact">
                    <h4>SAY HELLO &#10230;</h4>
                    <div className="links">
                        <a href="">GitHub</a>
                        <p>/</p>
                        <a href="">Telegram</a><br />
                        <p>panharothlim@gmail.com</p>
                    </div>
                </div>
            </div>}
            <div className={location.pathname == "/contact" ? "bot" : "bot footer-bot"} style={location.pathname == "/contact" ? in_contact_page_style : footerBot_style}>
                <p style={location.pathname == "/contact" ? in_contact_p_style : footerBot_p_style}>&copy; CarrotS {new Date().getFullYear()}</p>
                <p style={location.pathname == "/contact" ? in_contact_p_style : footerBot_p_style}>|</p>
                {/* testing a tag and Link from react-router */}
                {/* <img src="" alt="facebook" /> */}
                <a href="https://github.com/CarrotRP" target="_blank">
                    {location.pathname == "/contact" ? 
                    <img src={props.isDark ? github_light : github_dark} alt="github" /> :
                    <img src={github_light} alt="github" />}
                </a>
                <Link to="https://t.me/PanharothLim" target="_blank">
                    {location.pathname == "/contact" ? 
                    <img src={props.isDark ? tele_light : tele_dark} alt="telegram" /> :
                    <img src={tele_light} alt="telegram" />}
                </Link>
            </div>
        </footer>
    );
}

export default Footer;