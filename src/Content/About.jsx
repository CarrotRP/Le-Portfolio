import SkillSection from "../Section/SkillSection";
import AboutSection from "../Section/AboutSection";
import List from "../Component/List";
import './About.css'

function About(){

    //softwares/tools
    const softwares = ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"]
    //web dev
    const webDev = ["HTML 5", "CSS 3", "JavaScript", "React JS", "Git", "NPM", "Laravel", "TailWindCSS"]
    //mobile dev
    const mobile = ["Flutter", "Firebase"]
    //other language
    const pLang = ["C++", "Java", "MySQL", "Python", ]

    return(
        <div className="about" style={{overflow: "hidden"}}>
            {/* some basic info section */}
            <AboutSection/>
            {/* middle part stuff */}
            <section className="about-mid" style={{maxHeight: 45 + 'vh', backgroundColor: 'black'}}>
                {/* could change into a row of h1 tag, but... lol */}
                <h1>Front End Development&nbsp;&nbsp;&nbsp;Web Development&nbsp;&nbsp;&nbsp;Mobile Development
                    &nbsp;&nbsp;&nbsp;Something&nbsp;&nbsp;&nbsp;Interface Design
                    &nbsp;&nbsp;&nbsp;Gaming&nbsp;&nbsp;&nbsp;Learning&nbsp;&nbsp;&nbsp;Prototyping&nbsp;&nbsp;&nbsp;Animation
                </h1>
            </section>
            {/* skill and stuff section */}
            <SkillSection maxh="40vh" h1="How I work" txt="I do not know how I work actually"/>
            <SkillSection h="1300px" h1="My Skills" txt="I have learnt and used various tools and software." List={[
                <List category="Software / Tools" list={softwares}/>,
                <List category="Web Development" list={webDev}/>,
                <List category="Mobile Development" list={mobile}/>,
                <List category="Others" list={pLang}/>,]}/>
        </div>
    );
}

export default About;