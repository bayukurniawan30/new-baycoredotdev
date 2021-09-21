import React from 'react';
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutMe from '../components/AboutMe'
import YoutubeChannel from '../components/YoutubeChannel'
import Portfolios from '../components/Portfolios'
import PurpleCms from '../components/PurpleCms'
import Contact from '../components/Contact'
import { getSingletonData, getCollectionData } from "../lib/api";
import markdownToHtml from '../lib/markdownToHtml'

export async function getServerSideProps() {
	const websiteInformation = (await getSingletonData('website-information'))
	const metaTags           = (await getSingletonData('meta-tags'))
	const heroSection        = (await getSingletonData('hero-section'))
	const servicesSection    = (await getSingletonData('services-section'))
	const aboutSection       = (await getSingletonData('about-me'))
	const youtubeSection     = (await getSingletonData('youtube-section'))
	const portfoliosSection  = (await getSingletonData('portfolios-section'))
	const purplecmsSection   = (await getSingletonData('purple-cms-section'))
	const contactSection     = (await getSingletonData('contact-section'))
	const footer             = (await getSingletonData('footer'))
	
	const services           = (await getCollectionData('services'))
	const programmingSkills  = (await getCollectionData('programming-skills'))
	const designSkills       = (await getCollectionData('design-skills'))
	const otherSkills        = (await getCollectionData('other-skills'))
	const education          = (await getCollectionData('education'))
	const experience         = (await getCollectionData('experience'))
	const socialMedia        = (await getCollectionData('social-media'))
	const portfolios         = (await getCollectionData('portfolios'))

	const data = {
		siteName: websiteInformation.data.sitename.value,
		description: websiteInformation.data.description.value,
		keywords: websiteInformation.data.keywords.value,
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

	const heroSectionData = {
		mainText: heroSection.data.main_text.value,
		secondaryText: heroSection.data.secondary_text.value,
		cvButton: heroSection.data.cv_button.value,
		cvButtonText: heroSection.data.cv_button_text.value,
		cvButtonLink: heroSection.data.cv_button_link.value.url,
		cvButtonLinkOpen: heroSection.data.cv_button_link.value.target,
		mainImage: heroSection.data.main_image.value.full_path
	}

	const servicesSectionData = {
		mainTitle: servicesSection.data.main_title.value,
		secondaryTitle: servicesSection.data.secondary_title.value,
	}

	const servicesData = {
		services: services.data
	}

	const aboutSectionData = {
		mainTitle: aboutSection.data.main_title.value,
		secondaryTitle: aboutSection.data.secondary_title.value,
		description: await markdownToHtml(aboutSection.data.description.value),
		image: aboutSection.data.image.value.full_path
	}

	const pgSkillsData = {
		skills: programmingSkills.data
	}

	const dsSkillsData = {
		skills: designSkills.data
	}

	const otSkillsData = {
		skills: otherSkills.data
	}

	const eduData = {
		edu: education.data
	}
	
	const expData = {
		exp: experience.data
	}

	const youtubeSectionData = {
		mainTitle: youtubeSection.data.main_title.value,
		secondaryTitle: youtubeSection.data.secondary_title.value,
		description: youtubeSection.data.description.value,
		youtubeLink: youtubeSection.data.youtube_link.value.url,
		banner: youtubeSection.data.banner.value.full_path
	}

	const portfoliosSectionData = {
		title: portfoliosSection.data.title.value,
		description: portfoliosSection.data.description.value
	}

	const portfoliosData = {
		portfolios: portfolios.data
	}

	const purplecmsSectionData = {
		mainTitle: purplecmsSection.data.main_title.value,
		secondaryTitle: purplecmsSection.data.secondary_title.value,
		description: purplecmsSection.data.description.value,
		buttonText: purplecmsSection.data.button_text.value,
		buttonLink: purplecmsSection.data.button_link.value
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
		props: { data, metaTagsData, heroSectionData, servicesSectionData, servicesData, aboutSectionData, pgSkillsData, dsSkillsData, otSkillsData, eduData, expData, youtubeSectionData, portfoliosSectionData, purplecmsSectionData, contactSectionData, socialMediaData, footerData, portfoliosData },
	}
}

export default class IndexPage extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
		this.hero        = this.pageProps.heroSectionData
		this.services    = this.pageProps.servicesSectionData
		this.about       = this.pageProps.aboutSectionData
		this.pgSkills    = this.pageProps.pgSkillsData
		this.dsSkills    = this.pageProps.dsSkillsData
		this.otSkills    = this.pageProps.otSkillsData
		this.exp         = this.pageProps.expData
		this.edu         = this.pageProps.eduData
		this.youtube     = this.pageProps.youtubeSectionData
		this.portfolios  = this.pageProps.portfoliosSectionData
		this.purpleCms   = this.pageProps.purplecmsSectionData
		this.contact     = this.pageProps.contactSectionData
    }

    render() {
        return (
			<div>
				<Hero data={this.hero}></Hero>
				<Services data={this.services} list={this.pageProps.servicesData} dsskills={this.pageProps.dsSkillsData}></Services>
				<AboutMe data={this.about} pgSkills={this.pgSkills} dsSkills={this.dsSkills} otSkills={this.otSkills} education={this.edu} experience={this.exp}></AboutMe>
				<YoutubeChannel data={this.youtube}></YoutubeChannel>
				<Portfolios data={this.portfolios} list={this.pageProps.portfoliosData}></Portfolios>
				<PurpleCms data={this.purpleCms}></PurpleCms>
				<Contact data={this.contact} sosMed={this.pageProps.socialMediaData}></Contact>
			</div>
		)
	}
}