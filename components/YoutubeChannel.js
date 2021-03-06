import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col  } from 'react-bootstrap'
import "../lib/FontAwesome"

export default function YoutubeChannel({...pageProps}) {
    return (
        <section className="intro-video-area overlay section">
            <Image
                alt="Youtube Banner"
                src={pageProps.data.banner}
                layout="fill"
                objectFit="cover"
                quality={100}
                placeholder="blur"
                blurDataURL={pageProps.data.bannerBase64}
            />
            <Container>
                <Row>
                    <Col>
                        <div className="section-title white-text">
                            <span data-aos="fade-down" data-aos-delay="200">{pageProps.data.secondaryTitle}</span>
                            <h2 data-aos="fade-up" data-aos-delay="400">{pageProps.data.mainTitle}</h2>
                            <p data-aos="fade-up" data-aos-delay="600" dangerouslySetInnerHTML={{ __html: pageProps.data.description }}></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="intro-video-play">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-12">
                                    <div data-aos="zoom-in" data-aos-delay="200" className="play-thumb">
                                        <a href={pageProps.data.youtubeLink} target="_blank" className="video"><FontAwesomeIcon icon={['fab', 'youtube']} size="sm" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}