import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';


export default function Archive({data}) {

  const { edges: posts } = data.allMarkdownRemark;
  
  return (

    <section className="page page-archive">

        <ul className="page-archive__list">
            
            <h2 className="page-archive__title">Archive</h2>

            { posts
            .filter( post => post.node.frontmatter.title.length > 0 )
            .map( ({ node: post }) => {

              return (

                <li className="page-archive__list-item" key={post.id}>
                    
                    <h5 className="text-serif page-archive__list-item-title">
                        <Link to={post.frontmatter.path}>
                            {post.frontmatter.title}
                        </Link>
                    </h5>

                    <p className="page-archive__list-item-subtitle">
                        <span className="page-archive__list-item-author">
                            {post.frontmatter.author}
                        </span>

                        <span className="page-archive__list-item-date">
                            {post.frontmatter.date}
                        </span>
                    </p>

                </li>

              );
            })}

        </ul>

    </section>
  );

}

export const archiveQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            path
          }
        }
      }
    }
  }
`;