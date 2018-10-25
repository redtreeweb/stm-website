import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

import _ from 'lodash';


class IndexPage extends React.Component {

  constructor(props) {
      super(props)
    this.state = {
      scrollPosition: 0,
      prevScrollY: window.scrollY
    }

    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
  }

  componentDidMount() {
      // window.addEventListener('wheel', _.debounce(this.handleScrollEvent, 100, {leading: true, trailing: false }), {once: true});
      window.addEventListener('wheel', this.handleScrollEvent);

  }


  handleButtonPress() {
    this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, 3)});
  }

  handleScrollEvent(e) {
    console.log(e)
    if (e.cancelable) {

      this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, 3)});
      
    }
    

    // this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, 3)}, () => setTimeout(() => {
      //   window.addEventListener('wheel', this.handleScrollEvent, {once: true});
      // }, 10))

    // window.addEventListener('wheel', _.throttle(this.handleScrollEvent, 1000, {leading: true, trailing: false }), {once:true});

    // window.addEventListener('wheel', this.handleScrollEvent, {once: true});
    // this.setState({scrollPosition: Math.min(this.state.scrollPosition + 1, 3)});
    // this.scrollDebounce = () =>  {
    //   console.log('throttle')
    //   this.setState({scrollPosition: this.state.scrollPosition + 1})
    // }

    // console.log('outside')
    // const throttle = 
    // throttle();
  }



  render() {

    const scrollPositionWrapper = this.section ? this.state.scrollPosition * this.section.getBoundingClientRect().height: 0;
    const transformWrapper = `translate3d(0, ${-scrollPositionWrapper}px, 0)`
    //

    return (
      <Layout
        headerFontColor="light"
      >
      <div class="fullpage-viewport" >
        <div class="fullpage-wrapper" style={{transform: transformWrapper}} onScroll={this.handleScrollEvent}>
          <div id="section0" className="index-slide section" ref={section => this.section = section}>
            <div class="layer">
              <h1 class="title">Create. Distinguish. Matter.</h1>
            </div>
            <button class="arrow down" onClick={this.handleButtonPress}/>
          </div>
          <div id="section1" class="index-slide section" >
            <div class="section-wrapper get-the-skinny">
              <h1 class="section-title title-white">CREATING MEDIA THAT MAKES YOU LOOK GOOD.</h1>
              <div class="btn"><a href="/get-the-skinny">GET THE SKINNY</a></div>
            </div>
            <button class="arrow down" onClick={this.handleButtonPress}/>
          </div>
          <div id="section2" class="index-slide section">
            <div class="section-wrapper">
              <h1 class="section-title title-white">MAKING IMPRESSIONS.<br/>BUILDING REPUTATIONS.</h1>
            <div class="testimonial-sub-head">
            </div>
          </div>
          <div class="testimonial-wrapper">
            <div class="testimonial-slider">
              <div>
                <p>Working with Skinny Tie is simply a fun experience that results in creative, strategic, and exciting materials. They took the time to ensure that the project perfectly captured who we are in an engaging and appealing way. Even under a tight deadline, they delivered a top quality product that has resonated with our employees.<p>- Rachel Shento, Corporate Communications, NOVA Chemicals Corporation</p><br/></p>
              </div>
                <div>
                  <p>Skinny Tie Media was a key partner during our recent acquisition - creating a beautifully crafted story through video, celebrating our respective histories, diverse businesses, cultures, and talents. Skinny Tie continues to be a valued partner as we work through the integration to build and brand our new organization.<p>- Ann Wilson, Director, Culture, Change, and Communication, Matthews International</p><br/></p>
              </div>
    
              <div>
                <p>Not only did they deliver top-notch creative that was aligned with our broader communications strategy, they also managed all aspects of the video -- video shoots in 7 countries, travel, logistics, and all of the communication and relationships with the internal co-workers – flawlessly! The final project exceeded all expectations.<p>- Melissa Murphy, President, Melissa Murphy Marketing</p><br/></p>
            </div>
    
            <div>
              <p>It’s been a pleasure working with Skinny Tie.  Their grasp of our organization's ‘vibe’ makes them feel like members of our extended family, not simply vendors providing a service.  Their creativity, attention to detail, and flexibility make Jamie and Nate our go-to guys for all things related to video and production.<p>- Tara Simmons, Vice President, Women and Girls Foundation</p><br/></p>
          </div>
    
          <div>
            <p>They are experts in their craft. They treat each client, and every project, as if it were their first priority. Our company has worked with Jamie and Nate for over ten years. What impresses us the most is their creativity, concern for details, high level of professionalism, understanding of budget, and their commitment to perfection.<p>- Heather Arnet, CEO, Women & Girls Foundation</p><br/></p>
              </div>
    
            </div >
        <div class="btn"><a href="/the-catalog">THE CATALOG</a></div> 
          </div >
          <button class="arrow down" onClick={this.handleButtonPress}/>
        </div >
        <div id="section3" class="index-slide section">
          <div class="footer-content-wrapper">
            <h1 class="section-title title-white">THE RIGHT FIT.</h1>
            <div class="btn"><a href="/try-us-on">TRY US ON</a></div>
          </div>
            <section id="set-3" class="social-links">
              <div class="hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3b">
                <a href="https://instagram.com/skinnytiemedia" target="_blank" class="hi-icon icon-instagram">Instagram</a>
                <a href="https://vimeo.com/skinnytiemedia" target="_blank" class="hi-icon icon-vimeo">Vimeo</a>
                <a href="https://twitter.com/skinnytiemedia" target="_blank" class="hi-icon icon-twitter">Twitter</a>
                <a href="https://www.linkedin.com/company/skinny-tie-media" target="_blank" class="hi-icon icon-linkedin">LinkedIn</a>
                <a href="mailto:Hello@SkinnyTieMedia.com" target="_blank" class="hi-icon icon-envelope">Email</a>
              </div>
            </section>
        </div>
      </div>
      </div>
      </Layout >
    )
  }
}

export default IndexPage
