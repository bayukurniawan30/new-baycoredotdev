import Link from "next/link"
import Image from "next/image"
import { Col } from 'react-bootstrap'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../lib/FontAwesome"

export default function BlogCard({...pageProps}) {
    return (
        <Col lg={6} md={6}>
            <div data-aos="fade-up" data-aos-delay="200" className="single-news">
                <div className="image">
                    <Link href={`/blog/${pageProps.data.slug}`}>
                        <a>
                            <Image
                                src={pageProps.data.thumbnail.value.full_path}
                                alt={pageProps.data.title.value}
                                width={800}
                                height={453}
                            />
                        </a>
                    </Link>
                    <div className="meta-details">
                        <span>by {pageProps.data.author.value}</span>
                    </div>
                </div>
                <div className="content-body">
                    <h4 className="title"><Link href={`/blog/${pageProps.data.slug}`}><a>{pageProps.data.title.value}</a></Link></h4>
                    <small className="time text-muted">
                        <FontAwesomeIcon icon={['far', 'calendar-alt']} size="sm" />
                        <Moment format="DD MMMM YYYY">
                            {pageProps.data.created}
                        </Moment>
                    </small>
                    <p className="mt-2">{pageProps.data.excerpt.value}</p>
                </div>
            </div>
        </Col>
    )
}