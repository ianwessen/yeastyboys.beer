module.exports = {

    pathPrefix: '/yeastyboys.beer',

    siteMetadata: {
        title: `YeastyBoys.beer`,
    },

    plugins: [

        `gatsby-transformer-remark`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
	    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/posts`,
			},
	    },
        {
        	resolve: 'gatsby-transformer-remark',
        	options: []
        }

    ]
}
