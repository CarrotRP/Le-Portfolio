import github_dark from "./assets/github-mark.png"
import github_light from "./assets/github-mark-white.png"
import tele_dark from "./assets/tele-dark.png"
import tele_light from "./assets/tele-white.png"
import { Link } from "react-router-dom"

function Footer(props) {

    const style = {
        display: "inline"
    }

    return (
        <footer>
            <div className="top">
                <h1 style={{fontSize: 60 + 'px', marginBottom: 10 + 'px', letterSpacing: 3 + 'px'}}>Let's work together</h1>
                <p>Let's work together to build something great.</p>
                <div className="contact">
                    <h4>SAY HELLO &#10230;</h4>
                    <div className="links">
                        <a href="">GitHub</a>
                        <p>/</p>
                        <a href="">Telegram</a><br/>
                        <p>panharothlim@gmail.com</p>
                    </div>
                </div>

            </div>
            <div className="bot" style={{marginTop: 140 + 'px'}}>
                <p>&copy; CarrotS {new Date().getFullYear()}</p>
                <p>|</p>
                {/* testing a tag and Link from react-router */}
                {/* <img src="" alt="facebook" /> */}
                <a href="https://github.com/CarrotRP" target="_blank">
                    <img src={props.isDark ? github_light : github_dark} alt="github" />
                </a>
                <Link to="https://t.me/PanharothLim" target="_blank">
                    <img src={props.isDark ? tele_light : tele_dark} alt="telegram" />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;