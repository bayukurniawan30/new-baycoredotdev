import { Container, Row, Col, Button } from 'react-bootstrap'
import ServiceCard from './ServiceCard'

export default function Services({...pageProps}) {
    return (
        <section id="services" className="services section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title align-left">
                            <span data-aos="fade-down" data-aos-delay="200">{pageProps.data.secondaryTitle}</span>
                            <h2 data-aos="fade-up" data-aos-delay="400">{pageProps.data.mainTitle}</h2>
                        </div>
                    </Col>
                </Row>
                <div className="single-head">
                    <Row>
                        {pageProps.list.services.map((service) => (
                            <Col lg={3} md={6} key={service.title.value.replace(/\s/g, '_')}>
                                <ServiceCard data={service}></ServiceCard>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    )
}
