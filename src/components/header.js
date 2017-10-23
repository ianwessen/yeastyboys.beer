
import React from 'react';
import Link from 'gatsby-link';


const Header = () => (
    <section className="header">
        <div className="container">
            <span className="header__logo">
                <Link to="/">YeastyBoys.beer</Link>
            </span>
            <div className="header__navigation">
                <Link to="/about/" className="header__navigation-item">
                    About
                </Link>
                <Link to="/counter/" className="header__navigation-item">
                    Read
                </Link>
                <Link to="/page-2/" className="header__navigation-item">
                    Contact
                </Link>
            </div>
        </div>
    </section>
)

export default Header;