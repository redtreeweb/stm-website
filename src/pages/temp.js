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

import { FormSubscribe } from '../components/FormSubscribe';


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
                <FormSubscribe />
                {this.state.initialPhotoLoad && <ImageCache />}
                <Footer />
            </Layout>
        )
    }
}

export default Temp

