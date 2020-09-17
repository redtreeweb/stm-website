import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Footer from '../components/footer';

import imgHeader from '../images/events-header.jpg';
import WorkItem from '../components/WorkItem.js';

import ContactFormEvents from '../components/ContactFormEvents.js';


class Events extends React.Component {

    render() {

        const dataCMS = this.props.data.allWordpressPage.edges.map(({ node }) => node); //filter(({node}) => node.wordpress_parent === 316).

        // const workItems = dataCMS.slice(1).map((d,i) => {
        //     return <WorkItem {...(d.acf)} index={i} />;
        // });

        const workItems = [{
            work_badges: null,
            work_description: 'Copy',
            work_thumbnail: {
                source_url: "https://cms.skinnytiemedia.com/wp-content/uploads/2018/11/crossroads-gallery.jpg"
            },
            work_title: "2020 Athena Awards Program of Greater Pittsburgh",
            work_type: "featured",
            work_url: 458779161
        }];

        console.log(dataCMS.slice(1));

        return <Layout
            headerFontColor="dark"
            headerFontSize="large"
            headerSubTitle="Events Gone Virtual"
        >
            <Helmet 
                title={`Events Gone Virtual - Skinny Tie Media`}
            >
                <meta 
                    name="description" 
                    content="We’ve had the opportunity to work with some amazing people and organizations in the 20+ years we’ve been a part of this industry, allowing us to produce a catalog of work that’s achieved Telly, Addy, IABC and CASE recognition." />
            </Helmet>
            <div className="content-featured-image-fixed events">
                <img 
                    src={imgHeader} 
                    className="content-featured-image-fixed our-approach" 
                    style={{ display: 'none' }} 
                    onLoad={() => this.setState({ initialPhotoLoad: true })} 
                    alt="header - events"
                />
            </div>
            <div className="" style={{ flex: 1 }}>
                <div className="content-featured-image-fixed our-approach spacer"></div>
                <div class="wrapper catalog">
                    <div class="row">
                        <div class="large-12 columns center catalog-copy">
                            <p class="pad-top-none">
                            It’s been exciting to partner with organizations over the years to produce live events for their members or employees. 
                            But, since March of 2020, the idea of live events has taken on new meaning and in many cases, greater significance.
                            </p>
                            <p class="pad-top-none">
                            Take a look as some of the events we have recently produced and delivered.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="wrapper featured-video">
                    <WorkItem {...(workItems[0])} type="featured-top"/>
                </div>
                <div class="wrapper events">
                    <div 
                        className="row" 
                        // style={{ backgroundColor: 'gray' }}
                    >
                        <div className="row_video-container" style={{ maxWidth: '62.5em' }}>
                            <WorkItem {...(workItems[0])} work_type="video_events" />
                        </div>
                    </div>
                    <div class="row" style={{ padding: '0 10px' }}>
                        <ContactFormEvents />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>;
    }
}


export default Events;




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
            work_badges,
            work_thumbnail {
              source_url
            },
            action_button
          }
        }
      }
    }
  }`;