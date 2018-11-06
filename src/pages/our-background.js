import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imgFounders from '../images/about-header-large.jpg';
import imgCollage from '../images/collage.png';

import ImageCache from '../components/ImageCache';

class OurBackground extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPhotoLoad: false
    }
  }

  render() {

    const dataCMS = this.props.data.allWordpressPage.edges.map(({ node }) => node)

    const itemsBios = dataCMS.map(({acf: d}, i) => {
      console.log(d.staff_name)
      return (
        <div className={'large-5 columns ' + (i === 0 ? 'jamie-bio' : 'nathan-bio')}>
          <h5 className={'name staff-name ' + (i === 0 ? 'jamie-name' : 'nathan-name')}>{d.staff_name}</h5>
          <p>As co-founder and Executive Producer at Skinny Tie Media, Jamie brings together and manages all the pieces needed to take a project from conception to delivery. His experience is truly built from the ground up – starting as a tape librarian at a Pittsburgh-based production company and moving up to Executive Producer and manager of a video department at a higher education agency. He’s had experiences with a myriad of corporate, non-profit and higher education clients that have taken him not only all around the domestic United States, but earning his wings working in the likes of Malaysia, Singapore, Nova Scotia, Turkey, and more.</p>
        </div>
      )
    })


    return (
      <Layout
        headerFontColor="dark"
        headerSubTitle="WHO WE ARE + WHAT WE DO"
      >
        <div className="" style={{ flex: 1 }}>
          <div className="header-wrapper background-header" src={imgFounders} onLoad={() => this.setState({ initialPhotoLoad: true })} />
          <div className="wrapper background">
            <div className="row">

              <div className="large-12 columns">
                {itemsBios}
                {/* <div className="large-5 columns jamie-bio">
                  <h5 className="jamie-name name">JAMIE HOLLERAN</h5>
                  <p>As co-founder and Executive Producer at Skinny Tie Media, Jamie brings together and manages all the pieces needed to take a project from conception to delivery. His experience is truly built from the ground up – starting as a tape librarian at a Pittsburgh-based production company and moving up to Executive Producer and manager of a video department at a higher education agency. He’s had experiences with a myriad of corporate, non-profit and higher education clients that have taken him not only all around the domestic United States, but earning his wings working in the likes of Malaysia, Singapore, Nova Scotia, Turkey, and more.</p>
                </div>

                <div className="large-5 columns nathan-bio">
                  <h5 className="nathan-name name">NATHAN WADDING</h5>
                  <p>As co-founder and CEO, Nathan brings energy and unbridled enthusiasm to every aspect of his role at Skinny Tie Media. While he started his career in video production in technical roles at Waynesburg University and the Pittsburgh Penguins, he learned how to marry his technical expertise with creative strategy at a Pittsburgh-based production agency, eventually becoming Director of Post Production. Today, Nathan takes pride not only in partnering with clients to help them solve their challenges, but in putting his passion into creating a culture and environment at Skinny Tie for employees and contractors to want to come to work.</p>
                </div> */}
              </div>


              <div className="large-12 columns collage">
                <img src={imgCollage} />
              </div>


            </div>
          </div>
        </div>
        <Footer />
        {this.state.initialPhotoLoad && <ImageCache />}
      </Layout>
    )
  }
}
export default OurBackground


export const query = graphql`{
  allWordpressPage(filter: {wordpress_parent: {eq: 406}}, sort: {fields: [menu_order],  order: ASC}) {
    edges {
      node {
        slug,
        wordpress_parent,
        wordpress_id,
        content,
        menu_order,
        acf {
          staff_name,
          staff_blurb
        }
      }
    }
  }
}`
