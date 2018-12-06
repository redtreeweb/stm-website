import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imageHat from '../images/hat.jpg';

import ImageCache from '../components/ImageCache';


class OurApproach extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPhotoLoad: false
    }
  }

render() {
  const dataCMS = this.props.data.allWordpressPage.edges.find(({node}) => node.wordpress_id === 343);

    return (
      <Layout
        headerFontColor="dark"
        headerSubTitle="WE LIKE TO MAKE S#*T THAT LOOKS GOOD – AND MATTERS"
      >
        {/* figure out if this image approach is the best */}
        <div className="content-featured-image-fixed our-approach" onLoad={() => this.setState({initialPhotoLoad: true})}></div> 
        {/* <div className="" style={{ flex: 1 }}> */}
        <div className="content-featured-image-fixed our-approach spacer"></div>
          <div class="wrapper content-wrapper skinny">
            <div class="row">
              <div class="large-8 columns skinny-copy" dangerouslySetInnerHTML={{__html: dataCMS.node.content}}></div>
              <div class="large-4 columns quote" dangerouslySetInnerHTML={{__html: dataCMS.node.acf.service_list}}></div>
            </div>
          </div>
        {/* </div> */}
        {this.state.initialPhotoLoad && <ImageCache />}
        <Footer />
      </Layout>
    )
  }
}

export default OurApproach


export const query = graphql`
{
  allWordpressPage {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          service_list
        }    
      }
    }
  }
}`