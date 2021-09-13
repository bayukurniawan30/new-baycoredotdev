import Image from "next/image"
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Hero() {
    return (
        <section className="hero-area index4">
            <div className="hero-inner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="home-slider">
                                <div className="hero-text">
                                    <h1 data-aos="fade-up" data-aos-delay="300"><span>I'am</span>Bayu Kurniawan</h1>
                                    <p data-aos="fade-up" data-aos-delay="500">I'am a web developer and content creator located in Bali. Learning about web developing since I was in college made me continue to pursue this until now. The rapid development of technology in the world of web developing makes me even more excited.
                                    </p>
                                    <div className="button" data-aos="fade-up" data-aos-delay="700">
                                        <Button href="#" className="btn">Download CV</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="personal-image" data-aos="fade-right" data-aos-delay="300">
                                <Image
                                    src="/img/author.png"
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