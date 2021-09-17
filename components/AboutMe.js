import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Button, Tabs, Tab, TabContent  } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function AboutMe({...pageProps}) {
    const d        = new Date();
    const fullYear = d.getFullYear();
    const myAge    = fullYear - 1992;

    const description = pageProps.data.description
    const injectMyAge = description.replace("{myAge}", myAge)
    
    return (
        <section id="about" className="about-us section">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-left">
                            <div className="section-title align-left">
                                <span data-aos="fade-down" data-aos-delay="200">{pageProps.data.secondaryTitle}</span>
                                <h2 data-aos="fade-up" data-aos-delay="400">{pageProps.data.mainTitle}</h2>
                            </div>
                            <div className="about-tab wow fadeInUp" data-wow-delay=".4s">
                                <Tabs defaultActiveKey="aboutMe" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="aboutMe" title="About Me">
                                        <TabContent>
                                            <Row>
                                                <Col dangerouslySetInnerHTML={{ __html: injectMyAge }}>
                                                </Col>
                                            </Row>
                                        </TabContent>
                                    </Tab>
                                    <Tab eventKey="skill" title="My Skills">
                                        <TabContent>
                                            <Row>
                                                <Col lg={4}>
                                                    <ul>
                                                        {pageProps.pgSkills.skills.map((skill) => <li key={skill.slug}><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> {skill.skill_name.value}</li>)}
                                                    </ul>
                                                </Col>
                                                <Col lg={4}>
                                                    <ul>
                                                        {pageProps.dsSkills.skills.map((skill) => <li key={skill.slug}><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> {skill.skill_name.value}</li>)}
                                                    </ul>
                                                </Col>
                                                <Col lg={4}>
                                                    <ul>
                                                        {pageProps.otSkills.skills.map((skill) => <li key={skill.slug}><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> {skill.skill_name.value}</li>)}
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </TabContent>
                                    </Tab>
                                    <Tab eventKey="education" title="Education">
                                        <TabContent>
                                            <Row>
                                                <Col>
                                                    <ul>
                                                        {pageProps.education.edu.map((edu) => <li key={edu.place.value.replace(/\s/g, '_')}><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> <strong>{edu.place.value}</strong> <em>({edu.year.value})</em><br />{edu.description.value}</li>)}
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
                                                        {pageProps.experience.exp.map((exp) => <li key={exp.experienced_in.value.replace(/\s/g, '_')}><FontAwesomeIcon icon={['far', 'check-circle']} size="sm" /> <strong>{exp.experienced_in.value}</strong> <em>({exp.year.value})</em><br />{exp.description.value}</li>)}
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
                                src={pageProps.data.image}
                                alt="Bayu Kurniawan"
                                width={517}
                                height={541}
                                quality={100}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}