import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
// // import PostIcons from "../components/PostIcons"
// // import Img from "gatsby-image"
import Layout from "../components/layout"
import Footer from '../components/footer';

// import Header from '../components/header';

// import { rhythm } from "../utils/typography"

// import '../styles/post.scss';
// import '../styles/crayon.css';

class PostTemplate extends Component {

  componentDidMount() {
      // console.log(document.getElementById('post-content').children)
      // document.getElementById('post-content').children
  }


  render() {

    const post = this.props.data.wordpressPost;
    const entryDate = new Date(post.date);

    
    return (
            <Layout
                    headerFontColor="dark"
                    headerSubTitle={post.title}
                >          
            <div className="post-wrapper" style={{padding: '16em 10em', backgroundColor: '#fff'}}>
              {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} /> */}
              <div className="post-timestamp">
                <span>📅</span>
                <time className="entry-date" dateTime={post.date}>{entryDate.toLocaleString('en-us', { month: 'long' , day: 'numeric', year: 'numeric'})}</time>
              </div>
              <div id="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
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
      date
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`


