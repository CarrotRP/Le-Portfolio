import Section from "./Section";
import amiibo from "./assets/amiibo.png"

function Work(){
    return(
        // using 'about' class name here, cuz, theres a css that swap the bg already done
        <div className="works-page about">
                <div className="title">
                    My Works
                </div>
                <Section h={35} image={amiibo} txt="Amiibo Mobile App" txt3="VIEW PROJECT &#10230;" link="https://github.com/CarrotRP/amiibo_api_flutter.git"/>
                <Section h={35} txt="only 1 for now 🗿"/>
        </div>
    );
}

export default Work;