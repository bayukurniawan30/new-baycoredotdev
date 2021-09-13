import { useEffect } from "react"
import Router from "next/router"
import Layout from "../components/Layout"
import NProgress from "nprogress"
import AOS from "aos"
import "bootstrap/dist/css/bootstrap.min.css"
import "nprogress/nprogress.css"
import "../node_modules/aos/dist/aos.css"
import "../styles/main.css"

NProgress.configure({
	minimum: 0.3,
	easing: 'ease',
	speed: 800,
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

    return (
		<>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</>
	) 
}

export default MyApp
