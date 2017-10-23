import React from 'react';
import Link from 'gatsby-link';

export default () =>
    <section className="page page-index">
        <div className="page-index__masthead">
            <h1 className="text-center text-serif">YeastyBoys.beer</h1>
            <hr />
            <h5 className="text-center">A Homebrewing Blog</h5>
        </div>

        <section className="page-index__preview">
            <h4 className="text-serif page-index__preview-title"><Link to="/history-of-beer/">The History of Beer</Link></h4>
            <label><span className="strong">Jax Jones</span> &nbsp; Oct 12, 2017</label>    
            <p className="page-index__preview-body">
                If you’re searching for an original brewmaster to toast the next 
                time you knock back a cold one, you might be out of luck. It’s difficult 
                to attribute the invention of beer to a particular culture or time period, 
                but the world’s first fermented beverages most likely emerged alongside the 
                development of cereal agriculture some 12,000 years ago.
            </p>
        </section>


        <h3 className="">More recent articles</h3>
        
        <div className="page-index__row-thirds">
            <section className="page-index__preview-mini">
                <h6 className="text-serif page-index__preview-mini-title"><Link to="/">The World’s First Fermented Beverages</Link></h6>
                <label>
                    <span className="strong">Cam Irmas</span>
                    &nbsp; Oct 12, 2017
                </label>
            </section>

            <section className="page-index__preview-mini">
                <h6 className="text-serif page-index__preview-mini-title"><Link to="/">If You’re Searching for an Original Brewmaster</Link></h6>
                <label>
                    <span className="strong">Cam Irmas</span>
                    &nbsp; Mar 1, 2017
                </label>
            </section>

            <section className="page-index__preview-mini">
                <h6 className="text-serif page-index__preview-mini-title"><Link to="/">It’s Difficult to Attribute the Invention of Beer</Link></h6>
                <label>
                    <span className="strong">Cam Irmas</span>
                    &nbsp; Dec 26, 2016
                </label>
            </section>
        </div>
    </section>