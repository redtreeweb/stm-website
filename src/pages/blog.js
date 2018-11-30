import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

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

        const dataCMS = this.props.data.allWordpressPost.edges.map(({ node }) => node)

        const blogRoll = dataCMS.map((post, i) => (
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
                <div className="" style={{ flex: 1 }}>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '800px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>photo placeholder?</div>
                    <div className="post-wrapper" >
                        <div className="post-header post-featured-image">
                            {/* <Img fluid={featuredImage} /> */}
                        </div>
                        { blogRoll }
                    </div>
                </div>
                <Footer />
                {this.state.initialPhotoLoad && <ImageCache />}
            </Layout>
        )
    }
}
export default Blog


export const query = graphql`{
    allWordpressPost {
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
    }
  }`
