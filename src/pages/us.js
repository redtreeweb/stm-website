import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Footer from '../components/footer';

import imgFounders from '../images/about-header-large.jpg';
import imgCollage from '../images/collage.png';

import ImageCache from '../components/ImageCache';

import '../styles/grid-wall.scss';

class OurBackground extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPhotoLoad: false
    }
  }

  render() {

    const dataCMS = this.props.data.allWordpressPage.edges.map(({ node }) => node)

    const itemBottomImage = dataCMS.find(({ acf: d }) => { return d.staff_type === 'bottom_image' });

    const itemsBiosFeatured = dataCMS.filter(({ acf: d }) => { return d.staff_type === 'featured' }).map(({ acf: d }, i) => {

      return (
        <div className="staff-member-featured">
          <Img fluid={d.staff_image.localFile.childImageSharp.fluid} style={{ maxHeight: '30em' }} />
          <div className={(i === 0 ? 'jamie-bio' : 'nathan-bio')}>
            <h5 className={'name staff-name ' + (i === 0 ? 'jamie-name' : 'nathan-name')}>{d.staff_name}</h5>
            <p>{d.staff_blurb}</p>
          </div>
        </div>
      )
    })

    const itemsBiosDefault = dataCMS.filter(({ acf: d }) => { return d.staff_type === 'default' }).map(({ acf: d }, i) => {

      return (
        <div className={'grid-staff-member'}>
          <h5 className={'grid-staff-member-name'}>{d.staff_name}</h5>
          <div className="grid-staff-member-modal">
            <Img fluid={d.staff_image.localFile.childImageSharp.fluid} />
            <div className="grid-staff-member-title">{d.staff_title}</div>
            <div className="grid-staff-member-blurb"><p>{d.staff_blurb}</p></div>
          </div>
        </div>
      )
    }).concat(<div className={'grid-staff-member'}>
    <h5 className={'grid-staff-member-name'}>Sean Dolinar</h5>
    <div className="grid-staff-member-modal">
      {/* <Img fluid={d.staff_image.localFile.childImageSharp.fluid} /> */}
      <div style={{width: '100%', paddingBottom: '66.6667%', backgroundColor: '#2e3333'}}></div>
      <div className="grid-staff-member-title">Front-End Developer /<br/> Data Scientist</div>
      <div className="grid-staff-member-blurb"><p>Sean loves problem solving. Whether it's code or trying to find insight using data, he's passionate about finding a solution.</p></div>
    </div>
  </div>) // this is the career reach out
    // now a temp Sean


    // this changes the grid to fit different sizes
    let itemsBiosDefaultGridSize = itemsBiosDefault.length % 3 === 0 ? 3 : 2;





    return (
      <Layout
        headerFontColor="dark"
        headerFontSize="large"
        headerSubTitle="WHO WE ARE + WHAT WE DO"
      >
        <Helmet
          title={`Us - Skinny Tie Media`}
        >
          <meta name="description" content="WHO WE ARE + WHAT WE DO" />
        </Helmet>
        <div className="" style={{ flex: 1 }}>
          {/* <div className="header-wrapper background-header"  onLoad={() => this.setState({ initialPhotoLoad: true })} /> */}
          <div className="wrapper background">
            <div className="row wrapper-staff-member-featured" style={{ maxWidth: '80em' }}>
              {/* <div style={{height: '12em', width: '100%', backgroundColor: '#fff'}}></div> */}
              {/* <div style={{display: 'flex'}}> */}
              {itemsBiosFeatured}
              {/* </div> */}
            </div>
            <div className="row">
              <div className={`grid-staff col-${itemsBiosDefaultGridSize}`}>
                {itemsBiosDefault}
              </div>
            </div>
            <div className="row">
              <div className="join-us__wrapper" style={{ top: 0, fontSize: 18 }}>
                <p>We're building a company of great people (like you).
                  If you’re ready to grow and create we should meet.
          </p>
                <br />
                <p class="p__call-to-action">
                  <a
                    class="button-introduce"
                    href="mailto:n.wadding@skinnytiemedia.com">
                    Introduce yourself.
            </a>
                </p>
              </div>
              <div className="large-12 columns collage">
                {/* <img src={imgCollage} /> */}
                <Img fluid={itemBottomImage.acf.staff_image.localFile.childImageSharp.fluid} />
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
          staff_blurb,
          staff_type,
          staff_title,
          staff_image {
            localFile {
              #sourceUrl,
              childImageSharp {
                  fluid(maxWidth: 500, quality: 70) {
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
