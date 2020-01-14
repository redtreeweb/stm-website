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


class Temp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            initialPhotoLoad: false
        }
    }

    render() {
        // const dataCMS = this.props.data.allWordpressPage.edges.find(({ node }) => node.wordpress_id === 343);

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
                <div className="content-featured-image-fixed our-approach" onLoad={() => this.setState({ initialPhotoLoad: true })}></div>
                {/* <div className="" style={{ flex: 1 }}> */}
                <div className="content-featured-image-fixed our-approach spacer"></div>
                <div class="wrapper content-wrapper skinny">
                                    <div class="tnp tnp-subscription">
                    <form method="post" action="http://cms.skinnytiemedia.com/?na=s" onsubmit="return newsletter_check(this)">

                    <input type="hidden" name="nlang" value="" />
                    <div class="tnp-field tnp-field-firstname"><label>First name or full name</label><input class="tnp-firstname" type="text" name="nn" /></div>
                    <div class="tnp-field tnp-field-email"><label>Email</label><input class="tnp-email" type="email" name="ne" required /></div>
                    <div class="tnp-field tnp-field-privacy"><label><input type="checkbox" name="ny" required class="tnp-privacy" /> By continuing, you accept the privacy policy</label></div>
                    <div class="tnp-field tnp-field-button"><input class="tnp-submit" type="submit" value="Subscribe" /></div>
                    </form>
                    </div>

                </div>
                {this.state.initialPhotoLoad && <ImageCache />}
                <Footer />
            </Layout>
        )
    }
}

export default Temp

