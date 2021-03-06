import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

export default function Breadcrumbs({ ...pageProps }) {
    return (
        <div className="breadcrumbs">
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="breadcrumbs-content">
                            <h1 className="page-title">{pageProps.title}</h1>
                        </div>
                        <ul className="breadcrumb-nav">
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li>{pageProps.title}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}