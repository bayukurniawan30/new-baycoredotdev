import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../lib/FontAwesome"

export default function ServiceCard({...pageProps}) {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className="single-service">
            <h3><a href="service-single.html">{pageProps.data.title.value}</a></h3>
            <div className="icon">
                <FontAwesomeIcon icon={[pageProps.data.font_awesome_type.value, pageProps.data.font_awesome_icon.value]} size="sm" />
            </div>
            <p>{pageProps.data.description.value}</p>
        </div>
    )
}