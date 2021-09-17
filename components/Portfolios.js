import { Container, Row, Col } from 'react-bootstrap'
import PortfolioCard from "./PortfolioCard"

export default function Portfolios({...pageProps}) {
    return (
        <div id="portfolios" className="latest-news-area section">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title">
                            <h2 data-aos="fade-up" data-aos-delay="200">{pageProps.data.title}</h2>
                            <p data-aos="fade-up" data-aos-delay="400">{pageProps.data.description}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {pageProps.list.portfolios.map((portfolio) => (
                        <PortfolioCard key={portfolio.slug} data={portfolio}></PortfolioCard>
                    ))}
                </Row>
            </Container>
        </div>
    )
}