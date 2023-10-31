import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

import Img from 'gatsby-image';
import ImageFallback from '../components/ImageFallback';
import Helmet from 'react-helmet';


import ImageCache from '../components/ImageCache';

import '../styles/blog.scss';

class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            initialPhotoLoad: false
        }
    }

    render() {

        // const dataCMSPosts = this.props.data.allWordpressPost.edges.map(({ node }) => node)
        // const dataCMSPage = this.props.data.allWordpressPage.edges[0].node;

        // const headerImage = dataCMSPage.acf.header_image.localFile.childImageSharp.fluid;

        const {data: {allWordpressPost}, pageContext: {id, name}} = this.props;

        const postsCategory = allWordpressPost.edges.filter(({node}) => {

          if (node.categories.length) {
            return node.categories.reduce((p,c) => {
              return p || c.id === id
            }, false)
          }
          return false;
            
        }).map(({node: post}, i) => (
            <Link to={ '/blog/' + post.slug } className="item-blog-roll-link-wrapper">
                <div className="item-blog-roll">
                    <div className="item-blog-roll-title">{post.title}</div>
                    <div className="item-blog-roll-copy">
                        <div className="item-blog-roll-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                    </div>
                </div>
            </Link>
        ))

        console.log(postsCategory)
    

        const blogRoll = postsCategory

        console.log(name)

        return (
            <Layout
                headerFontColor="dark"
                headerFontSize="large"
                headerSubTitle={name}
            >
              <Helmet 
                title={`${name} - Skinny Tie Media`}
              />
                <div className="" style={{ flex: 1 }}>
                    <div className="blog-header-image-wrapper" style={{  }}>
                    {/* {headerImage && <Img fluid={headerImage} /> } */}
                    <ImageFallback />
                    </div>
                    <div className="post-wrapper" >
                        <div className="blog-roll-wrapper">
                            { blogRoll }
                        </div>
                    </div>
                </div>
                <Footer />
                {this.state.initialPhotoLoad && <ImageCache />}
            </Layout>
        )
    }
}
export default Category


export const query = graphql`
query {
  allWordpressPost {
    edges {
      node {
        slug,
        id,
        date,
        title,
        excerpt,
        categories {
          id
        }
      }   
    }
  }
}`
