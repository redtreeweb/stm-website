import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';

import Slider from 'react-slick';

import Layout from '../components/layout';
import Footer from '../components/footer';

import StaffMember from '../components/StaffMember';

import AnimatedIconsBlock from '../components/AnimatedIconsBlock';

import MapChart from "../components/MapChart";

import '../styles/grid-wall.scss';

const Us = ({data}) => {
        const [content, setContent] = useState("");

        const [activeStaff, setActiveStaff] = useState("");

        const staffData = data.allWordpressPage.edges.map(({ node }) => node);

        const itemsBiosDefault = staffData.map( ( { acf: d }, i ) => {

            const toggleActiveStaff = () => {
                // If clicking the already-active staff member, hide it
                if ( activeStaff === i ) {
                    setActiveStaff('');
                } else {
                    setActiveStaff( i );
                }
            }

            return (
                <StaffMember staffData={d} key={i} index={i} toggleFunction={toggleActiveStaff} activeStaff={activeStaff}></StaffMember>
            );
        });

        const bannerImages = function() {
            let images = data.wordpressAcfPages.acf.banner_images;
            images = images.map( function(d, index) {
                return (
                    <img src={d.image.source_url} key={index} />
                )
            });

            const sliderSettings = {
                autoplay: true,
                dots: true,
                arrows: false,
                autoplaySpeed: 7000
            };

            return (
                <Slider {...sliderSettings}>
                    {images}
                </Slider>
            );
        }

        return (
            <Layout
                bodyClass="about"
                headerFontColor="light"
                headerSubTitle="WHO WE ARE + WHAT WE DO"
            >
                <Helmet
                    title={`Us - Skinny Tie Media`}
                >
                    <meta name="description" content="WHO WE ARE + WHAT WE DO" />
                </Helmet>

                <div className="" style={{ flex: 1 }}>
                <div className="content-featured-image">
                    { bannerImages() }
                    <div className="overlay">
                        <h2>{ data.wordpressAcfPages.acf.banner_text }</h2>
                    </div>
                </div>
                    <div className="wrapper">
                        <div className="row">
                            <AnimatedIconsBlock></AnimatedIconsBlock>
                        </div>

                        <div className="leadership">
                            <div className="row">
                                <div className="large-12">
                                    <h2>Leadership Team</h2>
                                </div>
                                <div className="row">
                                    <div className={`grid-staff col-3`}>
                                        {itemsBiosDefault}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='map'>
                            <div className="row">
                                <div className="large-12">
                                    <h2>We Go Places</h2>
                                    {/* <p className="small-screens">Pinch or use scroll wheel to zoom.</p> */}
                                </div>
                            </div>
                            <div className="map-holder">
                                <MapChart setTooltipContent={setContent} />
                                <ReactTooltip className="mapTooltip" backgroundColor="#D94C00" offset={{top: 10, left: 10}}>{content}</ReactTooltip>
                            </div>
                        </div>

                        <div className="story">
                            <div className='row center'>
                                <div className='large-12'>
                                    <Link to="/contact" className="button">What's Your Story?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Layout>
        );
}


export const query = graphql`
    query AboutPageQuery {
        wordpressAcfPages(wordpress_id: {eq: 976}) {
            acf {
                banner_text,
                banner_images {
                    image {
                        path
                        source_url
                        alt_text
                    }
                }
            }
        }
        allWordpressPage(filter: {wordpress_parent: {eq: 406}}, sort: {fields: [menu_order], order: ASC}) {
            edges {
                node {
                    slug,
                    wordpress_parent,
                    wordpress_id,
                    content,
                    menu_order,
                    acf {
                        staff_name,
                        staff_title,
                        staff_blurb_flexible_page {
                            ... on WordPressAcf_row {
                                id
                                row {
                                    column {
                                        text
                                        image {
                                            source_url
                                            alt_text
                                        }
                                    }
                                }
                            }
                        },
                        staff_image {
                            localFile {
                                #sourceUrl,
                                childImageSharp {
                                    fluid(maxWidth: 500, quality: 70) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                        },
                        staff_image_active {
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
    }
`;

export default Us