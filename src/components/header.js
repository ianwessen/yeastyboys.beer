
import React from 'react';
import Link from 'gatsby-link';


const Header = () => (
    <section className="header">
        <div className="container">
            <span className="header__logo">
                <Link to="/">🍺 &nbsp; YeastyBoys.beer</Link>
            </span>
            <div className="header__navigation">
                <Link to="/about/" className="header__navigation-item">
                    About
                </Link>
                <Link to="/contact/" className="header__navigation-item">
                    Contact
                </Link>
                <Link to="/archive/" className="header__navigation-item">
                    Archive
                </Link>
            </div>
        </div>
    </section>
)

export default Header;