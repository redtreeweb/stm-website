import Lethargy from "exports-loader?this.Lethargy!lethargy/lethargy";

import React, { createRef } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


import Layout from '../components/layout';
import Slider from "react-slick";
import ContactForm from '../components/ContactForm';
import ClientWall from '../components/ClientWall';

import _ from 'lodash';

import '../styles/slick/slick.scss';
import '../styles/grid-wall.scss';

import ImageCache from '../components/ImageCache';


const numSlides = 5;



class IndexPage extends React.Component {

    constructor(props) {
        super(props);


        let scrollPosition = 0;
        if (this.props.location.hash === '#contact') {
            scrollPosition = 5;
        }


        this.state = {
            scrollPosition,
            initialPhotoLoad: true,
            windowWidth: null,
            isTouchable: false,
            posTouchStart: 0
        };

        this.posTouchStart = 0;

        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.handleResize = this.handleResize.bind(this);

        this.img = createRef();
    }


    componentDidMount() {
        this.handleResize();
        // window.addEventListener('wheel', this.handleScrollEvent, false);
        // window.addEventListener('touchstart', this.handleTouchStart, false);
        // window.addEventListener('touchmove', this.handleScrollEvent, false);
        // window.addEventListener('scroll', this.handleScrollEvent, false);


        // window.addEventListener('wheel', _.debounce(this.handleScrollEvent, 0, {leading: false, trailing: true}));
        this.lethargy = new Lethargy(5, 50, .05); //helps with the scroll

        window.addEventListener('resize', this.handleResize, false);

        function is_touch_device() {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            var mq = function (query) {
                return window.matchMedia(query).matches;
            };

            if (('ontouchstart' in window)) {
                return true;
            }

            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        }

        this.setState({ isTouchable: is_touch_device() });
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //   console.log(nextProps, prevState)
    // }

    componentDidUpdate(prevProps, prevState) {

    // console.log(prevProps, prevState)

        if (this.props.location.hash === '#contact' && prevState.scrollPosition !== 5) {
            // return Object.assign({}, prevState, {scrollPosition: 5})
            document.getElementById('fullpage-wrapper').style.transition = 'none';
            this.setState({ scrollPosition: 5 }, () => {

                window.setTimeout(() => document.getElementById('fullpage-wrapper').style.transition = '', 500);

            });
        }
    }

    handleButtonPress() {
        window.location.hash = '';
        this.setState({ scrollPosition: Math.min(this.state.scrollPosition + 1, numSlides) });
    }

    handleTouchStart(e) {
    // consol
    // this.setState({posTouchStart: e.touches[0].clientY})
        this.posTouchStart = e.touches[0].clientY;
    }

    handleScrollEvent(e) {

        if (this.lethargy.check(e) || e.type === 'touchmove') {

            window.removeEventListener('wheel', this.handleScrollEvent);

            window.removeEventListener('touchmove', this.handleScrollEvent);

            let scrollDirection = e.deltaY / Math.abs(e.deltaY);

            if (e.type === 'touchmove') {

                const { posTouchStart } = this;

                const posTouchChange = e.touches[0].clientY;

                scrollDirection = (posTouchStart - posTouchChange) / Math.abs((posTouchStart - posTouchChange));
            }

            // removes hash
            window.history.replaceState("", document.title, window.location.pathname + window.location.search);

            this.setState({ 
                scrollPosition: Math.max(Math.min(this.state.scrollPosition + (scrollDirection * 1), numSlides), 0) 
            });
            setTimeout(() => window.addEventListener('wheel', this.handleScrollEvent, false), 1200);
            setTimeout(() => window.addEventListener('touchmove', this.handleScrollEvent, false), 1200);
        }
    }

    handleResize() {
        this.setState({ windowWidth: window.innerWidth });
    }


    render() {


        const scrollPositionWrapper = this.section ? 
            this.state.scrollPosition * this.section.getBoundingClientRect().height : 
            0;
        const transformWrapper = `translate3d(0, ${-scrollPositionWrapper}px, 0)`;

        // const {isTouchable} = this.state;
        const isTouchable = false;

        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 8000,
            adaptiveHeight: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {

                        arrows: false
                    }
                }
            ]
        };

        const dataCMS = this.props.data.allWordpressPage.edges
            .filter(({ node }) => node.wordpress_parent === 316)
            .map(({ node }) => node); 
       
        // const dataFirstItem = this.props.data.firstItem.edges.map(({ node }) => node); //filter(({node}) => node.wordpress_parent === 316).


        dataCMS.sort((a, b) => a.menu_order - b.menu_order);

        return (
            <Layout
                headerFontColor="light"
                //bodyClass={!isTouchable ? 'disable-scroll' : ''}
                pageName='index'
            >
                <Helmet>
                    {/* <html className="overflow-hidden" />
          <body className="overflow-hidden" /> */}
                    <meta 
                        name="description" 
                        content="Skinny Tie Media is a communications agency formed in 2014 on the foundation of 20+ years of experience." 
                    />
                    <script src="https://fast.wistia.com/embed/medias/8r03pohwtn.jsonp" async></script>
                    <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                </Helmet>
                {/* <div className={'fullpage-viewport' + (isTouchable ? ' enable-scroll' : '')}> */}
                <div className="fullpage-viewport enable-scroll">
                    <div
                        id="fullpage-wrapper"
                        className="fullpage-wrapper"
                        style={{ transform: !isTouchable ? transformWrapper : '' }}
                        // onScroll={this.handleScrollEvent}
                    >
                        <div id="section0" className="index-slide section" ref={section => this.section = section}>
                            {/* {this.state.windowWidth < 480 ? <Img fluid={dataFirstItem[0].acf.background_image_mobile.localFile.childImageSharp.fluid} onLoad={() => this.setState({ initialPhotoLoad: true })} /> :
                <Img fluid={dataFirstItem[0].acf.background_image.localFile.childImageSharp.fluid} onLoad={() => this.setState({ initialPhotoLoad: true })} />} */}
                            <div className="background-orange">
                                <svg 
                                    // width="100%" 
                                    // height="100%" 
                                    // width="10%"
                                    // maxHeight="50%"
                                    viewBox="0 0 53 278" 
                                    version="1.1" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    style={{
                                        // maxHeight: '18em',
                                        height: '30%',
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        strokeLinejoin:'round',
                                        strokeMiterlimit:2,
                                        zIndex: 10
                                    }}>
                                    <path 
                                        d="M29.005,277.401l14.875,-15.913l-7.105,-237.383l16.002,-21.55c-8.637,-1.657 -17.544,-2.555 -26.665,-2.555c-8.927,0 -17.647,0.868 -26.112,2.457l16.079,21.648l-7.091,237.383l14.905,15.914" 
                                        style={{
                                            fill: '#fff',
                                            fillRule: 'nonzero'
                                        }}/>
                                </svg>
                            </div>
                            <div className="layer">
                                <h1 className="title">{dataCMS[0].acf.header}</h1>
                            </div>
                            <button className="arrow down" onClick={this.handleButtonPress} />
                        </div>
                        {this.state.initialPhotoLoad &&
              <>
                {false && <div id="section1" className="index-slide section" >
                    <div className="section-wrapper section-banner get-the-skinny">
                        <div className="text-background-black"></div>
                        {/* <h1 className="section-title title-white">{dataCMS[1].acf.header}</h1> */}
                        <h1 className="section-title title-white">
                          Skinny Tie is a communications boutique that specializes in developing video content 
                          that creates meaningful connection inside or outside your organization.
                        </h1>
                        {/* <h2 className="section-title title-white">
                      We are dedicated to help companies with the critical step of connecting the business strategy with their people.
                    </h2> */}
                        <div className="btn"><Link to="work">GET THE SKINNY</Link></div>
                        {/* <Img fluid={dataCMS[1].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" /> */}
                    </div>
                    {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                </div>}

                <div id="section1" className="section index-slide section__mission-statement" >
                    <div className="section-wrapper section-banner get-the-skinny">
                        {/* <div className="text-background-black"></div> */}
                        {/* <h1 className="section-title title-white">{dataCMS[1].acf.header}</h1> */}
                        <h1>
                            Skinny Tie is a communications boutique that specializes in developing video content
                             that creates meaningful connection inside or outside your organization.
                        </h1>
                        {/* <h2>
                      We are dedicated to help companies with the critical step of connecting the business strategy with their people.
                    </h2> */}
                        {/* <div className="btn"><Link to="work">GET THE SKINNY</Link></div> */}
                        {/* <Img fluid={dataCMS[1].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" /> */}
                    </div>
                    {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                </div>


                <div id="section1-video" className="index-slide section" >
                    <div className="section-wrapper section-banner get-the-skinny">
                        <div className="text-background-black"></div>
                        <h1 className="title-white title-video">EVERY ORGANIZATION HAS A STORY</h1>
                        <h2 className="title-white title-video">Discover. Develop. Tell.</h2>

                        <div className="btn"><a href="https://fast.wistia.net/embed/channel/gin533im6g">START WATCHING</a></div>
                        {/* <h2 className="title-white title-video">By making our stories visible we allow people to find similarities, build connection and engage.</h2> */}
                        {/* <Img fluid={dataCMS[1].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" /> */}
                        <div className="wistia__container" style={{ position: 'absolute', width: '100%', height: '100%' }}>
                            <div className="wistia_responsive_padding" style={{
                                // padding: '56.25% 0 0 0',
                                padding: '100vw 100vh',
                                position: 'relative'
                            }}>
                                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                                    <div className="wistia_embed wistia_async_8r03pohwtn videoFoam=true autoPlay=true endVideoBehavior=loop controlsVisibleOnLoad=false muted=true playbar=false qualityControl=false settingsControl=false smallPlayButton=false volumeControl=false fullscreenButton=false" style={{ height: '100%', position: 'relative', width: '100%', opacity: 1 }}>
                                        <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                                            <img
                                                ref={this.img}
                                                src="https://fast.wistia.com/embed/medias/8r03pohwtn/swatch"
                                                style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                                                alt="" aria-hidden="true" onLoad={() => this.img.current.parentNode.style.opacity = 1} //.style.opacity=1} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="arrow down" onClick={this.handleButtonPress} />
                </div>

                <div id="section1" className="section index-slide section__video-post" >
                    <div className="section-wrapper section-banner get-the-skinny">
                        {/* <div className="text-background-black"></div> */}
                        {/* <h1 className="section-title title-white">{dataCMS[1].acf.header}</h1> */}
                        <h1>
                            By making our stories visible we allow people to find similarities, build connection and engage.
                        </h1>
                        {/* <h2>
                      We are dedicated to help companies with the critical step of connecting the business strategy with their people.
                    </h2> */}
                        {/* <div className="btn"><Link to="work">GET THE SKINNY</Link></div> */}
                        {/* <Img fluid={dataCMS[1].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} loading="eager" /> */}
                    </div>
                    {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                </div>

                <div id="section2" className="index-slide section">
                    <div className="footer-content-wrapper section-banner">
                        <div className="text-background-black"></div>
                        <h1 className="section-title title-white" dangerouslySetInnerHTML={{ __html: dataCMS[2].acf.header }}></h1>
                        <div className="btn"><Link to="approach">OUR PHILOSOPHY</Link></div>
                    </div>
                    {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                    {this.state.windowWidth < 480 ? <Img fluid={dataCMS[2].acf.background_image_mobile.localFile.childImageSharp.fluid} fadeIn={false} /> :
                        <Img fluid={dataCMS[2].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} />}
                </div>

                <div id="section3" className="index-slide section">
                    <div className="section-wrapper section-banner">
                        <div className="text-background-black"></div>
                        <h1 className="section-title title-white" dangerouslySetInnerHTML={{ __html: dataCMS[3].acf.header }}></h1>
                        <div className="testimonial-sub-head">
                        </div>
                        <div className="testimonial-wrapper">
                            <div className="testimonial-slider">
                                <Slider {...settings}>
                                    <div>
                                        <div>Working with Skinny Tie is simply a fun experience that results in creative, strategic, and exciting materials. They took the time to ensure that the project perfectly captured who we are in an engaging and appealing way. Even under a tight deadline, they delivered a top quality product that has resonated with our employees.<p>- Rachel Shento, Corporate Communications, NOVA Chemicals Corporation</p><br /></div>
                                    </div>
                                    <div>
                                        <div>Skinny Tie Media was a key partner during our recent acquisition - creating a beautifully crafted story through video, celebrating our respective histories, diverse businesses, cultures, and talents. Skinny Tie continues to be a valued partner as we work through the integration to build and brand our new organization.<p>- Ann Wilson, Director, Culture, Change, and Communication, Matthews International</p><br /></div>
                                    </div>
                                    <div>
                                        <div>Not only did they deliver top-notch creative that was aligned with our broader communications strategy, they also managed all aspects of the video -- video shoots in 7 countries, travel, logistics, and all of the communication and relationships with the internal co-workers – flawlessly! The final project exceeded all expectations.<p>- Melissa Murphy, President, Melissa Murphy Marketing</p><br /></div>
                                    </div>
                                    <div>
                                        <div>It’s been a pleasure working with Skinny Tie.  Their grasp of our organization's ‘vibe’ makes them feel like members of our extended family, not simply vendors providing a service.  Their creativity, attention to detail, and flexibility make Jamie and Nate our go-to guys for all things related to video and production.<p>- Tara Simmons, Vice President, Women and Girls Foundation</p><br /></div>
                                    </div>
                                    <div>
                                        <div>They are experts in their craft. They treat each client, and every project, as if it were their first priority. Our company has worked with Jamie and Nate for over ten years. What impresses us the most is their creativity, concern for details, high level of professionalism, understanding of budget, and their commitment to perfection.<p>- Heather Arnet, CEO, Women & Girls Foundation</p><br /></div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="btn"><Link to="us">WHO WE ARE</Link></div>
                        </div >
                        {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                        <Img fluid={dataCMS[3].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} />
                    </div >
                </div>

                {/* SLIDE 5  -- HARD CODED FOR CLIENT WALL */}
                <div id="section5" className="index-slide section" style={{ backgroundColor: '#aaa' }}>
                    <div className="footer-content-wrapper section-banner">
                        <ClientWall />
                    </div>
                    {this.state.windowWidth < 480 ? <Img fluid={dataCMS[4].acf.background_image_mobile.localFile.childImageSharp.fluid} fadeIn={false} /> :
                        <Img fluid={dataCMS[4].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} />}
                    {/* <button className="arrow down" onClick={this.handleButtonPress} /> */}
                </div>

                {/* SLIDE 6 -- HARD CODED FOR CONTACT */}
                <div id="contact" className="index-slide section" style={{ backgroundColor: '#aaa' }}>
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
                    {this.state.windowWidth < 480 ? <Img fluid={dataCMS[5].acf.background_image_mobile.localFile.childImageSharp.fluid} fadeIn={false} /> :
                        <Img fluid={dataCMS[5].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} />}
                </div>

              </>}
                    </div>
                </div>
                {/* {this.state.initialPhotoLoad && <ImageCache />} */}
            </Layout >
        );
    }
}

export default IndexPage;

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
                fluid(quality: 60) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          },
          background_image_mobile {
            source_url
            localFile {
              childImageSharp {
                fluid(quality: 60) {
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
                fluid(quality: 60) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          },
          background_image_mobile {
            source_url
            localFile {
              childImageSharp {
                fluid(quality: 60) {
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