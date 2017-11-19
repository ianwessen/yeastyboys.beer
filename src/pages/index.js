import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';


export default function Index({data}) {

  const { edges: posts } = data.allMarkdownRemark;
  
  return (

    <section className="page page-index">

        <div className="page-index__masthead">
            <h1 className="page-index__masthead-title text-center text-serif">YeastyBoys.beer</h1>
            <h5 className="page-index__masthead-subtitle text-center">Beer ▪ Bread ▪ Blog</h5>
        </div>


        <ul className="page-index__list">

            { posts
            .filter( post => post.node.frontmatter.title.length > 0 )
            .map( ({ node: post }) => {

              return (

                <li className="page-index__list-item" key={post.id}>
                    
                    <h5 className="text-serif page-index__list-item-title">
                        <Link to={post.frontmatter.path}>
                            {post.frontmatter.title}
                        </Link>
                    </h5>

                    <p className="page-index__list-item-subtitle">
                        {post.frontmatter.date}
                    </p>

                    <p className="page-index__list-item-body">
                        {post.excerpt}
                        &nbsp; 
                        <Link className="link-default" to={post.frontmatter.path}>
                            Keep reading
                        </Link>
                    </p>

                </li>

              );
            })}

        </ul>

    </section>
  );

}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;