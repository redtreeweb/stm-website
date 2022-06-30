import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imgHeader from '../images/catalog-header.jpg';
// import imgFeature from '../images/featured-tag.svg';
// import imgTellyBronze from '../images/telly_site_bugs_bronze.gif';
// import imgTellySilver from '../images/telly_site_bugs_silver.gif';
// import imgMatthews from '../images/we-are-matthews-thumb.jpg';
// import imgCrossroads from '../images/crossroads-gallery.jpg';

import ImageCache from '../components/ImageCache';


import WorkItem from '../components/WorkItem';


class OurWork extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialPhotoLoad: false
        };
    }

    render() {

        const dataCMS = this.props.data.allWordpressPage.edges.map(({ node }) => node); //filter(({node}) => node.wordpress_parent === 316).

        const workItems = dataCMS.slice(1).map((d,i) => {
            return <WorkItem {...(d.acf)} index={i} />;
        });

        return (
            <Layout
                headerFontColor="dark"
                headerFontSize="large"
                headerSubTitle="DELIVERING INSIGHT AND EXPERIENCE"
            >
                <Helmet 
                    title={`Work - Skinny Tie Media`}
                >
                    <meta name="description" content="We’ve had the opportunity to work with some amazing people and organizations in the 20+ years we’ve been a part of this industry, allowing us to produce a catalog of work that’s achieved Telly, Addy, IABC and CASE recognition." />
                </Helmet>
                <div className="content-featured-image-fixed our-work">
                    {/* crude way to tell if the image has loaded. */}
                    <img 
                        src={imgHeader} 
                        className="content-featured-image-fixed our-approach" 
                        style={{ display: 'none' }} 
                        onLoad={() => this.setState({ initialPhotoLoad: true })} />
                </div>
                <div className="" style={{ flex: 1 }}>
                    <div className="content-featured-image-fixed our-approach spacer"></div>
                    <div class="wrapper catalog">
                        <div class="row">
                            <div class="large-12 columns center catalog-copy">

                                <p class="pad-top-none">We’ve had the opportunity to work with some amazing people and organizations in the 20+ years we’ve been a part of this industry, allowing us to produce a catalog of work that’s achieved Telly, Addy, IABC and CASE recognition.</p>

                                <p>Feel free to browse some of our recent creations below, or to see an extended catalog, <a href="https://www.vimeo.com/skinnytiemedia" target="blank">click here.</a></p>
                            </div>

                        </div>
                    </div>

                    {/* <!-- FEATURED VIDEO --> */}
                    {/* A PROP ON THIS MAKES THIS SEPARATE FROM THE NORMAL WorkItems */}
                    <div class="wrapper featured-video">
                        <WorkItem {...(dataCMS[0].acf)} type="featured-top"/>
                    </div>

                    <div class="wrapper catalog-videos">
                        <div class="row">

                            {workItems}


                            {/* <div class="large-12 columns video-wrapper">
                <div class="large-6 columns flex-video vimeo widescreen thumb">
                  <iframe src="https://player.vimeo.com/video/145694989" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <div class="large-6 columns video-description">
                  <h3>BOSS Controls</h3>
                  <p>Maintaining a visual presence – especially as a start-up – is critical to gaining awareness from potential customers. As BOSS Controls began going-to-market, they knew a key strategy was to keep marketing their name, identity and value propositions across multiple settings from the web, to meetings, to tradeshows. Working in partnership with BOSS’s business support services company, C-leveled, Skinny Tie Media produced this trade show video as an eye-catching, value-proposition piece that could be re-purposed to serve other platforms for BOSS in the future.</p>
                  <div class="vimeo-link"><a href="https://vimeo.com/145694989 " target="_blank">WATCH ON VIMEO</a></div>
                </div>
              </div> */}


                            {/* <div class="large-12 columns video-wrapper">
                <div class="large-6 columns flex-video vimeo widescreen right thumb">
                  <iframe src="https://player.vimeo.com/video/145695235" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                </div>
                <div class="large-6 columns video-description">
                  <h3>Diner En Blanc Pittsburgh</h3>
                  <p>Whether or not it was Pittsburgh’s best-kept secret in 2015, Pittsburgh’s inaugural Diner en Blanc was certainly the most intriguing secret of 2015. At the last minute (and we mean THE last minute), the location was revealed to nearly 1,000 “by invitation only” friends and acquaintances  – waiting and dressed all in white – to meet for a mass chic picnic around the fountain at Gateway Center. To help them capture and showcase this grand event, the DEB Pittsburgh team collaborated with Skinny Tie Media to create a highlight video that attendees could watch to reminisce about the event, and those not in attendance hopeful that they get an invite for 2016.</p>
                  <div class="vimeo-link"><a href="https://vimeo.com/145695235" target="_blank">WATCH ON VIMEO</a></div>
                </div>
              </div> */}



                            {/* <div class="large-12 columns video-wrapper">
                <div class="large-6 columns flex-video vimeo widescreen thumb">
                  <iframe src="https://player.vimeo.com/video/135692205?color=d94c00&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <div class="large-6 columns video-description">
                  <h3>National Baseball Hall of Fame</h3>
                  <p>Having the opportunity to create plaques for National Baseball Hall of Fame inductees is an honor. Being the exclusive provider in doing so for more than 30 years is a responsibility. Thanks to the quality and craftsmanship that Matthews Architecture brings to this, and many other projects, they are proud to have this distinction. Produced in conjunction with the 2015 Hall of Fame induction ceremony, this video showcases the beauty created when art and manufacturing come together.</p>
                  <div class="vimeo-link"><a href="https://vimeo.com/135692205" target="_blank">WATCH ON VIMEO</a></div>
                </div>
              </div> */}




                            {/* <div class="large-12 columns video-wrapper">
                <div class="large-12 columns video-wrapper">
                  <div class="large-6 columns right thumb">
                    <a href="https://www.flickr.com/photos/130258915@N06/sets/72157653945657150" target="_blank"><img class="img-marg-thumb" src={imgMatthews} alt="crossroads-gallery" /></a>
                  </div>
                  <div class="large-6 columns video-description">
                    <h3>We Are Matthews</h3>
                    <p>Corporate acquisitions of any size can cause major disruptions for employees in an organization without proper communication. This challenge was certainly true for Matthews International who, in the summer of 2014, acquired SGK – an international company itself. The merger reached all corners of the globe and doubled the number of the organization’s employees. Matthews recognized that consistent communication, centered on the common values of the two organizations, would help assure employees that the merger was a positive step forward. As part of the communication strategy, Skinny Tie produced a culture video – shot on location across seven countries – which showed employees that although they work in different parts of the world, live in different cultures, and create different products – their values make them One Matthews. (Due to contractual agreement, only still photos can be shared at this time.)</p>
                    <div class="vimeo-link"><a href="https://www.flickr.com/photos/130258915@N06/sets/72157653945657150/" target="_blank">VIEW ON FLICKR</a></div>
                    <div class="telly bronze"><img src={imgTellyBronze} /></div><div class="telly silver"><img src={imgTellySilver} /></div>
                  </div>

                </div> */}








                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen thumb">
                    <a href="https://www.flickr.com/photos/130258915@N06/sets/72157650997362449/" target="_blank"><img src={imgCrossroads} alt="crossroads-gallery" /></a>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>Crossroads Conference</h3>
                    <p>In service of the Women and Girls Foundation’s mission to develop women leaders, this inaugural Crossroads Conference focused on connecting women to one another and to community resources that can help further their professional careers and strengthen their personal lives. The conference welcomed nearly 500 attendees who had the opportunity to hear dynamic, moving stories from 17 women who had faced varied crossroad moments in life; a panel of 5 career women speaking to how they maintain work-life balance; and an engaging and honest keynote address from Lauren Morelli, Co-Producer and Writer from the hit series, “Orange Is The New Black”.</p>
                    <div class="vimeo-link"><a href="https://www.flickr.com/photos/130258915@N06/sets/72157650997362449/" target="_blank">VIEW ON FLICKR</a></div>
                  </div>

                </div> */}





                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen right thumb">
                    <iframe src="https://player.vimeo.com/video/95430795?color=d94c00" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>Ms. Foundation for Women</h3>

                    <p>Celebrating the 40th anniversary of the foundation while simultaneously celebrating the 80th birthday of its founding mother, Gloria Steinem, the Ms. Foundation looked to produce a video for their annual gala that reflected back on its history and the organizations they've funded throughout the years while looking ahead to its future.</p>

                    <div class="vimeo-link"><a href="https://vimeo.com/95430795" target="_blank">WATCH ON VIMEO</a></div>
                    <div class="telly bronze"><img src={imgTellyBronze} /></div>
                  </div>

                </div> */}



















                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen thumb">
                    <iframe src="https://player.vimeo.com/video/96278016?color=d94c00" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>Madame Presidenta: Why Not U.S.?</h3>

                    <p>This documentary feature was a collaboration of the Women and Girls Foundation of Southwest Pennsylvania and ELAS: Women’s Social Investment Fund in Rio de Janeiro. The 50-minute documentary explores the topics of how Brazil came to elect its first woman president; what impact her presidency has on women’s rights and opportunities; how her leadership is seen throughout the country; and what American women can learn from their Brazilian sisters and their passionate and successful surge towards economic prosperity and political leadership. The full documentary is screened internationally at special engagements for audiences exploring issues of social, political and gender equality.</p>
                    <div class="vimeo-link"><a href="https://vimeo.com/96278016" target="_blank">WATCH ON VIMEO</a></div>
                  </div>

                </div> */}













                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen right thumb">
                    <iframe src="https://player.vimeo.com/video/94747824?color=d94c00" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>WorkPlace Banking</h3>
                    <p>With the launch of their newly designed online experience, PNC's WorkPlace Banking group looked to have a video produced for their site that demonstrated the main opportunities and benefits for both employers and employees to enroll with PNC WorkPlace Banking. This video was additionally leveraged by the WorkPlace Banking sales force during prospective client presentations.</p>
                    <div class="vimeo-link"><a href="https://vimeo.com/94747824" target="_blank">WATCH ON VIMEO</a></div>
                  </div>

                </div> */}









                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen thumb">
                    <iframe src="https://player.vimeo.com/video/96272166?color=d94c00" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>Strong Truths. Well Lived.</h3>
                    <p>Loyola University Maryland, a prestigious Jesuit university, launched their new brand “Strong Truths. Well Lived.” in the summer of 2011. Understanding that video is a key tool in the recruiting process, Loyola looked to produce multiple video elements for use by their Admission department as well as online. This particular video, produced for their admitted student open house, gave students and parents alike a sense of the Loyola community and why the decision to attend Loyola would position students for a life well lived.</p>
                    <div class="vimeo-link"><a href="https://vimeo.com/96272166" target="_blank">WATCH ON VIMEO</a></div>
                  </div>

                </div> */}














                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen right thumb">
                    <iframe src="https://player.vimeo.com/video/96279697?color=d94c00" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>Seriously Creative.</h3>
                    <p>If not done well, positioning yourself as a liberal arts university can be a tall order in the competitive landscape of higher education. But the University of North Carolina Asheville found a beautiful and strategic approach with their brand “Seriously Creative”. The brand – developed by Mind Over Media – and this brand video showcase the well-rounded, engaging and transformative experiences students can have at the school and why liberal arts universities continue to develop smart-minded individuals who are ready to contribute to the world.</p>
                    <div class="vimeo-link"><a href="https://vimeo.com/96279697" target="_blank">WATCH ON VIMEO</a></div>
                  </div>

                </div> */}












                            {/* <div class="large-12 columns video-wrapper">

                  <div class="large-6 columns flex-video vimeo widescreen thumb">
                    <iframe src="https://player.vimeo.com/video/94702433?color=d94c00&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                  </div>

                  <div class="large-6 columns video-description">
                    <h3>I Am Highmark</h3>
                    <p>Facing strong market competition, and with an effort to rally employees to champion their mission, Highmark developed a new ad campaign in 2012 called "I Am Highmark". This campaign put a new spin on a long-standing healthcare insurer. Though the campaign was a public facing one across the greater Pittsburgh market, Highmark celebrated the launch of the campaign internally at employee rally's held at multiple sites that showcased for employees how they themselves are Highmark.</p>
                    <div class="vimeo-link"><a href="https://vimeo.com/94702433" target="_blank">WATCH ON VIMEO</a></div>
                  </div>

                </div> 
              </div>*/}
                        </div>
                    </div>
                </div>
                <Footer />
                {this.state.initialPhotoLoad && <ImageCache />}
            </Layout>
        );
    }
}

export default OurWork;

export const query = graphql`{
  allWordpressPage(filter: {wordpress_parent: {eq: 353}}, sort: {fields: [menu_order],  order: ASC}) {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          work_title,
          work_description,
          work_type,
          work_url,
          work_thumbnail {
            source_url
          },
          action_button
        }
      }
    }
  }
}`;


