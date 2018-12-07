import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const BlogSidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit:3) {
            edges {
              node {
                title
                slug
              }
            }
          },
          allWordpressCategory {
            edges {
              node {
                name,
                    slug
              }
            }
        }
      }
    `}
    render={data => {

        const recentPosts = data.allWordpressPost.edges.map(({node}) => <li><a href={'/blog/' + node.slug}>{node.title}</a></li>)

        return <div>
            <h4>More Posts</h4>
            <ul>{recentPosts}</ul>
        </div>
    }} />
)

export default BlogSidebar
