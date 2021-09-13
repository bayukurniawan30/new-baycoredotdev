import React from 'react';
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutMe from '../components/AboutMe'
import YoutubeChannel from '../components/YoutubeChannel'
import Portfolios from '../components/Portfolios'
import PurpleCms from '../components/PurpleCms'
import Contact from '../components/Contact'
import { getSingletonData, getCollectionData } from "../lib/api";

export async function getServerSideProps() {
	const websiteInformation = (await getSingletonData('website-information'))
	const metaTags           = (await getSingletonData('meta-tags'))

	const data = {
		siteName: websiteInformation.data["sitename"].value,
		description: websiteInformation.data["description"].value,
		logo: websiteInformation.data["logo"].value.full_path,
		favicon: websiteInformation.data["favicon"].value.full_path
	}

	const metaTagsData = {
		applicationName: metaTags.data["application-name"].value,
		appleMobileWebAppTitle: metaTags.data["apple-mobile-web-app-title"].value,
		appleTouchIcon: metaTags.data["apple-touch-icon"].value.full_path,
		webUrl: metaTags.data["web-url"].value,
		themeColor: metaTags.data["theme-color"].value,
		ogLocale: metaTags.data["og-locale"].value,
		ogType: metaTags.data["og-type"].value,
	}

	return {
		props: { data, metaTagsData },
	}
}

export default class IndexPage extends React.Component {
    constructor({...pageProps}) {
        super()
        this.pageProps   = pageProps
    }

    render() {
        return (
			<div>
				<Hero></Hero>
				<Services></Services>
				<AboutMe></AboutMe>
				<YoutubeChannel></YoutubeChannel>
				<Portfolios></Portfolios>
				<PurpleCms></PurpleCms>
				<Contact></Contact>
			</div>
		)
	}
}