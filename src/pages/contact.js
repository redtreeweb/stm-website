// import Lethargy from "exports-loader?this.Lethargy!lethargy/lethargy";

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


import Layout from '../components/layout';
// import Slider from "react-slick";
import ContactForm from '../components/ContactForm';
// import ClientWall from '../components/ClientWall';

import _ from 'lodash';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);


        //   let scrollPosition = 0;
        //   if (this.props.location.hash === '#contact') {
        //     scrollPosition = 5;        
        //   }


        this.state = {
            windowWidth: null
        };
    }


    componentDidMount() {
        this.handleResize();
        window.addEventListener('wheel', this.handleScrollEvent, false);
        window.addEventListener('touchstart', this.handleTouchStart, false);
        window.addEventListener('touchmove', this.handleScrollEvent, false);
    }


    componentDidUpdate(prevProps, prevState) {

    }

    handleResize() {
        this.setState({ windowWidth: window.innerWidth });
    }


    render() {

        const { data } = this.props;

    
        const dataCMS = data.allWordpressPage.edges
            .filter(({ node }) => node.wordpress_parent === 316)
            .map(({ node }) => node); //filter(({node}) => node.wordpress_parent === 316).
    
        dataCMS.sort((a,b) => a.menu_order - b.menu_order);

        return (
            <Layout
                headerFontColor="light"
                pageName='contact'
            >
                <Helmet
                    title="Contact - Skinny Tie Media">
                    <html className="overflow-hidden" />
                    <body className="overflow-hidden" />
                    <meta name="description" content="Nice to meet you. What can we do for you?" />
                </Helmet>
                <div className={'fullpage-viewport'} >
                    <div 
                        id="fullpage-wrapper"
                        className="fullpage-wrapper" 
                    >
                        {/* SLIDE 6 -- HARD CODED FOR CONTACT */}
                        <div id="contact" className="index-slide section" style={{ backgroundColor: '#aaa' }}>
                            <div className="footer-content-wrapper section-banner">
                                <h1 className="section-title title-white">What's Your Story?</h1>

                                <ContactForm />

                                <section id="set-3" className="social-links">
                                    <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3b">
                                        <a href="https://vimeo.com/skinnytiemedia" target="_blank" className="hi-icon icon-vimeo">Vimeo</a>
                                        <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank" className="hi-icon icon-linkedin">LinkedIn</a>
                                        <a href="tel:+14125025054" target="_blank" className="hi-icon icon-phone">Phone<i className="material-icons">local_phone</i></a>
                                    </div>
                                </section>
                            </div>
                            { this.state.windowWidth < 480 ? <Img fluid={dataCMS[5].acf.background_image_mobile.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" />  :
                                <Img fluid={dataCMS[5].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" /> }        
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ContactPage;

export const query = graphql`
{
  firstItem: allWordpressPage(filter: {wordpress_id: {eq: 315}}) {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          header,
          background_image {
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 2100, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          },
          background_image_mobile {
            source_url
            localFile {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 1400, 1800 ], maxWidth: 2100, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }    
      }
    }
  },
  allWordpressPage(filter: {wordpress_parent: {eq: 316}}) {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          header,
          background_image {
            source_url
            localFile {
              childImageSharp {
                fluid(maxWidth: 1800, quality: 50) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          },
          background_image_mobile {
            source_url
            localFile {
              childImageSharp {
                fluid(srcSetBreakpoints: [ 1400, 1800 ], maxWidth: 1800, quality: 50) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }    
      }
    }
  }
}`;