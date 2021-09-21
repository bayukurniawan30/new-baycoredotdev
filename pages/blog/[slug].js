import React from 'react';
import Head from 'next/head'
import Image from "next/image"
import { getSingletonData, getCollectionData, getCollectionDataDetails } from "../../lib/api";
import { Container, Row, Col } from 'react-bootstrap'
import markdownToHtml from '../../lib/markdownToHtml'
import Moment from 'react-moment'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogWidgetRecentPosts from "../../components/BlogWidgetRecentPosts"
import SocialShare from "../../components/SocialShare"

export async function getServerSideProps(context) {
    const websiteInformation = (await getSingletonData('website-information'))
	const metaTags           = (await getSingletonData('meta-tags'))
    const contactSection     = (await getSingletonData('contact-section'))
	const footer             = (await getSingletonData('footer'))

	const blog               = (await getCollectionDataDetails('blogs/meet-purple-cms-a-content-management-system-based-on-cakephp-3'))
	const recentPost         = (await getCollectionData('blogs', 'created', 'desc', null, 5))
	const socialMedia        = (await getCollectionData('social-media'))

    const data = {
		siteName: websiteInformation.data.sitename.value,
		description: websiteInformation.data.description.value,
		logo: websiteInformation.data.logo.value.full_path,
		favicon: websiteInformation.data.favicon.value.full_path
	}

	const metaTagsData = {
		applicationName: metaTags.data.application_name.value,
		appleMobileWebAppTitle: metaTags.data.apple_mobile_web_app_title.value,
		appleTouchIcon: metaTags.data.apple_touch_icon.value.full_path,
		webUrl: metaTags.data.web_url.value,
		themeColor: metaTags.data.theme_color.value,
		ogLocale: metaTags.data.og_locale.value,
		ogType: metaTags.data.og_type.value
	}

    const blogData = {
        asd: blog,
        blog: blog.data,
        blogContent: await markdownToHtml(blog.data.content.value)
    }

    const recentPostData = {
		blogs: recentPost.data
	}

    const contactSectionData = {
		title: contactSection.data.title.value,
		description: contactSection.data.description.value,
		phone: contactSection.data.phone.value,
		email: contactSection.data.email.value,
		socialMediaTitle: contactSection.data.social_media_title.value,
		formNamePlaceholder: contactSection.data.form_name_placeholder.value,
		formEmailPlaceholder: contactSection.data.form_email_placeholder.value,
		formMessagePlaceholder: contactSection.data.form_message_placeholder.value,
		buttonText: contactSection.data.button_text.value,
		buttonLoadingText: contactSection.data.button_loading_text.value
	}

	const socialMediaData = {
		socialMedia: socialMedia.data
	}

	const footerData = {
		logo: footer.data.logo.value.full_path,
		description: await markdownToHtml(footer.data.description.value),
		secondColumnTitle: footer.data.second_column_title.value,
		thirdColumnTitle: footer.data.third_column_title.value,
		copyrightText: footer.data.copyright_text.value
	}

    return {
		props: { data, metaTagsData, blogData, recentPostData, contactSectionData, socialMediaData, footerData },
	}
}

export default class IndexPage extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps = pageProps
        this.pageTitle = "Blog"
        this.blog      = this.pageProps.blogData.blog
        this.content   = this.pageProps.blogData.blogContent
    }

    render() {
        console.log(this.pageProps.blogData.asd)
        return (
			<div>
                <Head>
                    <title>{this.pageTitle} - {this.pageProps.data.siteName}</title>
                </Head>

                <Breadcrumbs title={this.pageTitle}></Breadcrumbs>

                <div className="section blog-single">
                    <Container>
                        <Row>
                            <Col lg={8} md={7}>
                                <div className="post-thumbnils">
                                    <Image
                                        src={this.blog.thumbnail.value.full_path}
                                        alt={this.blog.title.value}
                                        layout="responsive"
                                        width={800}
                                        height={453}
                                    />
                                    <div className="author">
                                        <span>{this.blog.author.value}</span>
                                    </div>
                                </div>
                                <div className="post-details">
                                    <div className="detail-inner">
                                        <h2 className="post-title">
                                            <a>{this.blog.title.value}</a>
                                        </h2>
                                        <ul className="custom-flex post-meta">
                                            <li>
                                                <a href="#">Posted on
                                                    <Moment format=" DD MMMM YYYY">{this.blog.created}</Moment> 
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="post-content" dangerouslySetInnerHTML={{ __html: this.content }}></div>

                                        <div className="post-tags-media">
                                            <div className="post-tags popular-tag-widget mb-xl-40">
                                                <div className="post-social-media text-left">
                                                    <h5 className="share-title">Social Share</h5>
                                                    <SocialShare></SocialShare>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col as="aside" lg={4} md={5}>
                                <div className="sidebar">
                                    <BlogWidgetRecentPosts title="Recent Posts" list={this.pageProps.recentPostData}></BlogWidgetRecentPosts>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}