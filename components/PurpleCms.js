import { Container, Row, Col  } from 'react-bootstrap'

export default function PurpleCMS() {
    return (
        <section className="section free-version-banner">
            <Container>
                <Row className="align-items-center">
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="section-title mb-60">
                            <span data-aos="fade-down" data-aos-delay="200" className="text-white">Content Management System</span>
                            <h2 data-aos="fade-up" data-aos-delay="400" className="text-white">PURPLE CMS</h2>
                            <p data-aos="fade-up" data-aos-delay="600" className="text-white">Purple is flexible, user-friendly, and customizable Content Management System.<br /> Aiming to make it easier for users and developers to create a website, whether simple or advanced.</p>

                            <div className="button">
                                <a data-aos="fade-up" data-aos-delay="800" href="https://docs.purple-cms.com/#/" target="_blank" className="btn">Read Documentation</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}