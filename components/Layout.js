import Head from 'next/head'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout({children, ...pageProps}) {
    return (
        <div>
            <Head>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                <meta name="author" content="Bayu Kurniawan" />
                <meta name="description" content={pageProps.data.description} key="description" />
                <meta name="keywords" content={pageProps.data.keywords} key="keywords" />
                <meta name='application-name' content={pageProps.metaTagsData.applicationName} />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={pageProps.metaTagsData.appleMobileWebAppTitle} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='theme-color' content={pageProps.metaTagsData.themeColor} />
                <link rel='apple-touch-icon' sizes='180x180' href={pageProps.metaTagsData.appleTouchIcon} />
                <link rel='manifest' href='/manifest.json' />
                <meta name="og:locale" content={pageProps.metaTagsData.ogLocale} />
                <meta name="og:title" content={pageProps.data.siteName} key="og:title" />
                <meta name="og:type" content={pageProps.metaTagsData.ogType} key="og:type" />
                <meta name="og:image" content={pageProps.data.logo} key="og:image" />
                <meta name="og:url" content={pageProps.metaTagsData.webUrl} key="og:url" />
                <meta name="og:description" content={pageProps.data.description} key="og:description" />
                <meta name="og:site_name" content={pageProps.data.siteName} />
                <meta name="twitter:card" content="summary" key="twitter:card" />
                <meta name="twitter:url" content={pageProps.metaTagsData.webUrl} key="twitter:url" />
                <meta name="twitter:title" content={pageProps.data.siteName} key="twitter:title" />
                <meta name="twitter:description" content={pageProps.data.description} key="twitter:description" />
                <meta name="twitter:image" content={pageProps.data.logo} key="twitter:image" />
                <link rel="canonical" href={pageProps.metaTagsData.webUrl} key="canonical" />
                <meta charSet="utf-8" />
                <title key="title">{pageProps.data.siteName}</title>
                <link rel="shortcut icon" href={pageProps.data.favicon} />
                <link href='https://fonts.googleapis.com/css?family=Raleway:200,300,400,700,900,800' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css?family=Roboto:200,300,400,900,700,500,300' rel='stylesheet' type='text/css' />
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-EFG7Q00ET7"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-EFG7Q00ET7');`,
                    }}
                />
            </Head>

            <NavigationBar logo={pageProps.data.logo}></NavigationBar>

            {children}

            <Footer data={pageProps.footerData} phone={pageProps.contactSectionData.phone} email={pageProps.contactSectionData.email} sosmed={pageProps.socialMediaData.socialMedia}></Footer>
        </div>
    );
}