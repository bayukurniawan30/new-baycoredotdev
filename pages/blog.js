import React from 'react';
import Head from 'next/head'
import { getSingletonData, getCollectionData } from "../lib/api";
import { Container, Row, Col } from 'react-bootstrap'
import markdownToHtml from '../lib/markdownToHtml'
import Breadcrumbs from '../components/Breadcrumbs'
import BlogCard from "../components/BlogCard"
import BlogWidgetRecentPosts from "../components/BlogWidgetRecentPosts"

export async function getServerSideProps() {
    const websiteInformation = (await getSingletonData('website-information'))
	const metaTags           = (await getSingletonData('meta-tags'))
    const contactSection     = (await getSingletonData('contact-section'))
	const footer             = (await getSingletonData('footer'))

	const blogs              = (await getCollectionData('blogs'))
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

    const blogsData = {
		blogs: blogs.data
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
		props: { data, metaTagsData, blogsData, recentPostData, contactSectionData, socialMediaData, footerData },
	}
}

export default class IndexPage extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps = pageProps
        this.pageTitle = "Blog"
    }

    render() {
        return (
			<div>
                <Head>
                    <title>{this.pageTitle} - {this.pageProps.data.siteName}</title>
                </Head>

                <Breadcrumbs title={this.pageTitle}></Breadcrumbs>

                <div className="latest-news-area section">
                    <Container>
                        <Row>
                            <Col lg={8} md={7}>
                                <Row>
                                    {this.pageProps.blogsData.blogs.map((blog) => (
                                        <BlogCard key={blog.slug} data={blog}></BlogCard>
                                    ))}
                                </Row>
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