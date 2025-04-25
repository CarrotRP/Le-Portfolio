function ScrollTop(props) {

    return (
        <button className={props.showBtn ? "to-top-hidden to-top" : "to-top-hidden"} onClick={props.handleClick}>
            &#8592; TOP
        </button>
    );
}

export default ScrollTop;