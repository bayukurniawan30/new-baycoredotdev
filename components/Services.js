import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../lib/FontAwesome"

export default function Services() {
    return (
        <section id="services" className="services section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title align-left">
                            <span data-aos="fade-down" data-aos-delay="200">My Working Process</span>
                            <h2 data-aos="fade-up" data-aos-delay="400">Provide Awesome Service For You</h2>
                        </div>
                    </Col>
                </Row>
                <div className="single-head">
                    <Row>
                        <Col lg={3} md={6}>
                            <div data-aos="fade-up" data-aos-delay="200" className="single-service">
                                <h3><a href="service-single.html">Discuss</a></h3>
                                <div className="icon">
                                    <FontAwesomeIcon icon={['far', 'comments']} size="sm" />
                                </div>
                                <p>Discuss what you want to make and need.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div data-aos="fade-up" data-aos-delay="400" className="single-service">
                                <h3><a href="service-single.html">Build</a></h3>
                                <div className="icon">
                                    <FontAwesomeIcon icon={['far', 'keyboard']} size="sm" />
                                </div>
                                <p>I made the website according to your request.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div data-aos="fade-up" data-aos-delay="600" className="single-service">
                                <h3><a href="service-single.html">Deploy</a></h3>
                                <div className="icon">
                                    <FontAwesomeIcon icon={['far', 'hdd']} size="sm" />
                                </div>
                                <p>Deploy the website to the cloud and make it live.</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div data-aos="fade-up" data-aos-delay="800" className="single-service">
                                <h3><a href="service-single.html">Launch</a></h3>
                                <div className="icon">
                                    <FontAwesomeIcon icon={['far', 'window-maximize']} size="sm" />
                                </div>
                                <p>Access your website with your favorite browser.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}
