

function Section(props) {
    return (
        <section id="s1" style={{height: props.h + 'vh'}}>
            <div className="box">
                {/* if props image, no max width */}
                <div className="content" style={{ maxWidth: props.image ? 400 + 'px' : '' }}>
                    <h1 style={{ fontSize: 45 + 'px', marginBottom: 20 + 'px', lineHeight: 70 + 'px' }}>{props.txt}</h1>
                    <p style={{ marginBottom: 40 + 'px', lineHeight: 25 + 'px' }}>{props.txt2}</p>
                    <a href={props.link} target="_blank" style={{textDecoration: 'none'}}>{props.txt3}</a>
                </div>
                <img src={props.image} alt="profile" className='profileImg' />
            </div>
        </section>
    );
}

export default Section;