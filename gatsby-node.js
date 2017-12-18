const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {

    const { createPage } = boundActionCreators;

    const postTemplate = path.resolve(`src/components/post-template.js`);

    return graphql(`{
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        date
                        path
                        title
                        author
                    }
                }
            }
        }
    }`)

    .then( result => {

        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges

            .forEach( ({ node }) => {

                createPage({
                    path: node.frontmatter.path,
                    component: postTemplate,
                    context: {
                        id: node.frontmatter.path
                    }
                });

        });

    });
};