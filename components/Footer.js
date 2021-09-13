import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function Footer() {
    const d        = new Date();
    const fullYear = d.getFullYear();

    return (
        <footer className="footer">
            <div className="footer-middle">
                <Container>
                    <Row>
                        <Col lg={6} md={4}>
                            <div className="f-about single-footer">
                                <div className="logo">
                                    <a href="index.html">
                                        <Image
                                            src="/img/logo-white.png"
                                            alt="Logo"
                                            width={230}
                                            height={45}
                                        />
                                    </a>
                                </div>
                                <p>Start building your website with me and get the awesome website.<br />Get in touch with me.</p>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="https://github.com/bayukurniawan30" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="sm" /></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCFOwJEF1e2zyWBgKuTKVePA" target="_blank"><FontAwesomeIcon icon={['fab', 'youtube']} size="sm" /></a></li>
                                        <li><a href="https://www.facebook.com/bay.coretech/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="sm" /></a></li>
                                        <li><a href="https://www.instagram.com/baycore/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="sm" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="single-footer f-link">
                                <h3>More Links</h3>
                                <ul>
                                    <li><a href="#" target="_blank">Blog</a></li>
                                    <li><a href="https://host.codewithbaycore.dev" target="_blank">Host.cwb</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="single-footer f-link">
                                <h3>Contact Me</h3>
                                <ul>
                                    <li><a href="mailto:bayukurniawan@baycore.dev">bayukurniawan@baycore.dev</a></li>
                                    <li><a href="https://wa.me/6285737309066">+6285737309066</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <div className="inner">
                        <Row>
                            <Col>
                                <div className="left">
                                    <p>&copy; {fullYear} <a href="https://baycore.dev">Baycore.dev</a>. All Rights Reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}