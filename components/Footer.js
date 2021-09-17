import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function Footer({...pageProps}) {
    const d        = new Date();
    const fullYear = d.getFullYear();

    const copyright  = pageProps.data.copyrightText
    const injectYear = copyright.replace("{year}", fullYear)

    const phone   = pageProps.phone
    const waPhone = phone.replace("+", "")

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
                                            src={pageProps.data.logo}
                                            alt="baycore.dev"
                                            width={230}
                                            height={45}
                                        />
                                    </a>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: pageProps.data.description }}></div>
                                <div className="footer-social">
                                    <ul>
                                        {pageProps.sosmed.map((sosmed) => (
                                            <li key={sosmed.name.value.replace(/\s/g, '_')}><a href={sosmed.link.value.url} target="_blank"><FontAwesomeIcon icon={[sosmed.font_awesome_type.value, sosmed.font_awesome_icon.value]} size="sm" /></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="single-footer f-link">
                                <h3>{pageProps.data.secondColumnTitle}</h3>
                                <ul>
                                    <li><a href="#" target="_blank">Blog</a></li>
                                    <li><a href="https://host.codewithbaycore.dev" target="_blank">Host.cwb</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="single-footer f-link">
                                <h3>{pageProps.data.thirdColumnTitle}</h3>
                                <ul>
                                    <li><a href={`mailto:${pageProps.email}`}>{pageProps.email}</a></li>
                                    <li><a href={`https://wa.me/${waPhone}`}>{pageProps.phone}</a></li>
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
                                    <p dangerouslySetInnerHTML={{ __html: injectYear }}></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </footer>
    )
}