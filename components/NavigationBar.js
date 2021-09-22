import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav } from 'react-bootstrap'
import { Link as ScrollLink } from 'react-scroll'
import "../lib/FontAwesome"

function NavigationBar({...pageProps}) {
    const router = useRouter()

    return (
        <header className="header index4">
            <div className="navbar-area sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <Navbar expand="lg">
                                <Link href="/">
                                    <a>
                                    <Navbar.Brand className="logo">
                                        <Image
                                            src={pageProps.logo}
                                            alt="Logo"
                                            width={180}
                                            height={35}
                                        />
                                    </Navbar.Brand>
                                    </a>
                                </Link>
                                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                                <Navbar.Collapse id="navbarSupportedContent">
                                    {(() => {
                                        if (router.pathname == '/'){
                                            return (
                                                <Nav as="ul" id="nav" className="ml-auto">
                                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                                    <li className="nav-item"><ScrollLink to="services" spy={true} smooth={false}>Services</ScrollLink></li>
                                                    <li className="nav-item"><ScrollLink to="about" spy={true} smooth={false}>About Me</ScrollLink></li>
                                                    <li className="nav-item"><ScrollLink to="portfolios" spy={true} smooth={false}>Portfolios</ScrollLink></li>
                                                    <li className="nav-item"><Link href="/blog"><a className="nav-link">Blog</a></Link></li>
                                                </Nav>
                                            )
                                        }
                                        else {
                                            return (
                                                <Nav as="ul" id="nav" className="ml-auto">
                                                    <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
                                                    <li className="nav-item"><Link href="/#services"><ScrollLink to="services" spy={true} smooth={false}>Services</ScrollLink></Link></li>
                                                    <li className="nav-item"><Link href="/#about"><ScrollLink to="about" spy={true} smooth={false}>About Me</ScrollLink></Link></li>
                                                    <li className="nav-item"><Link href="/#portfolios"><ScrollLink to="portfolios" spy={true} smooth={false}>Portfolios</ScrollLink></Link></li>
                                                    <li className="nav-item"><Link href="/blog"><a className="nav-link">Blog</a></Link></li>
                                                </Nav>
                                            )
                                        }
                                    })()}
                                </Navbar.Collapse>

                                {(() => {
                                    if (router.pathname == '/'){
                                        return (
                                            <div className="button">
                                                <ScrollLink to="contact-us" spy={true} smooth={false} className="btn"><FontAwesomeIcon icon={['far', 'envelope']} size="sm" /> Contact Me</ScrollLink>
                                            </div>
                                        )    
                                    }
                                    else {
                                        return (
                                            <div className="button">
                                                <Link href="/#contact-us"><ScrollLink to="contact-us" spy={true} smooth={false} className="btn"><FontAwesomeIcon icon={['far', 'envelope']} size="sm" /> Contact Me</ScrollLink></Link>
                                            </div>
                                        )
                                    }
                                })()}
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavigationBar
