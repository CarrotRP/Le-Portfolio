import profileImg from "../assets/carrot.jpg";
import './AboutSection.css';

function AboutSection() {
    const style = {
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        gridTemplateColumns: "repeat(8,1fr)",
    } 

    return (
        <section style={{ height: 1300 + 'px' }}>
            <div className="ab-box" style={style}>
                <p className="top" style={{
                    gridArea: "1/2/2/6",
                    fontSize: "40px",
                    alignSelf: "end",
                    fontWeight: "200",
                    lineHeight: "60px",
                }}>I am a passionate<b> front-end developer </b>and 
                <b> mobile app developer </b>
                with a keen eye for details
                </p>
                <img src={profileImg} alt="profileImg" style={{
                    width: '280px', 
                    gridArea: "2/1/3/3",
                    alignSelf: "end",
                }}/>
                <p className="bot" style={{
                    gridArea: "3/5/4/9",
                    fontSize: "20px",
                    lineHeight: "55px",
                    fontWeight: "300",
                    }}>
                    Hi! I'm Carrot. I have a strong passion for technology. 
                    I specialize in Front End Development(for now), and Mobile Development.
                    I also do photo editing, animations, video editing and other graphic design services (posters).
                </p>
            </div>
        </section>
    );
}

export default AboutSection;