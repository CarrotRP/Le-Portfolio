import { useState } from "react";
import './Contact.css'

function Contact() {

    const [count, setCount] = useState(0);

    const maxLength = 1000;

    //input string counter
    const handleChange = (event) => {
        setCount(event.target.value.length)
    }

    return (
        <div className="contact-page">
            <div className="box">
                <h1 style={{ fontSize: "60px", alignSelf: "end" }}>Get in touch.</h1>
                <p style={{ maxWidth: "550px", alignSelf: "end", lineHeight: "30px" }}>Do you fancy saying hi to me or you want to get started
                    with your project and you need my help? Feel free to contact me.
                </p>
                <form action="">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Subject" required />
                    <div className="txt-area" style={{position: "relative"}}>
                        <textarea name="message" id="message" placeholder="Message" required rows={6} maxLength={maxLength} onChange={handleChange}>
                        </textarea>
                        <p>{count}/{maxLength}</p>
                    </div>
                    <button style={{ marginTop: "40px" }}>SEND MESSAGE &#10230;</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;