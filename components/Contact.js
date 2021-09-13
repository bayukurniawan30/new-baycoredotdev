import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function Contact() {
    return (
        <section id="contact-us" className="contact-us section">
            <Container>
                <div className="contact-head" data-aos="fade-up" data-aos-delay="200">
                    <Row>
                        <Col lg={5}>
                            <div className="single-head">
                                <div className="contant-inner-title">
                                    <h4>Contact Information</h4>
                                    <p>Share your ideas, ask questions, send me a message, or chat me, and start building your website!</p>
                                </div>
                                <div className="single-info">
                                    <FontAwesomeIcon icon={['fab', 'whatsapp']} size="sm" />
                                    <ul>
                                        <li><a href="https://wa.me/6285737309066">+6285737309066</a></li>
                                    </ul>
                                </div>
                                <div className="single-info">
                                    <FontAwesomeIcon icon={['far', 'envelope']} size="sm" />
                                    <ul>
                                        <li><a href="mailto:bayukurniawan@baycore.dev">bayukurniawan@baycore.dev</a></li>
                                    </ul>
                                </div>
                                <div className="contact-social">
                                    <h5>Follow Me on</h5>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/bayukurniawan30">
                                                <span className="icon-1"><FontAwesomeIcon icon={['fab', 'github']} size="sm" /></span>
                                                <span className="icon-2"><FontAwesomeIcon icon={['fab', 'github']} size="sm" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCFOwJEF1e2zyWBgKuTKVePA">
                                                <span className="icon-1"><FontAwesomeIcon icon={['fab', 'youtube']} size="sm" /></span>
                                                <span className="icon-2"><FontAwesomeIcon icon={['fab', 'youtube']} size="sm" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/bay.coretech/">
                                                <span className="icon-1"><FontAwesomeIcon icon={['fab', 'facebook']} size="sm" /></span>
                                                <span className="icon-2"><FontAwesomeIcon icon={['fab', 'facebook']} size="sm" /></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/baycore/">
                                                <span className="icon-1"><FontAwesomeIcon icon={['fab', 'instagram']} size="sm" /></span>
                                                <span className="icon-2"><FontAwesomeIcon icon={['fab', 'instagram']} size="sm" /></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="form-main">
                                <form className="form" method="post" action="assets/mail/mail.php">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <input name="name" type="text" placeholder="Your Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <input name="email" type="email" placeholder="Your Email"
                                                    required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group message">
                                                <textarea name="message" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group button">
                                                <button type="submit" className="btn ">Submit Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}