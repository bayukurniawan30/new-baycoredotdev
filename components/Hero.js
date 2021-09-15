import Image from "next/image"
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Hero({...pageProps}) {
    return (
        <section className="hero-area index4">
            <div className="hero-inner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="home-slider">
                                <div className="hero-text">
                                    <h1 data-aos="fade-up" data-aos-delay="300">{pageProps.data.mainText}</h1>
                                    <p data-aos="fade-up" data-aos-delay="500">{pageProps.data.secondaryText}</p>
                                    { pageProps.data.cvButton == "1" &&
                                        <div className="button" data-aos="fade-up" data-aos-delay="700">
                                            <Button href={pageProps.data.cvButtonLink} target={pageProps.data.cvButtonLinkOpen} className="btn">{pageProps.data.cvButtonText}</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="personal-image" data-aos="fade-right" data-aos-delay="300">
                                <Image
                                    src={pageProps.data.mainImage}
                                    alt="Bayu Kurniawan"
                                    width={420}
                                    height={624}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}