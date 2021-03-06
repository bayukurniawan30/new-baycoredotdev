import Image from "next/image"
import { Col } from 'react-bootstrap'

export default function PortfolioCard({...pageProps}) {
    return (
        <Col lg={4} md={6}>
            <div className="single-news">
                <div className="image">
                    <a href={pageProps.data.link.value.url} target="_blank">
                        <Image
                            src={pageProps.data.thumbnail.value.full_path}
                            alt={pageProps.data.title.value}
                            width={800}
                            height={453}
                            placeholder="blur"
                            blurDataURL={pageProps.data.thumbnail.value.base64.full_path}
                        />
                    </a>
                    <div className="meta-details">
                        <span>{pageProps.data.type.value}</span>
                    </div>
                </div>
                <div className="content-body text-center">
                    <h4 className="title"><a href={pageProps.data.link.value.url} target="_blank">{pageProps.data.title.value}</a></h4>
                </div>
            </div>
        </Col>
    )
}