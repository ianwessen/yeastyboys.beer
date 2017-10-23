import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/header.js';

import '../stylesheets/index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="YeastyBoys.beer"
      meta={[
        { name: 'description', content: 'Beer' },
        { name: 'keywords', content: 'beer, brew' },
      ]}
    />
    <Header />
    <div className="page-container container">
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
