import Image from "next/image"
import { Container, Row, Col, Badge } from 'react-bootstrap'

export default function Portfolios() {
    return (
        <div id="portfolios" className="latest-news-area section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title">
                            <h2 data-aos="fade-up" data-aos-delay="200">Latest Works</h2>
                            <p data-aos="fade-up" data-aos-delay="400">My website portfolios and CMS (Content Management System).</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6}>
                        <div data-aos="fade-up" data-aos-delay="200" className="single-news">
                            <div className="image">
                                <Image
                                    src="/img/about-img.png"
                                    alt="Bayu Kurniawan"
                                    width={517}
                                    height={541}
                                />
                                <div className="meta-details">
                                    <span>BY TIM NORTON</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title"><a href="blog-single-sidebar.html">Make your team a Design driven
                                        company</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div data-aos="fade-up" data-aos-delay="200" className="single-news">
                            <div className="image">
                                <Image
                                    src="/img/about-img.png"
                                    alt="Bayu Kurniawan"
                                    width={517}
                                    height={541}
                                />
                                <div className="meta-details">
                                    <span>BY TIM NORTON</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title"><a href="blog-single-sidebar.html">The newest web framework that changed
                                        the world</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div data-aos="fade-up" data-aos-delay="200" className="single-news">
                            <div className="image">
                                <Image
                                    src="/img/about-img.png"
                                    alt="Bayu Kurniawan"
                                    width={517}
                                    height={541}
                                />
                                <div className="meta-details">
                                    <span>Content Management System</span>
                                </div>
                            </div>
                            <div className="content-body">
                                <h4 className="title"><a href="blog-single-sidebar.html">Purple CMS</a></h4>
                                <p>sdf sdf sdf sdfwsdf</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}