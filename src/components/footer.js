
import React from 'react';
import Link from 'gatsby-link';


// Put a bunch of useful stuff in the footer


const Footer = () => (
    <section className="footer">
        <div className="container">
            <span className="footer__logo">
                <span>Does butter have carbs?</span>
                <h6>Regina George</h6>
            </span>
            <ul className="footer__list footer__navigation">
            	<h6>Navigation</h6>
            	<li className="footer__list-item"><a href="">About</a></li>
            	<li className="footer__list-item"><a href="">Contact</a></li>
            	<li className="footer__list-item"><a href="">Archive</a></li>
            </ul>
        </div>
    </section>
)

export default Footer;