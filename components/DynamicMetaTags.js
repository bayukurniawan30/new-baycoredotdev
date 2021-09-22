import { useRouter } from 'next/router';
import Head from 'next/head'

function DynamicMetaTags({...pageProps}) {
    const router = useRouter()

    return (
        <Head>
            <meta name="keywords" content={pageProps.data.keywords} key="keywords" />
            <meta name="description" content={pageProps.data.description} key="description" />
            <meta name="og:title" content={pageProps.data.title} key="og:title" />
            <meta name="og:image" content={pageProps.data.image} key="og:image" />
            <meta name="og:url" content={process.env.NEXT_PUBLIC_WEB_URL + router.asPath} key="og:url" />
            <meta name="og:description" content={pageProps.data.description} key="og:description" />
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_WEB_URL + router.asPath} key="twitter:url" />
            <meta name="twitter:title" content={pageProps.data.title} key="twitter:title" />
            <meta name="twitter:description" content={pageProps.data.description} key="twitter:description" />
            <meta name="twitter:image" content={pageProps.data.image} key="twitter:image" />
            <link rel="canonical" href={process.env.NEXT_PUBLIC_WEB_URL + router.asPath} key="canonical" />
            <title key="title">{pageProps.data.title}</title>
        </Head>
    )
}

export default DynamicMetaTags