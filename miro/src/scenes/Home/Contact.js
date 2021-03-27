import React, {useState} from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import * as emailjs from 'emailjs-com'

function Contact() {

    // const initialState = {
    //     name: '',
    //     email: '',
    //     subject: 'Portfolio Email',
    //     message: '',
    // }

    const [user_name, setUserName] = useState();
    const [user_email, setUserEmail] = useState();
    const [message, setMessage] = useState();
    // const [state, setState] = useState(initialState);

    const sendMessage = (e) => {

        e.preventDefault();
        
        let templateParams = {
            user_name: user_name,
            user_email: user_email,
            message: message,
            to_name: 'allydeeter6639@gmail.com'
       }

       emailjs.send(
        'service_5ypbb5i',
        'template_ouodbzh',
         templateParams,
        'user_ix4HSO1BENpZUq4s4Ongu'
       )

       alert("Message has been sent!")

       resetForm()
    }

    const resetForm = () => {

        setUserName("")
        setUserEmail("")
        setMessage("")
    }

    // const handleChange = (param, e) => {
    //     this.setState({ [param]: e.target.value })
    // }

    return (
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/contact/email3.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Thank you for taking the time to view my portfolio. I look forward to speaking with you about how I can be an asset to your team. </p>
                                </header>
                                <form className="form form-1 pt-15">
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" value={user_name} onChange={(e)=>setUserName(e.target.value)}/>
                                                <label htmlFor="form-item-name">Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" value={user_email} onChange={(e)=>setUserEmail(e.target.value)}/>
                                                <label htmlFor="form-item-email">Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                                <label htmlFor="form-item-message">Your Message</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary" onClick={sendMessage}>Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contact;
