function Contact() {

    return (
        <div className="contact-page">
            <div className="box">
                <h1 style={{fontSize: "60px", alignSelf: "end"}}>Get in touch.</h1>
                <p style={{maxWidth: "550px", alignSelf: "end", lineHeight: "30px"}}>Do you fancy saying hi to me or you want to get started
                    with your project and you need my help? Feel free to contact me.
                </p>
                <form action="">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Subject" required />
                    <input type="text" placeholder="Message" maxLength="1000" required size="100" />
                    <button style={{marginTop: "40px"}}>SEND MESSAGE &#10230;</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;