module.exports = {

    pathPrefix: '/yeastyboys.beer',

    siteMetadata: {
        title: `YeastyBoys.beer`,
        author: `Ian Wessen`,
    },

    plugins: [

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: []
        }

    ]
}
