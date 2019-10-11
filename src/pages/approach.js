import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Footer from '../components/footer';

import Img from 'gatsby-image';
import imageHat from '../images/hat.jpg';
import imageClientWall from '../images/STM_ClientLogos_1.jpg';

import ImageCache from '../components/ImageCache';

// has the grid
import '../styles/grid-wall.scss';


class OurApproach extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPhotoLoad: false
    }
  }

render() {
  const dataCMS = this.props.data.allWordpressPage.edges.find(({node}) => node.wordpress_id === 343);


  // const dataClientLogos = this.props.data.clients.edges.map(({node}) => node) //.find(({node}) => )

  // console.log(dataClientLogos)

// const clientWall = dataClientLogos.map(d => <div className={'grid-client-logo'}>
//   <Img 
//     fluid={d.acf.client_logo.localFile.childImageSharp.fluid}
//     objectFit="cover"
//     objectPosition="50% 50%"
//   />
// </div>)



    return (
      <Layout
        headerFontColor="dark"
        headerSubTitle="WE LIKE TO MAKE S#*T THAT LOOKS GOOD – AND MATTERS"
      >
         <Helmet 
          title={`Approach - Skinny Tie Media`}
        >
          <meta name="description" content="We hold a firm belief that the craft of producing communication tools is as equally as important as the strategy that goes into it." />
        </Helmet>
        {/* figure out if this image approach is the best */}
        <div className="content-featured-image-fixed our-approach" onLoad={() => this.setState({initialPhotoLoad: true})}></div> 
        {/* <div className="" style={{ flex: 1 }}> */}
        <div className="content-featured-image-fixed our-approach spacer"></div>
          <div class="wrapper content-wrapper skinny">
            <div class="row">
              <div class="large-8 columns skinny-copy" dangerouslySetInnerHTML={{__html: dataCMS.node.content}}></div>
              <div class="large-4 columns quote" dangerouslySetInnerHTML={{__html: dataCMS.node.acf.service_list}}></div>
            </div>
            {/* <div class="row client-wall">
              <img src={imageClientWall} />
            </div>
            <hr />
            <p>(above image file ^)<br/>(below new grid V)</p>
            <hr />
            <div className="grid-client">
              {[clientWall,clientWall,clientWall]}
            </div> */}
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
  },
  clients: allWordpressPage(filter: {wordpress_parent: {eq: 343}}, sort: {fields: [menu_order],  order: ASC}) {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          client_name
          client_logo {
            localFile {
              childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
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