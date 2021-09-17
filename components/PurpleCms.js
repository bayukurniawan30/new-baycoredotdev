import { Container, Row, Col  } from 'react-bootstrap'

export default function PurpleCMS({...pageProps}) {
    return (
        <section className="section free-version-banner">
            <Container>
                <Row className="align-items-center">
                    <Col lg={{ span: 6, offset: 3 }}>
                        <div className="section-title mb-60">
                            <span data-aos="fade-down" data-aos-delay="200" className="text-white">{pageProps.data.secondaryTitle}</span>
                            <h2 data-aos="fade-up" data-aos-delay="400" className="text-white">{pageProps.data.mainTitle}</h2>
                            <p data-aos="fade-up" data-aos-delay="600" className="text-white">{pageProps.data.description}</p>

                            <div className="button">
                                <a data-aos="fade-up" data-aos-delay="800" href={pageProps.data.buttonLink} target="_blank" className="btn">{pageProps.data.buttonText}</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}