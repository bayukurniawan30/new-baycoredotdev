import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button, Tabs, Tab, TabContent  } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function AboutMe() {
    const d        = new Date();
    const fullYear = d.getFullYear();
    const myAge    = fullYear - 1992;

    return (
        <section className="about-us section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-left">
                            <div className="section-title align-left">
                                <span data-aos="fade-down" data-aos-delay="200">Know Me More</span>
                                <h2 data-aos="fade-up" data-aos-delay="400">I have quality and experience</h2>
                            </div>
                            <div className="about-tab wow fadeInUp" data-wow-delay=".4s">
                                <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="aboutMe" title="About Me">
                                        <TabContent>
                                            <Row>
                                                <Col>
                                                    <p className="mt-3">
                                                    My name is Bayu Kurniawan, {myAge} years old, born and grew up in Denpasar, Bali. Become a web developer since 2014.</p><p>Learning about web developing since I was in college made me continue to pursue this until now. The rapid development of technology in the world of web developing makes me even more excited.
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabContent>
                                    </Tab>
                                    <Tab eventKey="skill" title="My Skills">
                                        <TabContent>
                                            <Row>
                                                <Col lg={4}>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> HTML</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> CSS</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Javascript</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> PHP</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Wordpress</li>
                                                    </ul>
                                                </Col>
                                                <Col lg={4}>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Photoshop</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Premiere Pro</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Filmora</li>
                                                    </ul>
                                                </Col>
                                                <Col lg={4}>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> PC Troubleshooting</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> Origami</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </TabContent>
                                    </Tab>
                                    <Tab eventKey="experience" title="Experience">
                                        <TabContent>
                                            <Row>
                                                <Col>
                                                    <ul>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> <strong>New Media College</strong> <em>(2010 - 2013)</em></li>
                                                        <li style={{paddingLeft: "25px"}}>Graduated as the best student majoring in I.T.</li>
                                                        <li><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> <strong>Technologia Creativa</strong> <em>(2014 - 2021)</em></li>
                                                        <li style={{paddingLeft: "25px"}}>Become the main programmer and has experience creating many websites.</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </TabContent>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-right wow fadeInRight" data-wow-delay=".4s">
                            <Image
                                src="/img/about-img.png"
                                alt="Bayu Kurniawan"
                                width={517}
                                height={541}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}