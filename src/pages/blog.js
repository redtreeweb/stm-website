import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';


import Layout from '../components/layout';
import Footer from '../components/footer';
import FormSubscribe from '../components/FormSubscribe';

import Img from "gatsby-image"


import ImageCache from '../components/ImageCache';

import '../styles/blog.scss';

class Blog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            initialPhotoLoad: false
        }
    }

    render() {

        const dataCMSPosts = this.props.data.allWordpressPost.edges.map(({ node }) => node)
        const dataCMSPage = this.props.data.allWordpressPage.edges[0].node;

        const headerImage = dataCMSPage.acf.header_image.localFile.childImageSharp.fluid;

        

        const blogRoll = dataCMSPosts.map((post, i) => (
            <Link to={ '/blog/' + post.slug } className="item-blog-roll-link-wrapper">
                <div className="item-blog-roll">
                    <div className="item-blog-roll-title">{post.title}</div>
                    {post.featured_media && post.featured_media.localFile && <Img fluid={ post.featured_media.localFile.childImageSharp.fluid} /> }
                    <div className="item-blog-roll-copy">
                        <div className="item-blog-roll-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                    </div>
                </div>
            </Link>
        ))


        return (
            <Layout
                headerFontColor="dark"
                headerFontSize="large"
                headerSubTitle="BLOG"
            >
              <Helmet 
                title={`Blog - Skinny Tie Media`}
              >
                <meta name="description" content="We don’t have a blog to brag or to drive traffic. We have this blog to communicate the larger visions we have for our company, ourselves, & our work." />
              </Helmet>
                <div className="" style={{ flex: 1 }}>
                    <div className="blog-header-image-wrapper" style={{  }}>
                    {headerImage && <Img fluid={headerImage} /> }
                    </div>
                    <div className="post-wrapper" >
                        <div className="post-header post-featured-image">
                            {/* <Img fluid={featuredImage} /> */}
                        </div>
                        <div className="blog-roll-wrapper">
                            { blogRoll }
                        </div>
                    </div>
                </div>
                <FormSubscribe />
                <Footer />
                {this.state.initialPhotoLoad && <ImageCache />}
            </Layout>
        )
    }
}
export default Blog


export const query = graphql`{
    allWordpressPost(sort: {fields: [date],  order: DESC}) {
      edges {
        node {
          date,
          excerpt,
          title,
          slug,
          featured_media {
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1400, quality: 70) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
          }
        }
      }
    },
    allWordpressPage(filter: {wordpress_id: {eq: 467}}, sort: {fields: [menu_order],  order: ASC}) {
        edges {
          node {
            slug,
            wordpress_parent,
            wordpress_id,
            content,
            menu_order,
            acf {
              header_image {
                localFile {
                  childImageSharp {
                    id
                    fluid(maxWidth: 1400, quality: 70) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
  }`
