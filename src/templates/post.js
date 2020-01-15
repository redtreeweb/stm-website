import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// // import PostIcons from "../components/PostIcons"
import Img from "gatsby-image"
import ImageFallback from '../components/ImageFallback';
import Layout from "../components/layout";
import BlogSidebar from '../components/blog/BlogSidebar';
import Footer from '../components/footer';
import FormSubscribe from '../components/FormSubscribe';

import Helmet from 'react-helmet';

import '../styles/post.scss';


class PostTemplate extends Component {

  componentDidMount() {
    // console.log(document.getElementById('post-content').children)
    // document.getElementById('post-content').children
  }


  render() {

    const post = this.props.data.wordpressPost;
    const entryDate = new Date(post.date);

    const featuredImage = post.featured_media && post.featured_media.localFile && post.featured_media.localFile.childImageSharp.fluid

    return (
      <Layout
        headerFontColor="dark"
        headerSubTitle={post.title}
      >
        <Helmet
          title={`${post.title} - Skinny Tie Media`}
        />
        <div className="post-wrapper" >
          <div className="post-header post-featured-image">
            {!!featuredImage ? <Img fluid={featuredImage} /> : <ImageFallback />}
          </div>
          <div className="post-content" >
            <div className="post-meta">
              <div className="post-meta__content">
                <div className="post-meta__form">
                </div>
                <div className="post-meta-time-stamp">
                  <span>📅</span>
                  <time className="entry-date" dateTime={post.date}>{entryDate.toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
                {post.acf.location && <div className="post-meta-location">
                  <span>🌎</span>
                  <span>{post.acf.location}</span>
                </div>}
              </div>
              {/* <div className="post-meta__spacer"></div> */}
            </div>
            <div className="post-content-copy" dangerouslySetInnerHTML={{ __html: post.content }} />
            <BlogSidebar />
          </div>
          <FormSubscribe />
        </div>
        <Footer />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title,
      content,
      date,
      acf {
        location
      },
      featured_media {
        source_url,
        localFile {
          childImageSharp {
              fluid(maxWidth: 1400, quality: 70) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`


