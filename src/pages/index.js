
import Lethargy from "exports-loader?this.Lethargy!lethargy/lethargy";

import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';


import Layout from '../components/layout';
import {Helmet} from 'react-helmet';
import Image from '../components/image';
import Slider from "react-slick";

import _ from 'lodash';

import '../styles/slick/slick.scss';


class IndexPage extends React.Component {

  constructor(props) {
      super(props)
    this.state = {
      scrollPosition: 0,
      initialPhotoLoad: false
    }

    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  // componentWillMount() {
  //   // document.body.className = 'disable-scroll'
  // }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScrollEvent, false);
    // window.addEventListener('wheel', _.debounce(this.handleScrollEvent, 0, {leading: false, trailing: true}));
    this.lethargy = new Lethargy(5, 50, .05); //helps with the scroll
  }

  // componentWillUnmount() {
  //   // document.body.className = ''
  // }


  handleButtonPress() {
    this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, 3)});
  }

  handleScrollEvent(e) {
    
      // console.log(e)
      // console.log(this.lethargy.check(e))

      if (this.lethargy.check(e)) {
      // console.log(this.lethargy.check(e))
      window.removeEventListener('wheel', this.handleScrollEvent)
      const scrollDirection =  e.deltaY / Math.abs(e.deltaY);

      this.setState({scrollPosition: Math.max(Math.min(this.state.scrollPosition + (scrollDirection * 1), 3),0)});
      setTimeout(() => window.addEventListener('wheel', this.handleScrollEvent, false), 1200);
    }
  }



  render() {

    

    const scrollPositionWrapper = this.section ? this.state.scrollPosition * this.section.getBoundingClientRect().height: 0;
    const transformWrapper = `translate3d(0, ${-scrollPositionWrapper}px, 0)`

    const settings = {
			dots: false,
			autoplay: true,
			autoplaySpeed: 8000,
			adaptiveHeight: true,
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
    
    const dataCMS = this.props.data.allWordpressPage.edges.filter(({node}) => node.wordpress_parent === 316).map(({node}) => node) //filter(({node}) => node.wordpress_parent === 316).
    dataCMS.sort((a,b) => a.menu_order - b.menu_order)
    console.log(dataCMS)

console.log(this.state.initialPhotoLoad)

    return (
      <Layout
        headerFontColor="light"
        bodyClass="disable-scroll"
      >
      <div className="fullpage-viewport" >
        <div className="fullpage-wrapper" style={{transform: transformWrapper}} onScroll={this.handleScrollEvent}>
          <div id="section0" className="index-slide section" ref={section => this.section = section}>
            {/* <Image className="section-0-img"/> */}
            {/* <img src={dataCMS[0].acf.background_image.source_url} className="section-0-img" /> */}
            <Img fluid={dataCMS[0].acf.background_image.localFile.childImageSharp.fluid} onLoad={() => this.setState({initialPhotoLoad: true})}/>
            <div className="layer">
              <h1 className="title">{dataCMS[0].content}</h1>
            </div>
            <button className="arrow down" onClick={this.handleButtonPress}/>
          </div>
          { this.state.initialPhotoLoad && <><div id="section1" className="index-slide section" >
            {/* <img src={dataCMS[1].acf.background_image.source_url} className="section-0-img" /> */}
            <div className="section-wrapper section-banner get-the-skinny">
              <h1 className="section-title title-white">{dataCMS[1].content}</h1>
              <div className="btn"><a href="/get-the-skinny">GET THE SKINNY</a></div>
              <Img fluid={dataCMS[1].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} critical={true}/>
            </div>
            <button className="arrow down" onClick={this.handleButtonPress}/>
          </div>
          <div id="section2" className="index-slide section">
            <div className="section-wrapper section-banner">
              <h1 className="section-title title-white" dangerouslySetInnerHTML={{__html: dataCMS[2].content}}></h1>
            <div className="testimonial-sub-head">
            </div>
          <div className="testimonial-wrapper">
          <div className="testimonial-slider">
          <Slider {...settings}>
              <div>
                <div>Working with Skinny Tie is simply a fun experience that results in creative, strategic, and exciting materials. They took the time to ensure that the project perfectly captured who we are in an engaging and appealing way. Even under a tight deadline, they delivered a top quality product that has resonated with our employees.<p>- Rachel Shento, Corporate Communications, NOVA Chemicals Corporation</p><br/></div>
              </div>
              <div>
                  <div>Skinny Tie Media was a key partner during our recent acquisition - creating a beautifully crafted story through video, celebrating our respective histories, diverse businesses, cultures, and talents. Skinny Tie continues to be a valued partner as we work through the integration to build and brand our new organization.<p>- Ann Wilson, Director, Culture, Change, and Communication, Matthews International</p><br/></div>
              </div>
              <div>
                <div>Not only did they deliver top-notch creative that was aligned with our broader communications strategy, they also managed all aspects of the video -- video shoots in 7 countries, travel, logistics, and all of the communication and relationships with the internal co-workers – flawlessly! The final project exceeded all expectations.<p>- Melissa Murphy, President, Melissa Murphy Marketing</p><br/></div>
              </div>
              <div>
                <div>It’s been a pleasure working with Skinny Tie.  Their grasp of our organization's ‘vibe’ makes them feel like members of our extended family, not simply vendors providing a service.  Their creativity, attention to detail, and flexibility make Jamie and Nate our go-to guys for all things related to video and production.<p>- Tara Simmons, Vice President, Women and Girls Foundation</p><br/></div>
              </div>
              <div>
                <div>They are experts in their craft. They treat each client, and every project, as if it were their first priority. Our company has worked with Jamie and Nate for over ten years. What impresses us the most is their creativity, concern for details, high level of professionalism, understanding of budget, and their commitment to perfection.<p>- Heather Arnet, CEO, Women & Girls Foundation</p><br/></div>
              </div>
          </Slider>
            </div>
        <div className="btn"><a href="/the-catalog">THE CATALOG</a></div> 
          </div >
          <button className="arrow down" onClick={this.handleButtonPress}/>
          <Img fluid={dataCMS[2].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} critical={true}/>
        </div >
        </div>

        <div id="section3" className="index-slide section">
          <div className="footer-content-wrapper section-banner">
            <h1 className="section-title title-white" dangerouslySetInnerHTML={{__html: dataCMS[3].content}}></h1>
            <div className="btn"><a href="/try-us-on">TRY US ON</a></div>
            <section id="set-3" className="social-links">
              <div className="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3b">
                <a href="https://instagram.com/skinnytiemedia" target="_blank" className="hi-icon icon-instagram">Instagram</a>
                <a href="https://vimeo.com/skinnytiemedia" target="_blank" className="hi-icon icon-vimeo">Vimeo</a>
                <a href="https://twitter.com/skinnytiemedia" target="_blank" className="hi-icon icon-twitter">Twitter</a>
                <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank" className="hi-icon icon-linkedin">LinkedIn</a>
                <a href="mailto:Hello@SkinnyTieMedia.com" target="_blank" className="hi-icon icon-envelope">Email</a>
              </div>
            </section>
            </div>
            <Img fluid={dataCMS[3].acf.background_image.localFile.childImageSharp.fluid} fadeIn={false} critical={true} 
            //imgStyle={{height: window.outerHeight}}
            />
          </div></> }
      </div>
      </div>
      </Layout >
    )
  }
}

export default IndexPage

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
          background_image {
            source_url
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
  }
}`