import Section from '../Section/Section';
import profileImg from '../assets/carrot.jpg'
import './Home.css'

function Home() {
    return (
        //TODO: add scroll to top
        <div className="home">
            {/* use a list, map function later if i have mo work/proj */}
            {/* section has 5 props, h(height), txt(h1), txt2(p), txt3(a), link, img, (idk why i use this layout but if it works, it works lol*/}
            {/* type 1 = others, type 2 = works/project */}
            <Section type={1} txt="Hi, I am Carrot, Software Engineer" txt2="A software engineering student with a love for technologies and desire to solve problems." txt3="Download CV &#10230;" image={profileImg} />
            <Section type={1} h={60} txt="Crafted with love. I guess..." txt2="These are some selection of my works"/>
            <Section h={35} txt="Amiibo Mobile App" txt3="VIEW PROJECT &#10230;" link="https://github.com/CarrotRP/amiibo_api_flutter.git"/>
            <Section h={35} txt="I have no other work or do I?" txt2="actually, no i don't lol"/>
        </div>
    );
}

export default Home;