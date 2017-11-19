module.exports = {
    siteMetadata: {
        title: `YeastyBoys.beer`,
    },
    plugins: [
	    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/posts`,
			},
	    },
	    `gatsby-transformer-remark`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
        	resolve: 'gatsby-transformer-remark',
        	options: []
        }
    ]
}
