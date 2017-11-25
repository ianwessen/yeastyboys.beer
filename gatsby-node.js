const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {

    console.log(boundActionCreators)
    console.log(graphql)
  
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve(`src/pages/post-template.js`);

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
                        id: node.id
                    }
                });

        });

    });
}

