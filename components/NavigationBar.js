import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav } from 'react-bootstrap'
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
                                        <li className="nav-item"><Nav.Link href="#">Home</Nav.Link></li>
                                        <li className="nav-item"><Nav.Link href="#">Services</Nav.Link></li>
                                        <li className="nav-item"><Nav.Link href="#">Portfolios</Nav.Link></li>
                                        <li className="nav-item"><Nav.Link href="#">Blog</Nav.Link></li>
                                    </Nav>
                                </Navbar.Collapse>
                                <div className="button">
                                    <a href="#" className="btn"><FontAwesomeIcon icon={['far', 'envelope']} size="sm" /> Contact Me</a>
                                </div>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}