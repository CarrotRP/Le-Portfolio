import { useRef} from "react";

function Section(props) {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const boxRef = useRef(null);

    const imgStyle = {
        visibility: "hidden",
        opacity: 0,
    }

    const handleMouseOver = () => {
        //only solution i can find without displaying any error
        if(props.type != 1){
            //container(section) styling animation
            sectionRef.current.style.height = 50 + 'vh';
            sectionRef.current.style.transition = "height 0.5s";
            
            //image styling animation
            imageRef.current.style.visibility = "visible";
            imageRef.current.style.opacity = 1;
            imageRef.current.style.transition = "visibility 300ms, opacity 300ms linear";
        }
    }
    const handleMouseLeave = () => {
        if(props.type != 1){
            sectionRef.current.style.height = props.h + 'vh';

            imageRef.current.style.visibility = "hidden";
            imageRef.current.style.opacity = 0;
        }
    }

    return (
        <section ref={sectionRef} style={{height: props.h + 'vh'}} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className="box" ref={props.type == 1 ? null : boxRef}>
                {/* if props image, no max width */}
                <div className="content" style={{ maxWidth: props.image ? 400 + 'px' : '' }}>
                    <h1 style={{ fontSize: 45 + 'px', marginBottom: 20 + 'px', lineHeight: 70 + 'px' }}>{props.txt}</h1>
                    <p style={{ marginBottom: 40 + 'px', lineHeight: 25 + 'px' }}>{props.txt2}</p>
                    <a href={props.link} target="_blank" style={{textDecoration: 'none'}}>{props.txt3}</a>
                </div>
                <img ref={imageRef} src={props.image} alt="profile" className='profileImg' onMouseOver={handleMouseOver} style={props.type == 1 ? null : imgStyle}/>
            </div>
        </section>
    );
}

export default Section;