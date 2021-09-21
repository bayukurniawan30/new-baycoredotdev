import Link from 'next/link';
import Moment from 'react-moment'

export default function BlogWidgetRecentPosts({...pageProps}) {
    return (
        <div className="widget popular-feeds">
            <h5 className="widget-title">{pageProps.title}</h5>
            <div className="popular-feed-loop">
                {pageProps.list.blogs.map((blog) => (
                    <div key={blog.slug} className="single-popular-feed">
                        <div className="feed-desc">
                            <h6 className="post-title">
                                <Link href={`/blog/${blog.slug}`}>
                                    <a>{blog.title.value}</a>
                                </Link>
                            </h6>
                            <span className="time">
                                <Moment format="DD MMMM YYYY">
                                    {blog.created}
                                </Moment>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}