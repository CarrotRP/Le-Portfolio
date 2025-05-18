function SkillSection(props) {
    return (
        <section style={{maxHeight: props.maxh, height: props.h}}>
            <div className="ab-box">
                <h1 style={{ fontSize: 45 + 'px'}}>{props.h1}</h1>
                <div style={{ textAlign: 'left', marginLeft: '50%' }} className="rightBox">
                    <p>{props.txt}</p>
                    {props.List}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;