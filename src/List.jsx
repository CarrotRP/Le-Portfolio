function List(props) {
    const style = {
        textDecoration: "none",
        listStyleType: "none",
    }

    return (
        <>
            <h3 style={{marginTop: 35 + 'px', marginBottom: 10 + 'px'}}>{props.category}</h3>
            <ul className="about-list" style={style}>
                {props.list.map(i => <li style={{lineHeight: 45 + 'px'}}>{i}</li>)}
            </ul>
        </>
    );
}

export default List;