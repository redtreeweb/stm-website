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

// import '../styles/slick/slick.scss';
// import '../styles/grid-wall.scss';

// import ImageCache from '../components/ImageCache';


// const numSlides = 5;



class ContactPage extends React.Component {

  constructor(props) {
      super(props)


    //   let scrollPosition = 0;
    //   if (this.props.location.hash === '#contact') {
    //     scrollPosition = 5;        
    //   }


    this.state = {
      windowWidth: null
    }

    // this.handleButtonPress = this.handleButtonPress.bind(this);
    // this.handleTouchStart = this.handleTouchStart.bind(this);
    // this.handleScrollEvent = this.handleScrollEvent.bind(this);
    // this.handleResize = this.handleResize.bind(this);
  }


  componentDidMount() {
    this.handleResize();
    window.addEventListener('wheel', this.handleScrollEvent, false);
    window.addEventListener('touchstart', this.handleTouchStart, false);
    window.addEventListener('touchmove', this.handleScrollEvent, false);
    // window.addEventListener('scroll', this.handleScrollEvent, false);


    // window.addEventListener('wheel', _.debounce(this.handleScrollEvent, 0, {leading: false, trailing: true}));
    // this.lethargy = new Lethargy(5, 50, .05); //helps with the scroll

    // window.addEventListener('resize', this.handleResize, false);

    function is_touch_device() {
      // var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      // var mq = function(query) {
      //   return window.matchMedia(query).matches;
      // }
    
      // if (('ontouchstart' in window)) {
      //   return true;
      // }
    
      // // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // // https://git.io/vznFH
      // var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      // return mq(query);
    }   
    
    // this.setState({isTouchable: is_touch_device()})
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps, prevState)
  // }

  componentDidUpdate(prevProps, prevState) {

    // console.log(prevProps, prevState)

    // if (this.props.location.hash === '#contact' && prevState.scrollPosition !== 5) {
    //   // return Object.assign({}, prevState, {scrollPosition: 5})
    //   document.getElementById('fullpage-wrapper').style.transition = 'none';
    //   this.setState({scrollPosition: 5}, () => {

    //     window.setTimeout(() => document.getElementById('fullpage-wrapper').style.transition = '', 500);

    //   });
    // }

    // console.log(this.props);

    // if (this.props.location.state.hasOwnProperty('scrollPosition')) {

    //   const {scrollPosition} = this.props.location.state;

    //   console.log(scrollPosition)
    //   if (scrollPosition !== this.state.scrollPosition) {
    //     console.log(scrollPosition)
    //     this.setState({scrollPosition})

    //   }
    // }
  }

  handleButtonPress() {
    // window.location.hash = '';
    // this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, numSlides)});
  }

  handleTouchStart(e) {
    // this.setState({posTouchStart: e.touches[0].clientY})
  }

  handleScrollEvent(e) {

    // if (this.lethargy.check(e) || e.type === 'touchmove') {

    //   window.removeEventListener('wheel', this.handleScrollEvent);

    //   window.removeEventListener('touchmove', this.handleScrollEvent);

    //   let scrollDirection =  e.deltaY / Math.abs(e.deltaY);

    //   if (e.type === 'touchmove') {
    //     const {posTouchStart} = this.state;
    //     const posTouchChange = e.touches[0].clientY; //e.touches[0].originalEvent.changedTouches[0].clientY

    //     scrollDirection =  (posTouchStart - posTouchChange) / Math.abs((posTouchStart - posTouchChange))
    //   }


    //   // window.location.hash = '';
    //   // removes hash
    //   window.history.replaceState("", document.title, window.location.pathname + window.location.search);

    //   this.setState({scrollPosition: Math.max(Math.min(this.state.scrollPosition + (scrollDirection * 1), numSlides),0)});
    //   setTimeout(() => window.addEventListener('wheel', this.handleScrollEvent, false), 1200);
    //   setTimeout(() => window.addEventListener('touchmove', this.handleScrollEvent, false), 1200);
    // }
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }


  render() {

  
    // const scrollPositionWrapper = this.section ? this.state.scrollPosition * this.section.getBoundingClientRect().height: 0;
    // const transformWrapper = `translate3d(0, ${-scrollPositionWrapper}px, 0)`

    // // const {isTouchable} = this.state;
    // const isTouchable = false;

    // const settings = {
		// 	dots: false,
		// 	autoplay: true,
		// 	autoplaySpeed: 8000,
		// 	adaptiveHeight: false,
		// 	pauseOnHover: true,
    //   responsive: [
		// 		{
		// 			breakpoint: 1024,
		// 			settings: {

		// 			arrows: false
		// 			}
		// 		}
    //   ]				
    // };
    
    const dataCMS = this.props.data.allWordpressPage.edges.filter(({node}) => node.wordpress_parent === 316).map(({node}) => node) //filter(({node}) => node.wordpress_parent === 316).
    const dataFirstItem = this.props.data.firstItem.edges.map(({node}) => node) //filter(({node}) => node.wordpress_parent === 316).

    
    dataCMS.sort((a,b) => a.menu_order - b.menu_order)

    return (
      <Layout
        headerFontColor="light"
        //bodyClass={!isTouchable ? 'disable-scroll' : ''}
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
        // style={{transform: !isTouchable ? transformWrapper : ''}} 
        // onScroll={this.handleScrollEvent}
        >
          {/* SLIDE 5  -- HARD CODED FOR CLIENT WALL */}
        

            {/* SLIDE 6 -- HARD CODED FOR CONTACT */}
          <div id="contact" className="index-slide section" style={{backgroundColor: '#aaa'}}>
          <div className="footer-content-wrapper section-banner">
            <h1 className="section-title title-white">Contact</h1>

            <ContactForm />

            <section id="set-3" className="social-links">
              <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3b">
                {/* <a href="https://instagram.com/skinnytiemedia" target="_blank" className="hi-icon icon-instagram">Instagram</a> */}
                <a href="https://vimeo.com/skinnytiemedia" target="_blank" className="hi-icon icon-vimeo">Vimeo</a>
                {/* <a href="https://twitter.com/skinnytiemedia" target="_blank" className="hi-icon icon-twitter">Twitter</a> */}
                <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank" className="hi-icon icon-linkedin">LinkedIn</a>
                {/* <a href="mailto:Hello@SkinnyTieMedia.com" target="_blank" className="hi-icon icon-envelope">Email</a> */}
                <a href="tel:+14125025054" target="_blank" className="hi-icon icon-phone">Phone<i class="material-icons">local_phone</i></a>
              </div>
            </section>
            </div>
            { this.state.windowWidth < 480 ? <Img fluid={dataCMS[5].acf.background_image_mobile.localFile.childImageSharp.fluid} fadeIn={false} loading="eager"  />  :
            <Img fluid={dataCMS[5].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager"  /> }        
          </div>
      </div>
      </div>
      </Layout>
    )
  }
}

export default ContactPage

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
}`