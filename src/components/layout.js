import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText 
} from './layout.module.css'
import Header from './header'

const Layout = ({sectionTitle, children}) => {
    return (
        <main className={container}>
            <title>{sectionTitle}</title>
            <nav>
                <Header className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/contact-form" className={navLinkText}>Names</Link></li>
                </Header>
            </nav>
            {children}
        </main>
    )
}

export default Layout