
import React from 'react';
import Link from 'gatsby-link';


// Put a bunch of useful stuff in the footer


const Footer = () => (
    <section className="footer">
        <div className="container">
            <span className="footer__logo">
                <h6>🍺🍞</h6>
                <span>“Does butter have carbs?”</span>
                <h6>—Regina George</h6>
            </span>
            <div className="footer__navigation">
                <Link to="/about/" className="footer__navigation-item">
                    About
                </Link>
                <Link to="/contact/" className="footer__navigation-item">
                    Contact
                </Link>
                <Link to="/archive/" className="footer__navigation-item">
                    Archive
                </Link>
            </div>
        </div>
    </section>
)

export default Footer;