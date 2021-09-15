import Image from "next/image"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav } from 'react-bootstrap'
import { Link as ScrollLink } from 'react-scroll'
import "../lib/FontAwesome"

export default function NavigationBar({...pageProps}) {
    return (
        <header className="header index4">
            <div className="navbar-area sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <Navbar expand="lg">
                                <Navbar.Brand href="#" className="logo">
                                    <Image
                                        src={pageProps.logo}
                                        alt="Logo"
                                        width={180}
                                        height={35}
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                                <Navbar.Collapse id="navbarSupportedContent">
                                    <Nav as="ul" id="nav" className="ml-auto">
                                        <li className="nav-item"><Link href="/"><Nav.Link>Home</Nav.Link></Link></li>
                                        <li className="nav-item"><ScrollLink to="services" spy={true} smooth={false}>Services</ScrollLink></li>
                                        <li className="nav-item"><ScrollLink to="about" spy={true} smooth={false}>About Me</ScrollLink></li>
                                        <li className="nav-item"><ScrollLink to="portfolios" spy={true} smooth={false}>Portfolios</ScrollLink></li>
                                        <li className="nav-item"><Link href="/blog"><Nav.Link>Blog</Nav.Link></Link></li>
                                    </Nav>
                                </Navbar.Collapse>
                                <div className="button">
                                    <ScrollLink to="contact-us" spy={true} smooth={false} className="btn"><FontAwesomeIcon icon={['far', 'envelope']} size="sm" /> Contact Me</ScrollLink>
                                </div>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}