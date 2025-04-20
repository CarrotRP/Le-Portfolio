import profileImg from './assets/carrot.jpg'

function Home() {
    return (
        <div className="home">
            <section id="s1">
                <div className="box">
                    <div className="content">
                        <h1>Hi, I am Carrot, Software Engineer</h1>
                        <p>A software engineering student with a love for technologies and desire to solve problems.</p>
                        <a href="#">Download CV</a>
                    </div>
                    <img src={profileImg} alt="profile" className='profileImg' />
                </div>
            </section>
            <section id="s2">
                <h1>About Me</h1>
                <div className="content">
                    <p>skills</p>
                    <p>skills</p>
                </div>
            </section>
        </div>
    );
}

export default Home;